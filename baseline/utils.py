import codecs
import re


def strip_stopwords(tokenized_sentence, stopwords):
    """ Strip stopwords
    Consecutive stopwords at head and tail of tagged utterance are stripped
    """
    ib = 0
    ie = 0

    for i in range(len(tokenized_sentence)):

        if tokenized_sentence[i].lower() in stopwords:
            ib += 1
        else:
            break
    for j in range(1, len(tokenized_sentence) + 1):

        if tokenized_sentence[-j].lower() in stopwords:
            ie += 1
        else:
            break
    return tokenized_sentence[ib:len(tokenized_sentence) - ie]

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
