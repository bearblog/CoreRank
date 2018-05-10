"""
Random. This system randomly selects elements
from the full list of utterances/sentences until the
budget is violated. Since this approach is stochastic,
ROUGE scores were averaged across 30 runs.

input: data/community/meeting/ami/id_comms.txt
output: results/meeting/ami/development/random/id-random<1>-[50].txt
<1>: 1th run, results of random system is an average over 30 runs
[50]: summarization word count
"""
import os
path_to_root = '/home/gshang/Code/takahe/'
os.chdir(path_to_root)

import random
import string
import re
from data.meeting import meeting_lists
import utils

domain = 'meeting'
dataset_id = 'icsi'  # ami, icsi
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
    for i in range(0, 30):
        random.shuffle(utterances)
        output = utterances

        output = ' \n'.join(output)
        output = ''.join([l for l in output if l not in punctuations])
        output = re.sub(' +', ' ', output).strip().lower()
        for summary_size in range(50, 550, 50):
            f = open(path_to_root + 'results/' + domain + '/' + dataset_id + '/' + development_or_test + '/random/' + meeting_id + '_' +
                     'random' + str(i) + '-' + str(summary_size) + '.txt', 'w')
            cut = ' '.join(output.split(' ')[:summary_size]).replace(' \n', '\n')
            f.write(cut)
            f.close()
