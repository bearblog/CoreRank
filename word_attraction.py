from sklearn.metrics.pairwise import euclidean_distances as ed


# returns the vector of a word
def vector_getter(word, wv):
    try:
        # we use reshape because cosine similarity in sklearn now works only for multidimensional arrays
        word_array = wv[word].reshape(1, -1)
        return word_array
    except KeyError:
        return 0


# returns euclidean distance between two word vectors
def euclidean_distance(w1, w2, wv):
    v1 = vector_getter(w1, wv)
    v2 = vector_getter(w2, wv)
    distance = None
    # if v1 and v2 are vectors of dimension 300
    if type(v1) != int and type(v2) != int:
        distance = ed(v1, v2)[0][0]
    return distance


def word_attraction_force(w1, w2, freq1, freq2, wv):
    '''
    compute the attraction force between two words using word embeddings
    based on the paper: Wang, R., Liu, W., & McDonald, C. (2014, November). Corpus-independent generic keyphrase extraction using word embedding vectors. In Software Engineering Research Conference (p. 39).
    ! see slide #7 here for a summary of the important concepts/formulaes: http://www.lix.polytechnique.fr/~anti5662/dascim_group_presentation_paper_review_tixier_10_14_16.pdf
    '''
    d = euclidean_distance(w1, w2, wv)
    waf = None
    if d is not None:
        waf = round((freq1 * freq2) / float(d * d), 5)
    return waf
