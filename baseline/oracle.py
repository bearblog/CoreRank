"""
Oracle (30 runs)

input (preprocessed human-annotated extractive summaries)

output (generated summary of varies budgets):
results/meeting/ami/development/random/ES2004a-oracle<1>-[50].txt
<1>: 1th run
[50]: word count
"""
import os
path_to_root = '/data/gshang/acl2018_abssumm/'
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
    path_to_extsumm = path_to_root + 'data/extsumm for oracle/' + dataset_id + '/'

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
    with open(path_to_extsumm + meeting_id + '_utterances.txt', 'r') as file:
        for line in file.read().splitlines():
            line_strip = ' '.join(utils.strip_stopwords(line.split(' '), stopwords.union(set(string.punctuation))))
            utterances.append(line_strip)
    for i in range(0, 30):
        random.shuffle(utterances)
        output = utterances

        output = ' \n'.join(output)
        output = ''.join([l for l in output if l not in punctuations])
        output = re.sub(' +', ' ', output).strip().lower()
        for summary_size in range(50, 550, 50):
            f = open(path_to_root + 'results/' + domain + '/' + dataset_id + '/' + development_or_test + '/oracle/' + meeting_id + '_' +
                     'oracle' + str(i) + '-' + str(summary_size) + '.txt', 'w')
            cut = ' '.join(output.split(' ')[:summary_size]).replace(' \n', '\n')
            f.write(cut)
            f.close()
