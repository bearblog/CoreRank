"""
TextRank (Mihalcea and Tarau, 2004). An undirected
complete graph is built where nodes are utterances/sentences
and edges are weighted according
to the normalized content overlap of their endpoints.
Finally, weighted PageRank is applied and
the highest ranked nodes are selected for inclusion
in the summary. We used a publicly available
Python implementation

input: data/community/meeting/ami/id_comms.txt
output: results/meeting/ami/development/textrank/id-textrank-[50].txt
[50]: summarization word count
"""

import os
path_to_root = '/home/gshang/Code/takahe/'
os.chdir(path_to_root)

from data.meeting import meeting_lists
import random
import string
import re
from summa import summarizer
import utils

domain = 'meeting'
dataset_id = 'icsi'  # ami / icsi
language = 'en'
development_or_test = 'test'  # development / test

if domain == 'meeting':
    path_to_utterance = path_to_root + 'data/utterance/meeting/' + dataset_id + '_4/'

    if dataset_id == 'ami':
        ids = meeting_lists.ami_development_set \
            if development_or_test == 'development' \
            else meeting_lists.ami_test_set
    elif dataset_id == 'icsi':
        ids = meeting_lists.icsi_development_set \
            if development_or_test == 'development' \
            else meeting_lists.icsi_test_set

punctuations = string.punctuation
path_to_stopwords = path_to_root + 'resources/stopwords/meeting/stopwords.' + language + '.dat'
stopwords = utils.load_stopwords(path_to_stopwords)


for meeting_id in ids:
    utterances = []
    with open(path_to_utterance + meeting_id + '_utterances.txt', 'r') as file:
        for line in file.read().splitlines():
            line_strip = ' '.join(utils.strip_stopwords(line.split(' '), stopwords))
            utterances.append(line_strip)

    output = utterances
    output = '. '.join(output)
    output = re.sub(' +', ' ', output).strip().lower()
    output = summarizer.summarize(output, words=500)
    output = ''.join([l for l in output if l not in punctuations]).replace('\n', ' \n')
    print len(output.split(' '))
    for summary_size in range(50, 550, 50):
        f = open(path_to_root + 'results/' + domain + '/' + dataset_id + '/' + development_or_test + '/textrank/' + meeting_id + '_' +
                 'textrank' + '-' + str(summary_size) + '.txt', 'w')
        cut = ' '.join(output.split(' ')[:summary_size]).replace(' \n', '\n')
        f.write(cut)
        f.close()