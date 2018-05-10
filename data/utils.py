import codecs
import re
import string
import nltk
import pandas as pd
import operator
from nltk import PerceptronTagger


def load_stopwords(path):
    stopwords = set([])

    for line in codecs.open(path, 'r', 'utf-8'):
        if not re.search('^#', line) and len(line.strip()) > 0:
            stopwords.add(line.strip().lower())  # lowercase

    return stopwords


def load_filler_words(path):
    with open(path, 'r+') as f:
        filler = f.read().splitlines()

    return filler


def clean_utterance(utterance, filler_words):
    utt = utterance
    # replace consecutive unigrams with a single instance
    utt = re.sub('\\b(\\w+)\\s+\\1\\b', '\\1', utt)
    # same for bigrams
    utt = re.sub('(\\b.+?\\b)\\1\\b', '\\1', utt)
    # strip extra white space
    utt = re.sub(' +', ' ', utt)
    # strip leading and trailing white space
    utt = utt.strip()

    # remove filler words # highly time-consuming
    utt = ' ' + utt + ' '
    for filler_word in filler_words:
        utt = re.sub(' ' + filler_word + ' ', ' ', utt)
        utt = re.sub(' ' + filler_word.capitalize() + ' ', ' ', utt)

    return utt


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

    return (tokens)


def read_ami_icsi(path, filler_words):
    asr_output = pd.read_csv(
        path,
        sep='\t',
        header=None,
        names=['ID', 'start', 'end', 'letter', 'role', 'A', 'B', 'C', 'utt']
    )

    utterances = []
    for tmp in zip(asr_output['role'].tolist(), asr_output['utt'].tolist()):
        role, utt = tmp
        for ch in ['{vocalsound}', '{gap}', '{disfmarker}', '{comment}', '{pause}', '@reject@']:
            utt = re.sub(ch, '', utt)

        utt = re.sub("'Kay", 'Okay', utt)
        utt = re.sub("'kay", 'Okay', utt)
        utt = re.sub('"Okay"', 'Okay', utt)
        utt = re.sub("'cause", 'cause', utt)
        utt = re.sub("'Cause", 'cause', utt)
        utt = re.sub('"cause"', 'cause', utt)
        utt = re.sub('"\'em"', 'them', utt)
        utt = re.sub('"\'til"', 'until', utt)
        utt = re.sub('"\'s"', 's', utt)

        # l. c. d. -> lcd
        # t. v. -> tv
        utt = re.sub('h. t. m. l.', 'html', utt)
        utt = re.sub(r"(\w)\. (\w)\. (\w)\.", r"\1\2\3", utt)
        utt = re.sub(r"(\w)\. (\w)\.", r"\1\2", utt)
        utt = re.sub(r"(\w)\.", r"\1", utt)

        # clean_utterance, remove filler_words
        utt = clean_utterance(utt, filler_words=filler_words)

        # strip extra white space
        utt = re.sub(' +', ' ', utt)
        # strip leading and trailing white space
        utt = utt.strip()

        if utt != '' and utt != '.' and utt != ' ':
            utterances.append((role, utt))

    # remove duplicate utterances per speaker
    utterances = sorted(set(utterances), key=utterances.index)

    utterances_indexed = zip(range(len(utterances)), zip(*utterances)[0], zip(*utterances)[1])

    return utterances_indexed


def accumulate(iterable, func=operator.add):
    'Return running totals'
    # accumulate([1,2,3,4,5]) --> 1 3 6 10 15
    # accumulate([1,2,3,4,5], operator.mul) --> 1 2 6 24 120
    it = iter(iterable)
    try:
        total = next(it)
    except StopIteration:
        return
    yield total
    for element in it:
        total = func(total, element)
        yield total