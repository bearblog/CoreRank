"""
Longest Greedy

input (preprocessed meeting transcription):
data/utterance/meeting/ami_[UCD parameter id]/ES2004a_utterances.txt

output (generated summary of varies budgets):
results/meeting/ami/test/longestGreedy/ES2004a-longestGreedy-[50].txt
[50]: word count
"""
import os
path_to_root = '/data/gshang/acl2018_abssumm/'
os.chdir(path_to_root)

import string
import re
from data.meeting import meeting_lists
import utils

domain = 'meeting'
dataset_id = 'icsi'  # ami, icsi
language = 'en'
development_or_test = 'test'  # development / test

if domain == 'meeting':
    path_to_utterance = path_to_root + 'data/utterance/meeting/' + dataset_id + '_1/'

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
    utterance_length_rank = []
    with open(path_to_utterance + meeting_id + '_utterances.txt', 'r') as file:
        for line in file.read().splitlines():
            line_strip = ' '.join(utils.strip_stopwords(line.split(' '), stopwords))
            utterance_length_rank.append((len(line_strip.split()), line_strip))

    utterance_length_rank = sorted(utterance_length_rank, key=lambda tup: tup[0], reverse=True)
    output = [u[1] for u in utterance_length_rank]

    output = ' \n'.join(output)
    output = ''.join([l for l in output if l not in punctuations])
    output = re.sub(' +', ' ', output).strip().lower()
    for summary_size in range(50, 550, 50):
        f = open(path_to_root + 'results/' + domain + '/' + dataset_id + '/' + development_or_test + '/longestGreedy/' + meeting_id + '_' +
                 'longestGreedy' + '-' + str(summary_size) + '.txt', 'w')
        cut = ' '.join(output.split(' ')[:summary_size]).replace(' \n', '\n')
        f.write(cut)
        f.close()
