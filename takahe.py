"""
Multi-Sentence Compression Main class
modified based on the takahe project
https://github.com/boudinfl/takahe
"""

import re
import copy
import bisect
import nltk
import networkx as nx
import numpy as np
import core_rank as cr
import utils
import word_attraction as wa
import keyphrase_reranker
import tf_idf
from nltk.corpus import wordnet as wn
from networkx.drawing.nx_agraph import write_dot


class word_graph:
    """
    The word_graph class constructs a word graph from the set of sentences given
    as input. The set of sentences is a list of strings, sentences are tokenized
    and words are POS-tagged (e.g. ``"Saturn/NNP is/VBZ the/DT sixth/JJ 
    planet/NN from/IN the/DT Sun/NNP in/IN the/DT Solar/NNP System/NNP"``).
    """

    def __init__(
            self,
            system_name,
            tagged_community,
            language,
            punct_tag,
            pos_separator,
            lm,
            wv,
            stopwords,
            meeting_idf_dict,
            remove_stopwords,
            pos_filtering,
            stemming,
            cr_w,
            cr_weighted,
            cr_overspanning,
            nb_words,
            diversity_n_clusters,
            keyphrase_reranker_window_size,
            common_hyp_threshold_verb,
            common_hyp_threshold_nonverb
    ):
        # ######################
        # ### SWITCH SYSTEM ####
        # ######################
        system_name_list = ['tixier', 'filippova', 'boudin', 'mehdad', 'tixier0', 'tixier1', 'tixier2', 'tixier3', 'tixier4', 'tixier5', 'tixier6']
        system_name_index = system_name_list.index(system_name)

        # wordnet        : WordNet for graph node construction (synonym, hypernym, etc.)
        # word_attraction: word_attraction_force score for edge weight assignment
        # fluency        : fluency_score for path re-ranking
        # diversity      : diversity score for path re-ranking
        # twidf_coverage : twidf based coverage score for path re-ranking, ambiguous node selection for graph node construction
        # tfidf_coverage : twidf based coverage score for path re-ranking, ambiguous node selection for graph node construction
        # keyphrase      : keyphrase-based approach for path re-ranking
        self.wordnet         = bool([1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1][system_name_index])
        self.word_attraction = bool([1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1][system_name_index])
        self.fluency         = bool([1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1][system_name_index])
        self.diversity       = bool([1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0][system_name_index])
        self.twidf_coverage  = bool([1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1][system_name_index])
        self.tfidf_coverage  = bool([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0][system_name_index])
        self.keyphrase       = bool([0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0][system_name_index])

        # #######################
        # ### INITIALISATION ####
        # #######################
        # tagged sentence community provided by the user.
        self.tagged_community = tagged_community
        # copy of original tagged sentence community
        self.original_tagged_community = copy.copy(tagged_community)

        # language of tagged_community
        self.language = language
        # punctuation tag used in the text of tagged_community.
        self.punct_tag = punct_tag
        # character used to separate a word and its Part of Speech tag
        self.pos_separator = pos_separator

        # language model for fluency score
        self.lm = lm
        # word embedding vectors for word_attraction and diversity score
        self.wv = wv
        # idf for coverage score
        self.meeting_idf_dict = meeting_idf_dict
        # set of stopwords
        self.stopwords = stopwords

        self.remove_stopwords = remove_stopwords
        self.pos_filtering = pos_filtering
        self.stemming = stemming
        self.stemmer = nltk.stem.PorterStemmer()

        self.cr_w = cr_w
        self.cr_weighted = cr_weighted
        self.cr_overspanning = cr_overspanning

        # minimal number of words (length) for a legit path in the compression
        self.nb_words = nb_words

        # k values of k-means for diversity score
        self.diversity_n_clusters = diversity_n_clusters
        # keyphrase_reranker_window_size (default is 0, indicating the whole sentence)
        self.keyphrase_reranker_window_size = keyphrase_reranker_window_size
        # threshold for replacing two words by its common hypernym
        self.common_hyp_threshold_verb    = common_hyp_threshold_verb
        self.common_hyp_threshold_nonverb = common_hyp_threshold_nonverb

        # ###############################
        # ### TFIDF (community level) ###
        # ###############################
        # consider community as DOCUMENT, meeting as CORPUS
        # TfIdf is based on lower_case form
        if self.tfidf_coverage:
            tagged_document = ' '.join(tagged_community)
            cleaned_tagged_document = utils.clean_tagged_text(
                tagged_document, stopwords,
                remove_stopwords=self.remove_stopwords, pos_filtering=self.pos_filtering,
                stemming=self.stemming, lower_case=True,
                pos_separator=self.pos_separator, punct_tag=self.punct_tag
            )
            cleaned_document = utils.remove_tags_from_text(cleaned_tagged_document)

            self.community_tf_dict = tf_idf.term_frequencies(cleaned_document.split(' '))

            self.tfidf_dict = {
                key: self.community_tf_dict[key] * self.meeting_idf_dict[key]
                for key in self.community_tf_dict.keys()
            }

        # ################################
        # ### TWIDF (community level) ####
        # ################################
        # consider community as DOCUMENT, meeting as CORPUS
        # TwIdf is based on lower_case form
        if self.twidf_coverage:
            lists_of_terms = []
            for tagged_sentence in self.tagged_community:
                cleaned_tagged_sentence = utils.clean_tagged_text(
                    tagged_sentence, stopwords,
                    remove_stopwords=self.remove_stopwords, pos_filtering=self.pos_filtering,
                    stemming=self.stemming, lower_case=True,
                    pos_separator=self.pos_separator, punct_tag=self.punct_tag
                )
                if cleaned_tagged_sentence != '':
                    cleaned_sentence = utils.remove_tags_from_text(cleaned_tagged_sentence)
                    lists_of_terms.append(cleaned_sentence.split(' '))

            self.community_tw_dict = cr.get_core_rank_scores(lists_of_terms, window_size=self.cr_w, overspanning=self.cr_overspanning, weighted=self.cr_weighted)

            self.twidf_dict = {
                key: self.community_tw_dict[key] * self.meeting_idf_dict[key]
                for key in self.community_tw_dict.keys()
            }

        # ############################
        # ### GRAPH INITIALISATION ###
        # ############################
        # The start token in the graph.
        self.start = '-start-'
        # The end token in the graph.
        self.stop = '-end-'
        # The separator used between a word and its POS in the graph.
        self.sep = '/-/'
        # Verb must occur in the candidate compressions.
        # The list of verb POS tags required in the compression. At least *one*
        if self.language == 'en':
            self.verb_tags = set(['VB', 'VBD', 'VBP', 'VBZ', 'VH', 'VHD', 'VHP', 'VBZ', 'VV', 'VVD', 'VVP', 'VVZ'])
        elif self.language == "fr":
            self.verb_tags = set(['V', 'VPP', 'VINF'])

        # The directed graph used for fusion.
        self.graph = nx.DiGraph()

        # ##########################
        # ### GRAPH CONSTRUCTION ###
        # ##########################
        # 1. Pre-process the sentences
        self.pre_process_tagged_community()

        # 2. Build the word graph
        if self.wordnet:
            self.build_graph_wn()
        else:
            self.build_graph()

        # 3. Check graph
        # contain only one '-start-' and '-end-'
        if ('-start-/-/-start-', 1) in self.graph.nodes() or ('-end-/-/-end-', 1) in self.graph.nodes():
            raise RuntimeError()

    # ######################
    # ### PRE-PROCESSING ###
    # ######################
    def pre_process_tagged_community(self):
        """
        Pre-process the list of tagged sentences given as input. Split sentences using
        whitespaces and convert each tagged sentence to a list of (word, POS) tuples.
        """
        for tagged_sentence in copy.copy(self.tagged_community):
            # Remove stopwords sit at head and tail of a tokenized tagged sentence
            tokenized_tagged_sentence = utils.strip_stopwords(tagged_sentence.split(' '), self.stopwords)

            # sentence might be empty (contains only stopwords) after strip_stopwords
            if tokenized_tagged_sentence == []:
                self.tagged_community.remove(tagged_sentence)
                print "drop:", tagged_sentence
                continue

            # Add the start token at the head of the container
            container = [(self.start, self.start)]
            # Add sentence tokens to the container
            container += [tuple(tagged_word.split(self.pos_separator)) for tagged_word in tokenized_tagged_sentence]
            # Add the stop token at the end of the container
            container += [(self.stop, self.stop)]

            # Recopy the container into the current sentence
            self.tagged_community[self.tagged_community.index(tagged_sentence)] = container

    # ######################################
    # ### BUILD GRAPH (without word_net) ###
    # ######################################
    # filippova, boudin
    def build_graph(self):
        """
        Constructs a directed word graph from the list of input sentences. Each
        sentence is iteratively added to the directed graph according to the
        following algorithm:

        - Word mapping/creation is done in four steps:

            1. non-stopwords for which no candidate exists in the graph or for
               which an unambiguous mapping is possible or which occur more than
               once in the sentence

            2. non-stopwords for which there are either several possible
               candidates in the graph

            3. stopwords

            4. punctuation marks

        For the last three groups of words where mapping is ambiguous we check
        the immediate context (the preceding and following words in the sentence
        and the neighboring nodes in the graph) and select the candidate which
        has larger overlap in the context, or the one with a greater frequency
        (i.e. the one which has more words mapped onto it). Stopwords are mapped
        only if there is some overlap in non-stopwords neighbors, otherwise a
        new node is created. Punctuation marks are mapped only if the preceding
        and following words in the sentence and the neighboring nodes are the
        same.

        - Edges are then computed and added between mapped words.

        Each node in the graph is represented as a tuple ('word/POS', id) and
        possesses an info list containing (sentence_id, position_in_sentence)
        tuples.
        """

        # Iteratively add each sentence in the graph ---------------------------
        for i in range(len(self.tagged_community)):

            # Compute the sentence length
            sentence_len = len(self.tagged_community[i])

            # Create the mapping container
            mapping = [0] * sentence_len

            #-------------------------------------------------------------------
            # 1. non-stopwords for which no candidate exists in the graph or for
            #    which an unambiguous mapping is possible or which occur more
            #    than once in the sentence.
            #-------------------------------------------------------------------
            for j in range(sentence_len):

                # Get the word and tag
                token, POS = self.tagged_community[i][j]

                # If stopword or punctuation mark, continues
                if token.lower() in self.stopwords or POS == self.punct_tag:
                    continue

                # Create the node identifier
                node = token + self.sep + POS

                # Find the number of ambiguous nodes in the graph
                # based on lower case form
                ambgs_nodes = self.ambiguous_nodes(node)
                k = len(ambgs_nodes)

                # If there is no node in the graph, create one with id = 0
                if k == 0:

                    # Add the node in the graph
                    self.graph.add_node( (node, 0), info=[(i, j)], label=token )

                    # Mark the word as mapped to k
                    mapping[j] = (node, 0)

                # If there is only one matching node in the graph (id is 0)
                elif k == 1:

                    # Get the sentences id of this ambiguous node
                    ids = []
                    for sid, pos_s in self.graph.node[ambgs_nodes[0]]['info']:
                        ids.append(sid)

                    # Update the node in the graph if not same sentence
                    # '-start-/-/-start-' and '-end-/-/-end-' are added to single existing graph node
                    if i not in ids:
                        self.graph.node[ambgs_nodes[0]]['info'].append((i, j))
                        mapping[j] = ambgs_nodes[0]

                    # Else Create new node for redundant word
                    else:
                        self.graph.add_node( (node, 1), info=[(i, j)], label=token )
                        mapping[j] = (node, 1)

            #-------------------------------------------------------------------
            # 2. non-stopwords for which there are either several possible
            #    candidates in the graph.
            #-------------------------------------------------------------------
            for j in range(sentence_len):

                # Get the word and tag
                token, POS = self.tagged_community[i][j]

                # If stopword or punctuation mark, continues
                if token.lower() in self.stopwords or POS == self.punct_tag:
                    continue

                # If word is not already mapped to a node
                if mapping[j] == 0:

                    # Create the node identifier
                    node = token + self.sep + POS

                    # Create the neighboring nodes identifiers
                    # immediate context comparison is based on lower case form
                    prev_token, prev_POS = self.tagged_community[i][j-1]
                    next_token, next_POS = self.tagged_community[i][j+1]
                    prev_node = prev_token.lower() + self.sep + prev_POS
                    next_node = next_token.lower() + self.sep + next_POS

                    # Find the number of ambiguous nodes in the graph
                    ambgs_nodes = self.ambiguous_nodes(node)
                    k = len(ambgs_nodes)

                    if k <= 1:
                        raise RuntimeError()

                    # Search for the ambiguous node with the larger overlap in
                    # context or the greater frequency.
                    ambinode_overlap = []
                    ambinode_frequency = []

                    # For each ambiguous node
                    for ambgs_node in ambgs_nodes:

                        # Get the immediate context words of the nodes
                        l_context = self.get_directed_context(ambgs_node, 'left', non_pos=False)
                        r_context = self.get_directed_context(ambgs_node, 'right', non_pos=False)

                        # Compute the (directed) context sum
                        val = l_context.count(prev_node)
                        val += r_context.count(next_node)

                        # Add the count of the overlapping words
                        ambinode_overlap.append(val)

                        # Add the frequency of the ambiguous node
                        ambinode_frequency.append(
                            len( self.graph.node[ambgs_node]['info'] )
                        )

                    # Search for the best candidate while avoiding a loop
                    found = False
                    selected = 0
                    while not found:

                        # Select the ambiguous node
                        selected = utils.max_index(ambinode_overlap)
                        if ambinode_overlap[selected] == 0:
                            selected = utils.max_index(ambinode_frequency)

                        # Get the sentences id of this node
                        ids = []
                        for sid, p in self.graph.node[ambgs_nodes[selected]]['info']:
                            ids.append(sid)

                        # Test if there is no loop
                        if i not in ids:
                            found = True
                            break

                        # Remove the candidate from the lists
                        else:
                            del ambinode_overlap[selected]
                            del ambinode_frequency[selected]
                            del ambgs_nodes[selected]

                        # Avoid endless loops
                        if len(ambgs_nodes) == 0:
                            break

                    # Update the node in the graph if not same sentence
                    if found:
                        self.graph.node[ambgs_nodes[selected]]['info'].append((i, j))
                        mapping[j] = ambgs_nodes[selected]

                    # Else create new node for redundant word
                    else:
                        self.graph.add_node( (node, k), info=[(i, j)], label=token )
                        mapping[j] = (node, k)

            #-------------------------------------------------------------------
            # 3. map the stopwords to the nodes
            #-------------------------------------------------------------------
            for j in range(sentence_len):

                # Get the word and tag
                token, POS = self.tagged_community[i][j]

                # If *NOT* stopword, continues
                if token.lower() not in self.stopwords:
                    continue

                # Create the node identifier
                node = token + self.sep + POS

                # Find the number of ambiguous nodes in the graph
                ambgs_nodes = self.ambiguous_nodes(node)
                k = len(ambgs_nodes)

                # If there is no node in the graph, create one with id = 0
                if k == 0:

                    # Add the node in the graph
                    self.graph.add_node( (node, 0), info=[(i, j)], label=token )

                    # Mark the word as mapped to k
                    mapping[j] = (node, 0)

                # Else find the node with overlap in context or create one
                else:

                    # Create the neighboring nodes identifiers
                    prev_token, prev_POS = self.tagged_community[i][j-1]
                    next_token, next_POS = self.tagged_community[i][j+1]
                    prev_node = prev_token.lower() + self.sep + prev_POS
                    next_node = next_token.lower() + self.sep + next_POS

                    ambinode_overlap = []

                    # For each ambiguous node
                    for ambgs_node in ambgs_nodes:

                        # Get the immediate context words of the nodes
                        l_context = self.get_directed_context(ambgs_node, 'left', non_pos=True)
                        r_context = self.get_directed_context(ambgs_node, 'right', non_pos=True)

                        # Compute the (directed) context sum
                        val = l_context.count(prev_node)
                        val += r_context.count(next_node)

                        # Add the count of the overlapping words
                        ambinode_overlap.append(val)

                    # Get best overlap candidate
                    selected = utils.max_index(ambinode_overlap)

                    # Get the sentences id of the best candidate node
                    ids = []
                    for sid, pos_s in self.graph.node[ambgs_nodes[selected]]['info']:
                        ids.append(sid)

                    # Update the node in the graph if not same sentence and
                    # there is at least one (left or right) overlap in context
                    if i not in ids and ambinode_overlap[selected] > 0:

                        # Update the node in the graph
                        self.graph.node[ambgs_nodes[selected]]['info'].append((i, j))

                        # Mark the word as mapped to k
                        mapping[j] = ambgs_nodes[selected]

                    # Else create a new node
                    else:
                        # Add the node in the graph
                        self.graph.add_node( (node, k) , info=[(i, j)], label=token)

                        # Mark the word as mapped to k
                        mapping[j] = (node, k)

            #-------------------------------------------------------------------
            # 4. lastly map the punctuation marks to the nodes
            #-------------------------------------------------------------------
            for j in range(sentence_len):

                # Get the word and tag
                token, POS = self.tagged_community[i][j]

                # If *NOT* punctuation mark, continues
                if POS != self.punct_tag:
                    continue

                # Create the node identifier
                node = token + self.sep + POS

                # Find the number of ambiguous nodes in the graph
                ambgs_nodes = self.ambiguous_nodes(node)
                k = len(ambgs_nodes)

                # If there is no node in the graph, create one with id = 0
                if k == 0:

                    # Add the node in the graph
                    self.graph.add_node( (node, 0), info=[(i, j)], label=token )

                    # Mark the word as mapped to k
                    mapping[j] = (node, 0)

                # Else find the node with overlap in context or create one
                else:

                    # Create the neighboring nodes identifiers
                    prev_token, prev_POS = self.tagged_community[i][j-1]
                    next_token, next_POS = self.tagged_community[i][j+1]
                    prev_node = prev_token.lower() + self.sep + prev_POS
                    next_node = next_token.lower() + self.sep + next_POS

                    ambinode_overlap = []

                    # For each ambiguous node
                    for ambgs_node in ambgs_nodes:

                        # Get the immediate context words of the nodes
                        l_context = self.get_directed_context(ambgs_node, 'left', non_pos=False)
                        r_context = self.get_directed_context(ambgs_node, 'right', non_pos=False)

                        # Compute the (directed) context sum
                        val = l_context.count(prev_node)
                        val += r_context.count(next_node)

                        # Add the count of the overlapping words
                        ambinode_overlap.append(val)

                    # Get best overlap candidate
                    selected = utils.max_index(ambinode_overlap)

                    # Get the sentences id of the best candidate node
                    ids = []
                    for sid, pos_s in self.graph.node[ambgs_nodes[selected]]['info']:
                        ids.append(sid)

                    # Update the node in the graph if not same sentence and
                    # there is two (left and right) overlaps in context
                    if i not in ids and ambinode_overlap[selected] > 1:

                        # Update the node in the graph
                        self.graph.node[ambgs_nodes[selected]]['info'].append((i, j))

                        # Mark the word as mapped to k
                        mapping[j] = ambgs_nodes[selected]

                    # Else create a new node
                    else:
                        # Add the node in the graph
                        self.graph.add_node( (node, k), info=[(i, j)], label=token )

                        # Mark the word as mapped to k
                        mapping[j] = (node, k)

            #-------------------------------------------------------------------
            # 4. Connects the mapped words with directed edges
            #-------------------------------------------------------------------
            for j in range(1, len(mapping)):
                self.graph.add_edge(mapping[j-1], mapping[j])

        # Assigns a weight to each node in the graph ---------------------------
        if self.word_attraction:
            for node1, node2 in self.graph.edges_iter():
                edge_weight = self.get_edge_weight_word_attract(node1, node2)
                self.graph.add_edge(node1, node2, weight=edge_weight)
        else:
            for node1, node2 in self.graph.edges_iter():
                edge_weight = self.get_edge_weight(node1, node2)
                self.graph.add_edge(node1, node2, weight=edge_weight)


    # ###################################
    # ### BUILD GRAPH (with word_net) ###
    # ###################################
    # tixier, mehdad
    def build_graph_wn(self):
        """
        Constructs a directed word graph from the list of input sentences. Each
        sentence is iteratively added to the directed graph according to the
        following algorithm:

        - Word mapping/creation is done in three steps:

            1. non-stopwords (same, syn, hyp, entail)

            2. stopwords

            3. punctuation marks

        When mapping is ambiguous we check the immediate context (the preceding
        and following words in the sentence and the neighboring nodes in the graph)
        and select the candidate which has larger overlap in the context, or the one
        with a greater tfidf/twidf scores. Stopwords are mapped only if there is some
        overlap in non-stopwords neighbors, otherwise a new node is created. Punctuation
        marks are mapped only if the preceding and following words in the sentence and
        the neighboring nodes are the same.

        - Edges are then computed and added between mapped words.

        Each node in the graph is represented as a tuple ('word/POS', id) and
        possesses an info list containing (sentence_id, position_in_sentence)
        tuples.
        """

        # Iteratively add each sentence in the graph
        #-------------------------------------------------------------------
        # 1. non-stopwords
        #    same_nodes, synonyme_nodes, hypernyme_nodes,
        #    common_hypernym_nodes, entail_nodes
        #-------------------------------------------------------------------
        self.mapping = []

        for i in range(len(self.tagged_community)):

            # Compute the sentence length
            sentence_len = len(self.tagged_community[i])

            # Create the mapping container
            self.mapping.append([0] * sentence_len)

            for j in range(sentence_len):

                # Treat '-start-/-/-start-' and '-end-/-/-end-'
                if i == 0 and j == 0:
                    self.graph.add_node(('-start-/-/-start-', 0), info=[(i, j)], label='-start-')
                    self.mapping[i][j] = ('-start-/-/-start-', 0)
                    continue
                elif i == 0 and j == sentence_len - 1:
                    self.graph.add_node(('-end-/-/-end-', 0), info=[(i, j)], label='-end-')
                    self.mapping[i][j] = ('-end-/-/-end-', 0)
                    continue
                elif j == 0:
                    self.graph.node[('-start-/-/-start-', 0)]['info'].append((i, j))
                    self.mapping[i][j] = ('-start-/-/-start-', 0)
                    continue
                elif j == sentence_len - 1:
                    self.graph.node[('-end-/-/-end-', 0)]['info'].append((i, j))
                    self.mapping[i][j] = ('-end-/-/-end-', 0)
                    continue

                # Get the word and tag
                token, POS = self.tagged_community[i][j]

                # If stopword or punctuation mark, continues
                if token.lower() in self.stopwords or POS == self.punct_tag:
                    continue

                # Create the node identifier
                node = token + self.sep + POS

                #-------------------------------------------------------------------
                # Find the number of same/syn/hyp/common_hyp/entail nodes in the graph
                # pos tags were transformed to WordNet word tag
                #-------------------------------------------------------------------
                same_candidates       = self.same_nodes(node)
                syn_candidates        = self.synonym_nodes(node)
                hyp_candidates        = self.hypernym_nodes(node)
                common_hyp_candidates = self.common_hypernym_nodes(node)
                entail_candidates     = self.entail_nodes(node)

                #-------------------------------------------------------------------
                # Filter candidates, remove node of same sentence
                #-------------------------------------------------------------------
                same_candidates       = self.filter_cand(same_candidates, i)
                syn_candidates        = self.filter_cand(syn_candidates, i)
                hyp_candidates        = self.filter_cand(hyp_candidates, i)
                common_hyp_candidates = self.filter_cand_common_hyp(common_hyp_candidates, i)
                entail_candidates     = self.filter_cand(entail_candidates, i)

                #print node, same_candidates, syn_candidates, hyp_candidates, common_hyp_candidates, entail_candidates

                #-------------------------------------------------------------------
                # If there is no ambiguous node in the graph, add new node to graph
                # else, for same_candidates, choose the node based on larger immediate context overlap or frequency
                # for syn_candidates, hyp_candidates and entail_candidates, choose the node based on larger tfidf/twidf score
                # for common_hyp_candidates, new_node_to_add and an existing_node in the graph will be replaced by their common hypernym
                # in case of bypassing threshold
                #-------------------------------------------------------------------
                if same_candidates != []:
                    node_to_append = self.best_candidate_context(same_candidates, i, j)
                    self.graph.node[node_to_append]['info'].append((i, j))
                    self.mapping[i][j] = node_to_append
                    continue

                if syn_candidates != []:
                    if self.tfidf_coverage:
                        node_to_replace, max_score = self.best_candidate_tfidf(syn_candidates)
                        score = self.get_tf_idf(token)
                    elif self.twidf_coverage:
                        node_to_replace, max_score = self.best_candidate_twidf(syn_candidates)
                        score = self.get_tw_idf(token)

                    if max_score < score:
                        # Update the node in the graph
                        self.update_nodes(node_to_replace, node, i, j)
                    else:
                        # Append to the node in the graph
                        self.graph.node[node_to_replace]['info'].append((i, j))
                        # Mark the word to node-to-replace
                        self.mapping[i][j] = node_to_replace
                    continue

                if hyp_candidates != []:
                    if self.tfidf_coverage:
                        node_to_replace, max_score = self.best_candidate_tfidf(hyp_candidates)
                        score = self.get_tf_idf(token)
                    elif self.twidf_coverage:
                        node_to_replace, max_score = self.best_candidate_twidf(hyp_candidates)
                        score = self.get_tw_idf(token)

                    if max_score < score:
                        # Update the node in the graph
                        self.update_nodes(node_to_replace, node, i, j)
                    else:
                        self.graph.node[node_to_replace]['info'].append((i, j))
                        # Mark the word to node-to-replace
                        self.mapping[i][j] = node_to_replace
                    continue

                if common_hyp_candidates != []:
                    # Use path_similarity to Find the nearest common hypernyme
                    node_to_replace, common_hyp, max_score = self.best_candidate_similarity(common_hyp_candidates, node)

                    if max_score != 0:
                        # Update the node in the graph
                        self.update_nodes_common_hyp(node_to_replace, common_hyp, i, j)

                        # Update tfidf/twidf scores
                        if self.tfidf_coverage:
                            w = common_hyp.lemmas()[0].name()
                            w = w.lower()
                            if self.stemming:
                                w = self.stemmer.stem(w)
                            self.tfidf_dict.update({w: max_score})
                        elif self.twidf_coverage:
                            w = common_hyp.lemmas()[0].name()
                            w = w.lower()
                            if self.stemming:
                                w = self.stemmer.stem(w)
                            self.twidf_dict.update({w: max_score})

                        print node.split(self.sep)[0], ',', node_to_replace[0].split(self.sep)[0], "-> common_hyp: ", w
                        continue

                if entail_candidates != []:
                    if self.tfidf_coverage:
                        node_to_replace, max_score = self.best_candidate_tfidf(entail_candidates)
                        score = self.get_tf_idf(token)
                    elif self.twidf_coverage:
                        node_to_replace, max_score = self.best_candidate_twidf(entail_candidates)
                        score = self.get_tw_idf(token)

                    if max_score < score:
                        # Update the node in the graph
                        self.update_nodes(node_to_replace, node, i, j)
                    else:
                        self.graph.node[node_to_replace]['info'].append((i, j))
                        # Mark the word to node-to-replace
                        self.mapping[i][j] = node_to_replace
                    continue

                # Find the number of ambiguous nodes in the graph
                ambgs_nodes = self.ambiguous_nodes(node)
                new_id = max([ambgs_node[1] for ambgs_node in ambgs_nodes]) + 1 if len(ambgs_nodes) > 0 else 0

                self.graph.add_node((node, new_id), info=[(i, j)], label=token)
                self.mapping[i][j] = (node, new_id)

        #-------------------------------------------------------------------
        # 2. map the stopwords to the nodes
        #-------------------------------------------------------------------
        for i in range(len(self.tagged_community)):
            # Compute the sentence length
            sentence_len = len(self.tagged_community[i])

            for j in range(sentence_len):

                # Get the word and tag
                token, POS = self.tagged_community[i][j]

                # If *NOT* stopword, continues
                if token.lower() not in self.stopwords:
                    continue

                # Create the node identifier
                node = token + self.sep + POS

                # Find the number of ambiguous nodes in the graph
                ambgs_nodes = self.ambiguous_nodes(node)
                k = len(ambgs_nodes)

                # If there is no node in the graph, create one with id = 0
                if k == 0:

                    # Add the node in the graph
                    self.graph.add_node((node, 0), info=[(i, j)], label=token)

                    # Mark the word as mapped to k
                    self.mapping[i][j] = (node, 0)

                # Else find the node with overlap in context or create one
                else:

                    # Create the neighboring nodes identifiers
                    prev_token, prev_POS = self.tagged_community[i][j-1]
                    next_token, next_POS = self.tagged_community[i][j+1]
                    prev_node = prev_token.lower() + self.sep + prev_POS
                    next_node = next_token.lower() + self.sep + next_POS

                    ambinode_overlap = []

                    # For each ambiguous node
                    for ambgs_node in ambgs_nodes:

                        # Get the immediate context words of the nodes, the
                        # boolean indicates to consider only non stopwords
                        l_context = self.get_directed_context(ambgs_node, 'left', non_pos=True)
                        r_context = self.get_directed_context(ambgs_node, 'right', non_pos=True)

                        # Compute the (directed) context sum
                        val = l_context.count(prev_node)
                        val += r_context.count(next_node)

                        # Add the count of the overlapping words
                        ambinode_overlap.append(val)

                    # Get best overlap candidate
                    selected = utils.max_index(ambinode_overlap)

                    # Get the sentences id of the best candidate node
                    ids = []
                    for sid, pos_s in self.graph.node[ambgs_nodes[selected]]['info']:
                        ids.append(sid)

                    # Update the node in the graph if not same sentence and
                    # there is at least one overlap in context
                    if i not in ids and ambinode_overlap[selected] > 0:

                        # Update the node in the graph
                        self.graph.node[ambgs_nodes[selected]]['info'].append((i, j))

                        # Mark the word as mapped to k
                        self.mapping[i][j] = ambgs_nodes[selected]

                    # Else create a new node
                    else:
                        # Add the node in the graph
                        self.graph.add_node((node, k), info=[(i, j)], label=token)

                        # Mark the word as mapped to k
                        self.mapping[i][j] = (node, k)

        #-------------------------------------------------------------------
        # 3. At last map the punctuation marks to the nodes
        #-------------------------------------------------------------------
        for i in range(len(self.tagged_community)):
            # Compute the sentence length
            sentence_len = len(self.tagged_community[i])

            for j in range(sentence_len):

                # Get the word and tag
                token, POS = self.tagged_community[i][j]

                # If *NOT* punctuation mark, continues
                if POS != self.punct_tag:
                    continue

                # Create the node identifier
                node = token + self.sep + POS

                # Find the number of ambiguous nodes in the graph
                ambgs_nodes = self.ambiguous_nodes(node)
                k = len(ambgs_nodes)

                # If there is no node in the graph, create one with id = 0
                if k == 0:

                    # Add the node in the graph
                    self.graph.add_node( (node, 0), info=[(i, j)], label=token )

                    # Mark the word as mapped to k
                    self.mapping[i][j] = (node, 0)

                # Else find the node with overlap in context or create one
                else:

                    # Create the neighboring nodes identifiers
                    prev_token, prev_POS = self.tagged_community[i][j-1]
                    next_token, next_POS = self.tagged_community[i][j+1]
                    prev_node = prev_token.lower() + self.sep + prev_POS
                    next_node = next_token.lower() + self.sep + next_POS

                    ambinode_overlap = []

                    # For each ambiguous node
                    for ambgs_node in ambgs_nodes:

                        # Get the immediate context words of the nodes
                        l_context = self.get_directed_context(ambgs_node, 'left', non_pos=False)
                        r_context = self.get_directed_context(ambgs_node, 'right', non_pos=False)

                        # Compute the (directed) context sum
                        val = l_context.count(prev_node)
                        val += r_context.count(next_node)

                        # Add the count of the overlapping words
                        ambinode_overlap.append(val)

                    # Get best overlap candidate
                    selected = utils.max_index(ambinode_overlap)

                    # Get the sentences id of the best candidate node
                    ids = []
                    for sid, pos_s in self.graph.node[ambgs_nodes[selected]]['info']:
                        ids.append(sid)

                    # Update the node in the graph if not same sentence and
                    # there is at least one overlap in context
                    if i not in ids and ambinode_overlap[selected] > 1:

                        # Update the node in the graph
                        self.graph.node[ambgs_nodes[selected]]['info'].append((i, j))

                        # Mark the word as mapped to k
                        self.mapping[i][j] = ambgs_nodes[selected]

                    # Else create a new node
                    else:
                        # Add the node in the graph
                        self.graph.add_node((node, k), info=[(i, j)], label=token)

                        # Mark the word as mapped to k
                        self.mapping[i][j] = (node, k)

        #-------------------------------------------------------------------
        # 4. Connects the mapped words with directed edges
        #    We need to finish all sentences, so taht mapping is the latest one
        #-------------------------------------------------------------------
        for i in range(len(self.tagged_community)):
            for j in range(1, len(self.mapping[i])):
                self.graph.add_edge(self.mapping[i][j-1], self.mapping[i][j])


        # Assigns a weight to each node in the graph ---------------------------
        if self.word_attraction:
            for node1, node2 in self.graph.edges_iter():
                edge_weight = self.get_edge_weight_word_attract(node1, node2)
                self.graph.add_edge(node1, node2, weight=edge_weight)
        else:
            for node1, node2 in self.graph.edges_iter():
                edge_weight = self.get_edge_weight(node1, node2)
                self.graph.add_edge(node1, node2, weight=edge_weight)

    def ambiguous_nodes(self, node):
        """
        Takes a node in parameter and returns the ambiguous candidate nodes in the graph.
        # based on lower case form
        """
        token, POS = node.split(self.sep)
        ambgs_nodes = []
        for gnode in self.graph.nodes():
            ref_token, ref_POS = gnode[0].split(self.sep)
            if ref_POS == POS and ref_token.lower() == token.lower():
                ambgs_nodes.append(gnode)
        return ambgs_nodes

    # ######################################
    # ### replace tag with wordnet's tag ###
    # ######################################
    def wn_tagging(self, tag):
        if tag.startswith('V'):
            return wn.VERB
        elif tag.startswith('N'):
            return wn.NOUN
        elif tag.startswith('J'):
            return wn.ADJ
        elif tag.startswith('R'):
            return wn.ADV
        else:
            return ''

    # ##############################################################################
    # ### check for same, synonyme, hypernyme, common_hypernym, entailment nodes ###
    # ##############################################################################
    def same_nodes(self, node):
        same_nodes = []
        word, tag = node.split(self.sep)
        pos = self.wn_tagging(tag)
        for gnode in self.graph.nodes():
            ref_word, ref_tag = gnode[0].split(self.sep)
            ref_pos = self.wn_tagging(ref_tag)
            if (ref_pos == pos) and (ref_word.lower() == word.lower()):
                same_nodes.append(gnode)
        return same_nodes

    def synonym_nodes(self, node):
        syn_nodes = []
        syns = []
        word, tag = node.split(self.sep)
        pos = self.wn_tagging(tag)
        if pos == '':
            return syn_nodes
        for syn in wn.synsets(word, pos=pos):
            syn_candidate = syn.name().split('.')[0]
            if syn_candidate not in syns:
                syns.append(syn_candidate)
        for gnode in self.graph.nodes():
            ref_word, ref_tag = gnode[0].split(self.sep)
            ref_pos = self.wn_tagging(ref_tag)
            if (ref_word.lower() in syns) and (ref_pos == pos) and (ref_word.lower() != word.lower()):
                syn_nodes.append(gnode)
        return syn_nodes

    # Case 1 for hypernyme: word to add is hypernyme of existing node
    def hypernym_nodes(self, node):
        hyp_nodes = []
        hyps = []
        word, tag = node.split(self.sep)
        pos = self.wn_tagging(tag)
        if pos == '':
            return hyp_nodes
        for syn in wn.synsets(word, pos=pos):
            for hyp in syn.hypernyms():
                hyp_candidate = hyp.name().split('.')[0]
                if hyp_candidate not in hyps:
                    hyps.append(hyp_candidate)
        for gnode in self.graph.nodes():
            ref_word, ref_tag = gnode[0].split(self.sep)
            ref_pos = self.wn_tagging(ref_tag)
            if (ref_word.lower() in hyps) and (ref_pos == pos) and (ref_word.lower() != word.lower()):
                hyp_nodes.append(gnode)
        return hyp_nodes

    # Case 2 for hypernyme: word to add has common hypernyme with existing node
    def common_hypernym_nodes(self, node):
        hyps_nodes = []  # return [(node1, common_hyp1),(node2, common_hyp2),...]
        hyps_word = []   # hypernymes of this word
        word, tag = node.split(self.sep)
        pos = self.wn_tagging(tag)
        if pos == '':
            return hyps_nodes
        # All hyps of node-to-add
        for syn in wn.synsets(word, pos=pos):
            for hyp in syn.hypernyms():
                hyps_word.append(hyp)
        # For each existing node, compare its hyps with hyps
        for gnode in self.graph.nodes():
            ref_word, ref_tag = gnode[0].split(self.sep)
            ref_pos = self.wn_tagging(ref_tag)

            # first compare theirs POS tags
            if ref_pos == pos:
                for gnode_syn in wn.synsets(ref_word, pos=ref_pos):
                    for gnode_hyp in gnode_syn.hypernyms():
                        # words share same stemm should not be replaced by their common hypernym
                        if (gnode_hyp in hyps_word) and ((gnode, gnode_hyp) not in hyps_nodes) \
                                and self.stemmer.stem(word.lower()) != self.stemmer.stem(ref_word.lower()):
                            hyps_nodes.append((gnode, gnode_hyp))
        return hyps_nodes

    def entail_nodes(self,node):
        ent_nodes = []
        ents = []
        word, tag = node.split(self.sep)
        pos = self.wn_tagging(tag)
        if pos == '':
            return ent_nodes
        for syn in wn.synsets(word,pos=pos):
            for ent in syn.entailments():
                ent_candidate = ent.name().split('.')[0]
                if ent_candidate not in ents:
                    ents.append(ent_candidate)
        for gnode in self.graph.nodes():
            ref_word, ref_tag = gnode[0].split(self.sep)
            ref_pos = self.wn_tagging(ref_tag)
            if (ref_word.lower() in ents) and (ref_pos == pos) and (ref_word.lower() != word.lower()):
                ent_nodes.append(gnode)
        return ent_nodes

    # ##############################
    # ### filter candidates list ###
    # ##############################
    def filter_cand(self, candidates, i):
        res = []
        if candidates == []:
            return res
        for cand in candidates:
            ids = []
            for sid, off in self.graph.node[cand]['info']:
                ids.append(sid)
            if i not in ids:
                res.append(cand)
        return res

    def filter_cand_common_hyp(self, candidates, i):
        # print('candidates:' , candidates)
        res = []
        if candidates == []:
            return res
        # filter out candidate node in the same sentence
        for cand, hyp in candidates:
            ids = []
            for sid, off in self.graph.node[cand]['info']:
                ids.append(sid)
            if i not in ids:
                res.append((cand, hyp))
        return res


    # ###############################
    # ### read tfidf / twidf dict ###
    # ###############################
    def get_tf_idf(self, token):
        # lower_case for tfidf
        token = token.lower()
        score = 0.
        if self.stemming:
            token = self.stemmer.stem(token)

        try:
            score = self.tfidf_dict[token]
        except KeyError:
            #print stemmed_token, "not in tfidf"
            pass
        return score

    def get_tw_idf(self, token):
        # lower_case for twidf
        token = token.lower()
        score = 0.
        if self.stemming:
            token = self.stemmer.stem(token)

        try:
            score = self.twidf_dict[token]
        except KeyError:
            #print stemmed_token, "not in twidf"
            pass
        return score

    # #################################################
    # ### best candidate according to tfidf / twidf ###
    # #################################################
    def best_candidate_tfidf(self, candidates):
        node_to_replace = None
        max_score = 0.
        for tmp_node in candidates:
            tmp_word, tmp_pos = tmp_node[0].split(self.sep)

            score = self.get_tf_idf(tmp_word)

            tmp_score = score
            if tmp_score >= max_score:
                node_to_replace = tmp_node
                max_score = tmp_score
        return node_to_replace, max_score

    def best_candidate_twidf(self, candidates):
        node_to_replace = None
        max_score = 0.
        for tmp_node in candidates:
            tmp_word, tmp_pos = tmp_node[0].split(self.sep)

            score = self.get_tw_idf(tmp_word)

            tmp_score = score
            if tmp_score >= max_score:
                node_to_replace = tmp_node
                max_score = tmp_score
        return node_to_replace, max_score

    #**************************************************************************
    # best candidate according to context
    #**************************************************************************
    def best_candidate_context(self, candidate_nodes, i, j):
        # Create the neighboring nodes identifiers
        prev_token, prev_POS = self.tagged_community[i][j-1]
        next_token, next_POS = self.tagged_community[i][j+1]
        prev_node = prev_token.lower() + self.sep + prev_POS
        next_node = next_token.lower() + self.sep + next_POS

        # Find the number of ambiguous nodes in the graph
        k = len(candidate_nodes)

        # Search for the ambiguous node with the larger overlap in
        # context or the greater frequency.
        ambinode_overlap = []
        ambinode_frequency = []

        # For each ambiguous node
        for l in range(k):

            # Get the immediate context words of the nodes
            l_context = self.get_directed_context(candidate_nodes[l], 'left', non_pos=False)
            r_context = self.get_directed_context(candidate_nodes[l], 'right', non_pos=False)

            # Compute the (directed) context sum
            val = l_context.count(prev_node)
            val += r_context.count(next_node)

            # Add the count of the overlapping words
            ambinode_overlap.append(val)

            # Add the frequency of the ambiguous node
            ambinode_frequency.append(
                len(self.graph.node[candidate_nodes[l]]['info'])
            )
        # Select the ambiguous node
        selected = utils.max_index(ambinode_overlap)
        if ambinode_overlap[selected] == 0:
            selected = utils.max_index(ambinode_frequency)

        return candidate_nodes[selected]

    #**************************************************************************
    # best candidate for common hyps according to path_similarity
    # word-to-add's tagging should be transformed to wordnet's tagging
    #**************************************************************************
    def best_candidate_similarity(self, candidates, node_to_add):
        # change word_to_add tagging
        word, tag = node_to_add.split(self.sep)
        pos = self.wn_tagging(tag)
        syn_to_add = wn.synsets(word, pos)[0]  # Get the most common sense synset

        # choose different threshold for verb and non-verb, because wordnet's common hypernyme for verb doesn't seem good
        if pos == wn.VERB:
            threshold = self.common_hyp_threshold_verb
        else:
            threshold = self.common_hyp_threshold_nonverb

        node_to_replace = None
        word_to_replace = None
        common_hyp = None
        max_score = 0.
        for tmp_node, tmp_hyp in candidates:
            tmp_word, tmp_tag = tmp_node[0].split(self.sep)
            tmp_pos = self.wn_tagging(tmp_tag)
            tmp_syn = wn.synsets(tmp_word, pos=tmp_pos)[0]  # Get the most common sense synset

            # score of common-hyp = similarity(common-hyp, node-to-add)
            #                     * similarity(common-hyp, node-to-replace)
            # There are other similarities http://www.nltk.org/howto/wordnet.html
            tmp_score = wn.path_similarity(tmp_hyp, syn_to_add) * wn.path_similarity(tmp_hyp, tmp_syn)
            if tmp_score >= max_score:
                node_to_replace = tmp_node
                word_to_replace = tmp_word
                common_hyp = tmp_hyp
                max_score = tmp_score

        if max_score > threshold:
            if self.tfidf_coverage:
                score_word = self.get_tf_idf(word)
                score_word_to_replace = self.get_tf_idf(word_to_replace)
            elif self.twidf_coverage:
                score_word = self.get_tw_idf(word)
                score_word_to_replace = self.get_tw_idf(word_to_replace)
            return node_to_replace, common_hyp, max(score_word, score_word_to_replace)
        else:
            return None, None, 0


    # ################################################
    # ### update best-candidate-node with new node ###
    # ################################################
    def update_nodes(self, node_to_replace, node, i, j):
        ambgs_nodes = self.ambiguous_nodes(node)
        new_id = max([ambgs_node[1] for ambgs_node in ambgs_nodes]) + 1 if len(ambgs_nodes) > 0 else 0

        token, pos = node.split(self.sep)
        new_node = (node, new_id)

        old_info = self.graph.node[node_to_replace]['info']

        self.graph.add_node(
            new_node,
            info=[],
            label=token
        )
        self.graph.node[new_node]['info'] += old_info
        self.graph.node[new_node]['info'].append((i, j))

        self.update_mapping(new_node, node_to_replace, i, j)

        self.graph.remove_node(node_to_replace)
        return

    def update_mapping(self, new_node, node_to_replace, i, j):
        # change old mapping
        for k in range(len(self.mapping)):
            for l in range(len(self.mapping[k])):
                if self.mapping[k][l] == node_to_replace:
                    self.mapping[k][l] = new_node

        # add new mapping
        self.mapping[i][j] = new_node
        return

    #**************************************************************************
    # update best-candidate-node with new node of common-hyp
    #**************************************************************************
    def update_nodes_common_hyp(self, node_to_replace, common_hyp, i, j):
        word_common = common_hyp.lemmas()[0].name()
        pos_common = node_to_replace[0].split(self.sep)[1]

        ambgs_nodes = self.ambiguous_nodes(word_common + self.sep + pos_common)
        new_id = max([ambgs_node[1] for ambgs_node in ambgs_nodes]) + 1 if len(ambgs_nodes) > 0 else 0

        node_common = (word_common + self.sep + pos_common, new_id)

        old_info = self.graph.node[node_to_replace]['info']

        self.graph.add_node(node_common, info=[], label=word_common)
        self.graph.node[node_common]['info'] += old_info
        self.graph.node[node_common]['info'].append((i, j))

        self.update_mapping(node_common, node_to_replace, i, j)

        self.graph.remove_node(node_to_replace)

        # print 'node_to_replace: ', self.graph.node[node_to_replace]
        return

    #-T-----------------------------------------------------------------------T-
    def get_directed_context(self, ambgs_node, dir='all', non_pos=False):
        """
        Returns the directed context of a given node, i.e. a list of word/POS of
        the left or right neighboring nodes in the graph. The function takes
        three parameters :

        - ambgs_node is the node identifier used when multiple nodes refer to the same
          word/POS (e.g. k=0 for (the/DET, 0), k=1 for (the/DET, 1), etc.)
        - dir is the parameter that controls the directed context calculation,
          it can be set to left, right or all (default)
        - non_pos is a boolean allowing to remove stopwords from the context
          (default is false)

        # immediate context comparison is based on lower case form
        """

        # Define the context containers
        l_context = []
        r_context = []

        # For all the sentence/position tuples
        for sid, off in self.graph.node[ambgs_node]['info']:

            prev = self.tagged_community[sid][off-1][0].lower() + self.sep + self.tagged_community[sid][off-1][1]

            next = self.tagged_community[sid][off+1][0].lower() + self.sep + self.tagged_community[sid][off+1][1]

            if non_pos:
                if self.tagged_community[sid][off-1][0].lower() not in self.stopwords:
                    l_context.append(prev)
                if self.tagged_community[sid][off+1][0].lower() not in self.stopwords:
                    r_context.append(next)
            else:
                l_context.append(prev)
                r_context.append(next)

        # Returns the left (previous) context
        if dir == 'left':
            return l_context
        # Returns the right (next) context
        elif dir == 'right':
            return r_context
        # Returns the whole context
        else:
            l_context.extend(r_context)
            return l_context

    def get_edge_weight(self, node1, node2):
        """
        Compute the weight of an edge *e* between nodes *node1* and *node2*. It
        is computed as e_ij = (A / B) / C with:

        - A = freq(i) + freq(j),
        - B = Sum (s in S) 1 / diff(s, i, j)
        - C = freq(i) * freq(j)

        A node is a tuple of ('word/POS', unique_id).
        """

        # Get the list of (sentence_id, pos_in_sentence) for node1
        info1 = self.graph.node[node1]['info']

        # Get the list of (sentence_id, pos_in_sentence) for node2
        info2 = self.graph.node[node2]['info']

        # Get the frequency of node1 in the graph
        # freq1 = self.graph.degree(node1)
        freq1 = len(info1)

        # Get the frequency of node2 in cluster
        # freq2 = self.graph.degree(node2)
        freq2 = len(info2)

        # Initializing the diff function list container
        diff = []

        # For each sentence of the cluster (for s in S)
        for s in range(len(self.tagged_community)):

            # Compute diff(s, i, j) which is calculated as
            # pos(s, i) - pos(s, j) if pos(s, i) < pos(s, j)
            # O otherwise

            # Get the positions of i and j in s, named pos(s, i) and pos(s, j)
            # As a word can appear at multiple positions in a sentence, a list
            # of positions is used
            pos_i_in_s = []
            pos_j_in_s = []

            # For each (sentence_id, pos_in_sentence) of node1
            for sentence_id, pos_in_sentence in info1:
                # If the sentence_id is s
                if sentence_id == s:
                    # Add the position in s
                    pos_i_in_s.append(pos_in_sentence)

            # For each (sentence_id, pos_in_sentence) of node2
            for sentence_id, pos_in_sentence in info2:
                # If the sentence_id is s
                if sentence_id == s:
                    # Add the position in s
                    pos_j_in_s.append(pos_in_sentence)

            # Container for all the diff(s, i, j) for i and j
            all_diff_pos_i_j = []

            # Loop over all the i, j couples
            for x in range(len(pos_i_in_s)):
                for y in range(len(pos_j_in_s)):
                    diff_i_j = pos_i_in_s[x] - pos_j_in_s[y]
                    # Test if word i appears *BEFORE* word j in s
                    if diff_i_j < 0:
                        all_diff_pos_i_j.append(-1.0*diff_i_j)

            # Add the mininum distance to diff (i.e. in case of multiple
            # occurrencies of i or/and j in sentence s), 0 otherwise.
            if len(all_diff_pos_i_j) > 0:
                diff.append(1.0/min(all_diff_pos_i_j))
            else:
                diff.append(0.0)

        weight1 = freq1
        weight2 = freq2

        if self.twidf_coverage:
            return (freq1 + freq2) / sum(diff)
        else:
            return ( (freq1 + freq2) / sum(diff) ) / (weight1 * weight2)

    def get_edge_weight_word_attract(self, node1, node2):
        # Based on case sensitive form
        distance = wa.euclidean_distance(
            node1[0].split(self.sep)[0],
            node2[0].split(self.sep)[0],
            wv=self.wv
        )

        # In case of non-existing word in Word Embedding
        if distance is None:
            distance = 1.
        # print node1, node2, distance
        return self.get_edge_weight(node1, node2) * distance * distance

    def write_dot(self, dotfile):
        """ Outputs the word graph in dot format in the specified file. """
        write_dot(self.graph, dotfile)

    def k_shortest_paths(self, start, end, k=10, loose_verb_constraint=False):
        """
        Simple implementation of a k-shortest paths algorithms. Takes three
        parameters: the starting node, the ending node and the number of
        shortest paths desired. Returns a list of k tuples (path, weight).
        """

        # Initialize the list of shortest paths
        kshortestpaths = []

        # Initializing the label container
        orderedX = []
        orderedX.append((0, start, 0))

        # Initializing the path container
        paths = {}
        paths[(0, start, 0)] = [start]

        # Initialize the visited container
        visited = {}
        visited[start] = 0

        # Initialize the sentence container that will be used to remove
        # duplicate sentences passing throught different nodes
        sentence_container = {}

        # While the number of shortest paths isn't reached or all paths explored
        while len(kshortestpaths) < k and len(orderedX) > 0:

            # Searching for the shortest distance in orderedX
            shortest = orderedX.pop(0)
            shortestpath = paths[shortest]

            # Removing the shortest node from X and paths
            del paths[shortest]

            # Iterating over the accessible nodes
            for node in self.graph.neighbors(shortest[1]):

                # To avoid loops
                if node in shortestpath:
                    continue

                # Compute the weight to node
                w = shortest[0] + self.graph[shortest[1]][node]['weight']

                # If found the end, adds to k-shortest paths
                if node == end:

                    #-T-------------------------------------------------------T-
                    # --- Constraints on the shortest paths

                    # 1. Check if path contains at least one verb
                    # 2. Check the length of the shortest path, without
                    #    considering punctuation marks and starting node (-1 in
                    #    the range loop, because nodes are reversed)
                    # 3. Check the paired parentheses and quotation marks
                    # 4. Check if sentence is not redundant

                    nb_verbs = 0
                    length = 0
                    paired_parentheses = 0
                    quotation_mark_number = 0
                    raw_sentence = ''

                    if loose_verb_constraint:
                        nb_verbs = 1

                    for i in range(len(shortestpath) - 1):
                        word, tag = shortestpath[i][0].split(self.sep)
                        # 1.
                        if tag in self.verb_tags:
                            nb_verbs += 1
                        # 2.
                        if not re.search('(?u)^\W$', word):
                            length += 1
                        # 3.
                        else:
                            if word == '(':
                                paired_parentheses -= 1
                            elif word == ')':
                                paired_parentheses += 1
                            elif word == '"':
                                quotation_mark_number += 1
                        # 4.
                        raw_sentence += word + ' '

                    # Remove extra space from sentence
                    raw_sentence = raw_sentence.strip()

                    if nb_verbs > 0 and \
                        length >= self.nb_words and \
                        paired_parentheses == 0 and \
                        (quotation_mark_number%2) == 0 \
                        and not sentence_container.has_key(raw_sentence):
                        path = [node]
                        path.extend(shortestpath)
                        path.reverse()
                        weight = float(w) #/ float(length)
                        kshortestpaths.append((path, weight))
                        sentence_container[raw_sentence] = 1

                    #-B-------------------------------------------------------B-

                else:

                    # test if node has already been visited
                    if visited.has_key(node):
                        visited[node] += 1
                    else:
                        visited[node] = 0
                    id = visited[node]

                    # Add the node to orderedX
                    bisect.insort(orderedX, (w, node, id))

                    # Add the node to paths
                    paths[(w, node, id)] = [node]
                    paths[(w, node, id)].extend(shortestpath)

        # Returns the list of shortest paths
        return kshortestpaths
    #-B-----------------------------------------------------------------------B-

    #-T-----------------------------------------------------------------------T-
    def get_compression(self, nb_candidates=50, loose_verb_constraint=False):
        """
        Searches all possible paths from **start** to **end** in the word graph,
        removes paths containing *no verb* or shorter than *n* words. Returns an
        ordered list (smaller first) of nb (default value is 50) (cummulative
        score, path) tuples. The score is *not* normalized with the sentence
        length.
        """

        # Search for the k-shortest paths in the graph
        self.paths = self.k_shortest_paths(
            (self.start + self.sep + self.start, 0),
            (self.stop + self.sep + self.stop, 0),
            nb_candidates,
            loose_verb_constraint=loose_verb_constraint
        )

        # Initialize the fusion container
        fusions = []

        # Test if there are some paths
        if len(self.paths) > 0:

            # For nb candidates
            for i in range(min(nb_candidates, len(self.paths))):
                nodes = self.paths[i][0]
                sentence = []

                for j in range(1, len(nodes)-1):
                    word, tag = nodes[j][0].split(self.sep)
                    sentence.append((word, tag))

                bisect.insort(fusions, (self.paths[i][1], sentence))

        return fusions

    def path_length_normalization_score(self, nbest_compressions):
        reranked_compressions = []

        # Loop over the compression candidates
        for cummulative_score, path in nbest_compressions:
            score = cummulative_score / len(path)
            bisect.insort(reranked_compressions, (score, path))

        return reranked_compressions

    def fluency_score(self, nbest_compressions, normalization=True):
        # lower case
        all_scores = []
        for w, sentence in nbest_compressions:
            sentence_clean = ' '.join([word[0] for word in sentence])
            score = self.lm.get_sentence_score(
                sentence=sentence_clean,
                n=3,
                unknown_word_prob=1e-5,
                normalization=normalization
            )
            all_scores.append(score)
        all_scores = np.array(all_scores)
        return all_scores

    def noun_tfidf_coverage_score(self, nbest_compressions, normalization=True):
        # cumulative tfidf score for all nouns inside graph
        # lower case
        cumulative_score = 0.
        for token, POS in [gnode[0].split(self.sep) for gnode in self.graph.nodes()]:
            if POS.startswith('N'):
                cumulative_score += self.get_tf_idf(token)

        if cumulative_score == 0:
            return np.ones(len(nbest_compressions))

        all_scores = []
        for w, path in nbest_compressions:
            score = 1e-5  # smooth
            size = 1  # smooth
            for token, POS in path:
                if POS.startswith('N'):
                    score += self.get_tf_idf(token)
                    size += 1

            if normalization:
                all_scores.append(score / cumulative_score / size)
            else:
                all_scores.append(score / cumulative_score)
        all_scores = np.array(all_scores)
        return all_scores

    def twidf_coverage_score(self, nbest_compressions, normalization=True):
        # cumulative twidf score for all nouns/adj/adv inside graph
        # lower case
        cumulative_score = 0.
        for token, POS in [gnode[0].split(self.sep) for gnode in self.graph.nodes()]:
            if POS.startswith('N') or POS.startswith('V') or POS.startswith('J'):
                cumulative_score += self.get_tw_idf(token)

        if cumulative_score == 0:
            return np.ones(len(nbest_compressions))

        all_scores = []
        for w, path in nbest_compressions:
            score = 1e-5  # smooth
            size = 1  # smooth
            for token, POS in path:
                if POS.startswith('N') or POS.startswith('V') or POS.startswith('J'):
                    score += self.get_tw_idf(token)
                    size += 1

            if normalization:
                all_scores.append(score / cumulative_score / size)
            else:
                all_scores.append(score / cumulative_score)
        all_scores = np.array(all_scores)
        return all_scores

    def diversity_score(self, nbest_compressions, normalization=True):
        # ! should be graph node words
        # case sensitive
        all_terms = [node[0].split(self.sep)[0] for node in self.graph.nodes()]
        all_terms = list(set(all_terms))

        cluster_dic, X = utils.cluster_words(all_terms, self.wv, self.diversity_n_clusters)

        all_scores = []
        for _, sentence in nbest_compressions:
            cluster_counters = np.zeros(len(set(cluster_dic.values())))
            # token's form is tuple of (word, tag)
            for token in sentence:
                if token[0] in cluster_dic:
                    idx = cluster_dic[token[0]]
                    cluster_counters[idx] = 1

            if normalization:
                all_scores.append(np.sum(cluster_counters) / float(len(sentence)))
            else:
                all_scores.append(np.sum(cluster_counters))
        all_scores = [i + 1e-5 for i in all_scores]  # smooth
        all_scores = np.array(all_scores).astype(float)
        return all_scores

    def remove_sentence_tag(self, nbest_compressions):
        for i in range(len(nbest_compressions)):
            sentence = nbest_compressions[i][1]
            sentence_clean = ' '.join([word[0] for word in sentence])
            nbest_compressions[i] = (nbest_compressions[i][0], sentence_clean)
        return nbest_compressions

    def final_score(self, nbest_compressions, n_results=20):
        # single candidate
        if len(nbest_compressions) == 1:
            return self.remove_sentence_tag(nbest_compressions)

        # #######################
        # ### PATH RE-RANKING ###
        # #######################
        if not self.wordnet:
            # filippova
            if not self.keyphrase:
                reranked_compressions = self.path_length_normalization_score(nbest_compressions)
                return self.remove_sentence_tag(reranked_compressions[:n_results])
            # boudin
            else:
                reranker = keyphrase_reranker.keyphrase_reranker(
                    sentence_list=self.original_tagged_community,
                    nbest_compressions=nbest_compressions,
                    lang=self.language,
                    patterns=[],
                    stopwords=self.stopwords,
                    pos_separator=self.pos_separator,
                    window_size=self.keyphrase_reranker_window_size
                )
                return self.remove_sentence_tag(reranker.rerank_nbest_compressions()[:n_results])
        else:
            # normalize score by path length
            nbest_compressions = self.path_length_normalization_score(nbest_compressions)

            if self.fluency:
                # mehdad
                if self.tfidf_coverage:
                    fl_score = self.fluency_score(nbest_compressions, normalization=False)
                    for i, compression in enumerate(nbest_compressions):
                        nbest_compressions[i] = (compression[0] / fl_score[i], compression[1])

                # tixier
                if self.twidf_coverage:
                    fl_score = self.fluency_score(nbest_compressions, normalization=True)
                    for i, compression in enumerate(nbest_compressions):
                        nbest_compressions[i] = (compression[0] / fl_score[i], compression[1])

            # mehdad
            if self.tfidf_coverage:
                tfidf_co_score = self.noun_tfidf_coverage_score(nbest_compressions, normalization=False)
                for i, compression in enumerate(nbest_compressions):
                    nbest_compressions[i] = (compression[0] / tfidf_co_score[i], compression[1])

            # tixier
            if self.twidf_coverage:
                twidf_co_score = self.twidf_coverage_score(nbest_compressions, normalization=True)
                for i, compression in enumerate(nbest_compressions):
                    nbest_compressions[i] = (compression[0] / twidf_co_score[i], compression[1])

            # tixier
            if self.diversity:
                div_score = self.diversity_score(nbest_compressions, normalization=True)
                for i, compression in enumerate(nbest_compressions):
                    nbest_compressions[i] = (compression[0] / div_score[i], compression[1])

            sorted_by_score = sorted(nbest_compressions, key=lambda tup: tup[0])

            return self.remove_sentence_tag(sorted_by_score[:n_results])

