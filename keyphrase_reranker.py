import networkx as nx
import re, math, bisect


# ~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
# [ Class keyphrase_reranker
# ~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
class keyphrase_reranker:
    """
    The *keyphrase_reranker* reranks a list of compression candidates according
    to the keyphrases they contain. Keyphrases are extracted from the set of
    related sentences using a modified version of the TextRank method
    [mihalcea-tarau:2004:EMNLP]_. First, an undirected weighted graph is
    constructed from the set of sentences in which *nodes* are (lowercased word,
    POS) tuples and *edges* represent co-occurrences. The TextRank algorithm is
    then applied on the graph to assign a score to each word. Second, keyphrase
    candidates are extracted from the set of sentences using POS syntactic
    filtering. Keyphrases are then ranked according to the words they contain.
    This class requires a set of related sentences (as a list of POS annotated
    sentences) and the N-best compression candidates (as a list of (score, list
    of (word, POS) tuples) tuples). The following optional parameters can be
    specified:

    - lang is the language parameter and is used for selecting the correct
      POS tags used for filtering keyphrase candidates.
    - patterns is a list of extra POS patterns (regexes) used for filtering
      keyphrase candidates, default is ``^(JJ)*(NNP|NNS|NN)+$`` for English and
      ``^(ADJ)*(NC|NPP)+(ADJ)*$`` for French.

    .. [mihalcea-tarau:2004:EMNLP] Rada Mihalcea and Paul Tarau, TextRank:
       Bringing Order into Texts, Empirical Methods in Natural Language
       Processing (EMNLP), 2004.
    """

    # -T-----------------------------------------------------------------------T-
    def __init__(self, sentence_list, nbest_compressions, lang="en",
                 patterns=[], stopwords=[], pos_separator='/', window_size=0):

        self.sentences = list(sentence_list)
        """ The list of related sentences provided by the user. """

        self.nbest_compressions = nbest_compressions
        """ The nbest compression candidates provided by the user. """

        self.graph = nx.Graph()
        """ The graph used for keyphrase extraction. """

        self.lang = lang
        """ The language of the input sentences, default is English (en)."""

        self.stopwords = set(stopwords)
        """ The set of words to be excluded from keyphrase extraction. """

        self.pos_separator = pos_separator
        """ The character (or string) used to separate a word and its
        Part Of Speech tag. """

        self.syntactic_filter = ['JJ', 'NNP', 'NNS', 'NN', 'NNPS']
        """ The POS tags used for generating keyphrase candidates. """

        self.keyphrase_candidates = {}
        """ Keyphrase candidates generated from the set of sentences. """

        self.word_scores = {}
        """ Scores for each word computed with TextRank. """

        self.keyphrase_scores = {}
        """ Scores for each keyphrase candidate. """

        self.syntactic_patterns = ['^(JJ)*(NNP|NNS|NN)+$']
        """ Syntactic patterns for filtering keyphrase candidates. """

        # Specific rules for French
        if self.lang == "fr":
            self.syntactic_filter = ['NPP', 'NC', 'ADJ']
            self.syntactic_patterns = ['^(ADJ)*(NC|NPP)+(ADJ)*$']

        self.window_size = window_size
        """ Window size for TextRank graph """

        # Add extra patterns
        self.syntactic_patterns.extend(patterns)

        # 1. Build the word graph from the sentences
        self.build_graph(self.window_size)

        if self.graph.nodes() != []:
            # 2. Generate the keyphrase candidates
            self.generate_candidates()

            # 3. Compute the TextRank scores for each word in the graph
            self.undirected_TextRank()

            # 4. Compute the score of each keyphrase candidate
            self.score_keyphrase_candidates()

            # 5. Cluster keyphrases to remove redundancy
            self.cluster_keyphrase_candidates()

    # -B-----------------------------------------------------------------------B-


    # -T-----------------------------------------------------------------------T-
    def build_graph(self, window=0):
        """
        Build a word graph from the list of sentences. Each node in the graph
        represents a word. An edge is created between two nodes if they co-occur
        in a given window (default is 0, indicating the whole sentence).
        """

        # For each sentence
        for i in range(len(self.sentences)):

            # Normalise extra white spaces
            self.sentences[i] = re.sub(' +', ' ', self.sentences[i])

            # Tokenize the current sentence in word/POS
            sentence = self.sentences[i].split(' ')

            # 1. Looping over the words and creating the nodes. Sentences are
            #    also converted to a list of tuples
            for j in range(len(sentence)):

                # Convert word/POS to (word, POS) tuple
                word, pos = self.wordpos_to_tuple(sentence[j])

                # Replace word/POS by (word, POS) tuple in the sentence
                sentence[j] = (word.lower(), pos)

                # Modify the POS tags of stopwords to exclude them
                if sentence[j][0].lower() in self.stopwords:
                    sentence[j] = (sentence[j][0], "STOPWORD")

                # Add the word only if it belongs to one of the syntactic
                # categories
                if sentence[j][1] in self.syntactic_filter:

                    # Add node to the graph if not exists
                    if not self.graph.has_node(sentence[j]):
                        self.graph.add_node(sentence[j])

            # 2. Create the edges between the nodes using co-occurencies
            for j in range(len(sentence)):

                # Get the first node
                first_node = sentence[j]

                # Switch to set the window for the whole sentence
                max_window = window
                if window < 1:
                    max_window = len(sentence)

                # For the other words in the window
                for k in range(j + 1, min(len(sentence), j + max_window)):

                    # Get the second node
                    second_node = sentence[k]

                    # Check if nodes exists
                    if self.graph.has_node(first_node) and \
                            self.graph.has_node(second_node):

                        # Add edge if not exists
                        if not self.graph.has_edge(first_node, second_node):
                            self.graph.add_edge(first_node, second_node, weight=1)
                        # Else modify weight
                        else:
                            self.graph[first_node][second_node]['weight'] += 1

            # Replace sentence by the list of tuples
            self.sentences[i] = sentence

    # -B-----------------------------------------------------------------------B-


    # -T-----------------------------------------------------------------------T-
    def generate_candidates(self):
        """
        Function to generate the keyphrase candidates from the set of related
        sentences. Keyphrases candidates are the largest n-grams containing only
        words from the defined syntactic categories.
        """

        # For each sentence
        for i in range(len(self.sentences)):

            sentence = self.sentences[i]

            # List for iteratively constructing a keyphrase candidate
            candidate = []

            # For each (word, pos) tuple in the sentence
            for j in range(len(sentence)):

                word, pos = sentence[j]

                # If word is to be included in a candidate
                if pos in self.syntactic_filter:

                    # Adds word to candidate
                    candidate.append(sentence[j])

                # If a candidate keyphrase is in the buffer
                elif len(candidate) > 0 and self.is_a_candidate(candidate):

                    # Add candidate
                    keyphrase = ' '.join(u[0] for u in candidate)
                    self.keyphrase_candidates[keyphrase] = candidate

                    # Flush the buffer
                    candidate = []

                else:

                    # Flush the buffer
                    candidate = []

            # Handle the last possible candidate
            if len(candidate) > 0 and self.is_a_candidate(candidate):
                # Add candidate
                keyphrase = ' '.join(u[0] for u in candidate)
                self.keyphrase_candidates[keyphrase] = candidate

    # -B-----------------------------------------------------------------------B-


    # -T-----------------------------------------------------------------------T-
    def is_a_candidate(self, keyphrase_candidate):
        """
        Function to check if a keyphrase candidate is a valid one according to
        the syntactic patterns.
        """

        candidate_pattern = ''.join(u[1] for u in keyphrase_candidate)

        for pattern in self.syntactic_patterns:
            if not re.search(pattern, candidate_pattern):
                return False

        return True

    # -B-----------------------------------------------------------------------B-


    # -T-----------------------------------------------------------------------T-
    def undirected_TextRank(self, d=0.85, f_conv=0.0001):
        """
        Implementation of the TextRank algorithm as described in
        [mihalcea-tarau:2004:EMNLP]_. Node scores are computed iteratively until
        convergence (a threshold is used, default is 0.0001). The dampling
        factor is by default set to 0.85 as recommended in the article.
        """

        # Initialise the maximum node difference for checking stability
        max_node_difference = f_conv

        # Initialise node scores to 1
        self.word_scores = {}
        for node in self.graph.nodes():
            self.word_scores[node] = 1.0

        # While the node scores are not stabilized
        while (max_node_difference >= f_conv):

            # Create a copy of the current node scores
            current_node_scores = self.word_scores.copy()

            # For each node I in the graph
            for node_i in self.graph.nodes():

                sum_Vj = 0

                # For each node J connected to I
                for node_j in self.graph.neighbors_iter(node_i):

                    wji = self.graph[node_j][node_i]['weight']
                    WSVj = current_node_scores[node_j]
                    sum_wjk = 0.0

                    # For each node K connected to J
                    for node_k in self.graph.neighbors_iter(node_j):
                        sum_wjk += self.graph[node_j][node_k]['weight']

                    sum_Vj += ((wji * WSVj) / sum_wjk)

                # Modify node score
                self.word_scores[node_i] = (1 - d) + (d * sum_Vj)

                # Compute the difference between old and new score
                score_difference = math.fabs(self.word_scores[node_i] \
                                             - current_node_scores[node_i])

                max_node_difference = max(score_difference, score_difference)

    # -B-----------------------------------------------------------------------B-


    # -T-----------------------------------------------------------------------T-
    def score_keyphrase_candidates(self):
        """
        Function to compute the score of each keyphrase candidate according to
        the words it contains. The score of each keyphrase is calculated as the
        sum of its word scores normalized by its length + 1.
        """

        # Compute the score of each candidate according to its words
        for keyphrase in self.keyphrase_candidates:

            # Compute the sum of word scores for each candidate
            keyphrase_score = 0.0
            for word_pos_tuple in self.keyphrase_candidates[keyphrase]:
                keyphrase_score += self.word_scores[word_pos_tuple]

            # Normalise score by length
            keyphrase_score /= (len(self.keyphrase_candidates[keyphrase]) + 1.0)

            # Add score to the keyphrase candidates
            self.keyphrase_scores[keyphrase] = keyphrase_score

    # -B-----------------------------------------------------------------------B-


    # -T-----------------------------------------------------------------------T-
    def cluster_keyphrase_candidates(self):
        """
        Function to cluster keyphrase candidates and remove redundancy. A large
        number of the generated keyphrase candidates are redundant. Some
        keyphrases may be contained within larger ones, e.g. *giant tortoise*
        and *Pinta Island giant tortoise*. To solve this problem, generated
        keyphrases are clustered using word overlap. For each cluster, the
        keyphrase with the highest score is selected.
        """

        # Sort keyphrase candidates by length
        descending = sorted(self.keyphrase_candidates,
                            key=lambda x: len(self.keyphrase_candidates[x]),
                            reverse=True)

        # Initialize the cluster container
        clusters = {}

        # Loop over keyphrases by decreasing length
        for keyphrase in descending:

            found_cluster = False

            # Create a set of words from the keyphrase
            keyphrase_words = set(keyphrase.split(' '))

            # Loop over existing clusters
            for cluster in clusters:

                # Create a set of words from the cluster representative
                cluster_words = set(cluster.split(' '))

                # Check if keyphrase words are all contained in the cluster
                # representative words
                if len(keyphrase_words.difference(cluster_words)) == 0:
                    # Add keyphrase to cluster
                    clusters[cluster].append(keyphrase)

                    # Mark cluster as found
                    found_cluster = True

            # If keyphrase does not fit into any existing cluster
            if not found_cluster:
                clusters[keyphrase] = [keyphrase]

        # Initialize the best candidate cluster container
        best_candidate_keyphrases = []

        # Loop over the clusters to find the best keyphrases
        for cluster in clusters:
            # Find the best scored keyphrase candidate in the cluster
            sorted_cluster = sorted(clusters[cluster],
                                    key=lambda cluster: self.keyphrase_scores[cluster],
                                    reverse=True)

            best_candidate_keyphrases.append(sorted_cluster[0])

        # Initialize the non redundant clustered keyphrases
        non_redundant_keyphrases = []

        # Sort best candidate by score
        sorted_keyphrases = sorted(best_candidate_keyphrases,
                                   key=lambda keyphrase: self.keyphrase_scores[keyphrase],
                                   reverse=True)

        # Last loop to remove redundancy in cluster best candidates
        for keyphrase in sorted_keyphrases:
            is_redundant = False
            for prev_keyphrase in non_redundant_keyphrases:
                if keyphrase in prev_keyphrase:
                    is_redundant = True
                    break
            if not is_redundant:
                non_redundant_keyphrases.append(keyphrase)

        # Modify the keyphrase candidate dictionnaries according to the clusters
        for keyphrase in self.keyphrase_candidates.keys():

            # Remove candidate if not in cluster
            if not keyphrase in non_redundant_keyphrases:
                del self.keyphrase_candidates[keyphrase]
                del self.keyphrase_scores[keyphrase]

    # -B-----------------------------------------------------------------------B-


    # -T-----------------------------------------------------------------------T-
    def rerank_nbest_compressions(self):
        """
        Function that reranks the nbest compressions according to the keyphrases
        they contain. The cummulative score (original score) is normalized by
        (compression length * Sum of keyphrase scores).
        """

        reranked_compressions = []

        # Loop over the compression candidates
        for cummulative_score, path in self.nbest_compressions:

            # Generate the sentence form the path
            compression = ' '.join([u[0] for u in path])

            # Initialize total keyphrase score
            total_keyphrase_score = 1.0

            # Loop over the keyphrases and sum the scores
            for keyphrase in self.keyphrase_candidates:
                if keyphrase in compression.lower():
                    total_keyphrase_score += self.keyphrase_scores[keyphrase]

            score = (cummulative_score / (len(path) * total_keyphrase_score))

            bisect.insort(reranked_compressions,
                          (score, path))

        return reranked_compressions

    # -B-----------------------------------------------------------------------B-

    # -T-----------------------------------------------------------------------T-
    def wordpos_to_tuple(self, word):
        """
        This function converts a word/POS to a (word, POS) tuple. The character
        used for separating word and POS can be specified (default is /).
        """

        # Splitting word, POS using regex
        pos_separator_re = re.escape(self.pos_separator)
        m = re.match("^(.+)" + pos_separator_re + "(.+)$", word)

        # Extract the word information
        token, POS = m.group(1), m.group(2)

        # Return the tuple
        return (token.lower(), POS)

    # -B-----------------------------------------------------------------------B-


    # -T-----------------------------------------------------------------------T-
    def tuple_to_wordpos(self, wordpos_tuple):
        """
        This function converts a (word, POS) tuple to word/POS. The character
        used for separating word and POS can be specified (default is /).
        """

        # Return the word +delim+ POS
        return wordpos_tuple[0] + self.pos_separator + wordpos_tuple[1]
        # -B-----------------------------------------------------------------------B-

# ~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
# ] Ending keyphrase_reranker class
# ~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~
