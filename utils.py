import codecs, re, string
import nltk
import word_attraction
import numpy as np
from sklearn.cluster import KMeans
from nltk import PerceptronTagger

def clean_tagged_text(
        tagged_text,
        stopwords,
        remove_stopwords=True,
        pos_filtering=True,
        stemming=True,
        lower_case=True,
        remove_punctuations=True,
        pos_separator='/',
        punct_tag='PUNCT'
):
    # strip extra white space
    tagged_text = re.sub(' +', ' ', tagged_text)
    # strip leading and trailing white space
    tagged_text = tagged_text.strip()
    # tokenize (split based on whitespace)
    list_of_word_tag = [tagged_word.split(pos_separator) for tagged_word in tagged_text.split(' ')]

    stemmer = nltk.stem.PorterStemmer()
    cleaned_tagged_text = []
    for word_tag in list_of_word_tag:
        word, tag = word_tag
        if remove_punctuations:
            if tag == punct_tag:
                continue
        if pos_filtering:
            # retain only nouns, adjectives, verbs
            if tag not in ['NN', 'NNS', 'NNP', 'NNPS', 'JJ', 'JJS', 'JJR', 'VB', 'VBD', 'VBG', 'VBN', 'VBP', 'VBZ']:
                continue
        if remove_stopwords:
            # remove stopwords
            if word.lower in stopwords:
                continue
        if lower_case:
            word = word.lower()
        if stemming:
            # apply Porter's stemmer
            word = stemmer.stem(word)
        cleaned_tagged_text.append(word + pos_separator + tag)

    cleaned_tagged_text = ' '.join(cleaned_tagged_text)

    return cleaned_tagged_text

def clean_text(text, stopwords, remove_stopwords=True, pos_filtering=False, stemming=True, lower_case=True):
    if lower_case:
        # convert to lower case
        text = text.lower()
    # strip extra white space
    text = re.sub(' +', ' ', text)
    # strip leading and trailing white space
    text = text.strip()
    # tokenize (split based on whitespace)
    tokens = text.split(' ')

    # remove punctuation
    tokens = [t for t in tokens if t not in string.punctuation]

    if pos_filtering:
        tagger = PerceptronTagger()
        # apply POS-tagging
        tagged_tokens = tagger.tag(tokens)
        # retain only nouns and adjectives
        tokens = [item[0] for item in tagged_tokens if item[1] in ['NN', 'NNS', 'NNP', 'NNPS', 'JJ', 'JJS', 'JJR', 'VB', 'VBD', 'VBG', 'VBN', 'VBP', 'VBZ']]
    if remove_stopwords:
        # remove stopwords
        tokens = [token for token in tokens if token.lower() not in stopwords]
    if stemming:
        stemmer = nltk.stem.PorterStemmer()
        # apply Porter's stemmer
        tokens_stemmed = list()
        for token in tokens:
            tokens_stemmed.append(stemmer.stem(token))
        tokens = tokens_stemmed

    return tokens

def remove_tags_from_text(tagged_text, pos_separator='/'):
    return ' '.join(
        [tagged_word.split(pos_separator)[0] for tagged_word in tagged_text.split(' ')]
    )


def load_stopwords(path):
    """
    This function loads a stopword list from the *path* file and returns a
    set of words. Lines begining by '#' are ignored.
    """

    # Set of stopwords
    stopwords = set([])

    # For each line in the file
    for line in codecs.open(path, 'r', 'utf-8'):
        if not re.search('^#', line) and len(line.strip()) > 0:
            stopwords.add(line.strip().lower())

    # Return the set of stopwords
    return stopwords


def strip_stopwords(tokenized_tagged_sentence, stopwords):
    """ Strip stopwords
    Consecutive stopwords at head and tail of tagged utterance are stripped
    """
    ib = 0
    ie = 0

    for i in range(len(tokenized_tagged_sentence)):

        if tokenized_tagged_sentence[i].split('/')[0].lower() in stopwords:
            ib += 1
        else:
            break
    for j in range(1, len(tokenized_tagged_sentence) + 1):

        if tokenized_tagged_sentence[-j].split('/')[0].lower() in stopwords:
            ie += 1
        else:
            break
    return tokenized_tagged_sentence[ib:len(tokenized_tagged_sentence) - ie]


def max_index(l):
    """ Returns the index of the maximum value of a given list. """

    ll = len(l)
    if ll < 0:
        return None
    elif ll == 1:
        return 0
    max_val = l[0]
    max_ind = 0
    for z in range(1, ll):
        if l[z] > max_val:
            max_val = l[z]
            max_ind = z
    return max_ind


def cluster_words(all_terms, vectors, num_cluster):
    num_terms = len(all_terms)
    X = np.zeros((num_terms, 300))
    idx_not_in_voc = []
    # transform all terms to vectors using word_embedding
    for i in range(num_terms):
        term_vector = word_attraction.vector_getter(all_terms[i], vectors)
        # if term_vector is not vector
        if type(term_vector) == int:
            idx_not_in_voc.append(i)
        else:
            term_vector = term_vector.reshape(1, -1)[0]
            X[i, :] = term_vector
    X = np.delete(X, idx_not_in_voc, 0)
    all_terms = np.delete(np.array(all_terms), idx_not_in_voc)
    # ValueError: n_samples=16 should be >= n_clusters=18
    kmeans = KMeans(
        n_clusters=min(num_cluster, len(all_terms)),
        init="k-means++",
        n_init=50,
        random_state=1
    ).fit(X)

    return dict(zip(all_terms, kmeans.labels_)), X
