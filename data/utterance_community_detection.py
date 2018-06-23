"""
Utterance Community Detection (UCD)

input (automatic or manual meeting transcription):
data/meeting/ami/ES2004a.da-asr or ES2004a.da

output (utterance communities per meeting):
data/community/meeting/ami_[UCD parameter id]/ES2004a_comms.txt

output (POS tagged utterance communities per meeting):
data/community_tagged/meeting/ami_[UCD parameter id]/ES2004a_comms_tagged.txt

output (preprocessed meeting transcription):
data/utterance/meeting/ami_[UCD parameter id]/ES2004a_utterances.txt

output (grid search csv):
data/ami_params_create_community.csv'
"""
import os
path_to_root = '/data/gshang/acl2018_abssumm/'
os.chdir(path_to_root)
import string
import core_rank
from data import utils
from data import clustering
from data.meeting import meeting_lists
from collections import Counter
from nltk import PerceptronTagger
from nltk import TweetTokenizer
from dictionary_tokenizer import DictionaryTokenizer
from sklearn.model_selection import ParameterGrid


domain     = 'meeting' # meeting
dataset_id = 'ami'     # ami, icsi
language   = 'en'      # en
source     = 'asr'     # asr, manual

# #########################
# ### RESOURCES LOADING ###
# #########################
if domain == 'meeting':
    path_to_stopwords    = path_to_root + 'resources/stopwords/meeting/stopwords.' + language + '.dat'
    path_to_filler_words = path_to_root + 'resources/stopwords/meeting/filler_words.' + language + '.txt'
    stopwords = utils.load_stopwords(path_to_stopwords)
    filler_words = utils.load_filler_words(path_to_filler_words)

    if dataset_id == 'ami':
        ids = meeting_lists.ami_development_set + meeting_lists.ami_test_set
    elif dataset_id == 'icsi':
        ids = meeting_lists.icsi_development_set + meeting_lists.icsi_test_set

if language == 'en':
    path_to_word2vec_keys = path_to_root + 'resources/word2vec_keys.txt'
# tokenizer = DictionaryTokenizer(path_to_word2vec_keys) # highly time-consuming
# tokenizer = TweetTokenizer()
tagger = PerceptronTagger()

# ######################
# ### CORPUS LOADING ###
# ######################
corpus = {}
for id in ids:
    if domain == 'meeting':
        if dataset_id == 'ami' or dataset_id == 'icsi':
            if source == 'asr':
                path = path_to_root + 'data/meeting/' + dataset_id + '/' + id + '.da-asr'
            elif source == 'manual':
                path = path_to_root + 'data/meeting/' + dataset_id + '/' + id + '.da'
            # filler words will be removed during corpus loading
            corpus[id] = utils.read_ami_icsi(path, filler_words)

# #############################
# ### CORPUS PRE-PROCESSING ###
# #############################
corpus_tagged = {}
for id in ids:
    utterances_indexed = corpus[id]
    utterances_indexed_tagged = []
    for i in range(len(utterances_indexed)):
        index, role, utt = utterances_indexed[i]

        # tokenization
        tokens = utt.split(' ')
        # tokens = tokenizer.tokenize(utt)
        corpus[id][i] = (index, role, ' '.join(tokens))  # update

        # tagging
        tokens_tagged = [tuple[0] + '/' + (tuple[1] if tuple[0] not in string.punctuation else 'PUNCT') for tuple in tagger.tag(tokens)]
        utterances_indexed_tagged.append((index, role, ' '.join(tokens_tagged)))
    corpus_tagged[id] = utterances_indexed_tagged

# ######################
# ### PARAMETER GRID ###
# ######################
if dataset_id == 'ami':
    lsa_n_components_grid = [30]
elif dataset_id == 'icsi':
    lsa_n_components_grid = [60]

param_grid = {
    # algorithm: clustering algorithm | kmeans, agglomerative_clustering
    # aware    : grouping utterances by awareness such as speaker,
    #            then apply clustering algorithm on each group | none, speaker
    # n_comms  : number of output communities
    'algorithm': ['kmeans'],
    'aware'    : ['none'],
    'n_comms'  : [20, 25, 30, 35, 40, 45, 50, 55, 60],

    # feature         : textual feature type as input of clustering algorithm, row l2 normolized | tfidf, twidf, binary, tf
    # ngram_range     : range of gram for tfidf, binary and tf, not applicable for twidf | (1, 2)
    # extra_features  : expanding textual feature matrix by extra features | [], ['length'], ['speaker'], ['position'], ['length', 'speaker']
    #                   length: word count of corresponding utterance, column standardized
    #                   speaker: speaker of corresponding utterance, encoded with OneHotEncoder
    #                   position: index position (sequential order) of corresponding utterance inside a meeting transcription, column standardized
    # lsa             : latent semantic analysis for textual feature | True, False
    # lsa_n_components: number of components to keep for LSA | 30, 60
    'feature'         : ['tfidf'],
    'ngram_range'     : [(1, 1)],
    # 'extra_features'  : [[], ['length', 'position', 'speaker']],
    'extra_features'  : [[]],
    'lsa'             : [True],
    'lsa_n_components': lsa_n_components_grid,

    # min_words       : minimum number of non-stopwords allowed per sentence
    # min_elt         : communities that contain less than this number of sentences will be filtered out
    'min_words'       : [3],
    'min_elt'         : [1],

    # w           : window size for CoreRank during community re-ranking and twidf textual feature construction
    # overspanning: overspanning for CoreRank
    'w'           : [3],
    'overspanning': [True]
}

params = list(ParameterGrid(param_grid))
for i in range(len(params)):
    params[i]['index'] = i

# save indexed parameter grid
import csv
keys = params[0].keys()
with open(path_to_root + 'data/' + dataset_id + '_params_create_community.csv', 'wb') as output_file:
    dict_writer = csv.DictWriter(output_file, keys)
    dict_writer.writeheader()
    dict_writer.writerows(params)

# ##########################
# ### COMMUNITY CREATION ###
# ##########################
for param in params:
    param_id = param['index']
    print "### Parameter Grid Search:", str(param_id + 1), "/", str(len(params)), param

    algorithm        = param['algorithm']
    aware            = param['aware']
    n_comms          = param['n_comms']
    feature          = param['feature']
    ngram_range      = param['ngram_range']
    extra_features   = param['extra_features']
    lsa              = param['lsa']
    lsa_n_components = param['lsa_n_components']
    min_words        = param['min_words']
    min_elt          = param['min_elt']
    w                = param['w']
    overspanning     = param['overspanning']

    for id in ids:
        print id

        utterances_indexed = corpus[id]
        utterances_indexed_tagged = corpus_tagged[id]

        # #####################################
        # ### Pre-processing for Clustering ###
        # #####################################
        utterances_processed = []
        lists_of_terms = []
        utterances_remain = []
        for utterance_indexed in utterances_indexed:
            index, role, utt = utterance_indexed
            utt_cleaned = utils.clean_text(
                utt,
                stopwords=stopwords,
                remove_stopwords=True,
                pos_filtering=False,
                stemming=True,
                # clustering based on lowercase form.
                lower_case=True
            )
            # remove utterances with less than min_words number of non-stopwords
            if len(utt_cleaned) >= min_words:
                utterances_processed.append((index, role, ' '.join(utt_cleaned)))
                lists_of_terms.append(utt_cleaned)
                utterances_remain.append(utt)
            else:
                # print "drop:", utt
                pass
        print len(utterances_processed), 'utterances'

        # ############################
        # ### UTTERANCE CLUSTERING ###
        # ############################
        membership = clustering.cluster_utterances(
            utterances_processed,
            algorithm=algorithm,
            aware=aware,
            n_comms=n_comms,
            feature=feature,
            ngram_range=ngram_range,
            extra_features=extra_features,
            lsa=lsa,
            lsa_n_components=lsa_n_components,
            twidf_window_size=w,
            meeting_id=id
        )

        c = dict(Counter(membership))

        # ############################
        # ### COMMUNITY RE-RANKING ###
        # ############################
        # CoreRank dict for entire meeting
        core_rank_scores = core_rank.get_core_rank_scores(lists_of_terms, window_size=w, overspanning=overspanning, weighted=True)
        # sorted(core_rank_scores.items(), key=operator.itemgetter(1), reverse=True)

        # assign score to each utterance as size-normolized cumulative CoreRank scores of the words they contain
        # (measure of average informativeness for each utterance)
        utt_scores = []
        for utterance in utterances_processed:
            index, role, utt = utterance
            words = utt.split(' ')
            utt_scores.append(round(sum([core_rank_scores[word] for word in words]) / float(len(words)), 2))

        # remove communities with less than min_elt number of utterances
        comm_labels = [k for k, v in c.iteritems() if v >= min_elt]

        # assign score to each community as size-normolized cumulative informativeness scores of the utterances they contain
        # (measure of average informativeness for each community)
        comm_scores = []
        for label in comm_labels:
            # get the index of all the utterances belonging to the comm
            utt_indexes = [idx for idx, value in enumerate(membership) if value == label]
            comm_scores.append(round(sum([utt_scores[idx] for idx in utt_indexes]) / float(len(utt_indexes)), 2))

        # sort communities according to the average score of the utterances they contain
        # get sorted index of elements of comm_scores
        std_idx = sorted(range(len(comm_scores)), key=lambda x: comm_scores[x], reverse=True)
        std_comm_labels = [comm_labels[idx] for idx in std_idx]

        # ##############
        # ### OUTPUT ###
        # ##############
        # output remain utterances
        if domain == 'meeting':
            path_to_utterance = path_to_root + 'data/utterance/meeting/' + dataset_id + '_' + str(param_id) + '/'
        if not os.path.exists(path_to_utterance):
            os.makedirs(path_to_utterance)

        with open(path_to_utterance + id + '_utterances.txt', 'w+') as txtfile:
            txtfile.write('\n'.join(utterances_remain))

        # output community
        if domain == 'meeting':
            path_to_community = path_to_root + 'data/community/meeting/' + dataset_id + '_' + str(param_id) + '/'
        if not os.path.exists(path_to_community):
            os.makedirs(path_to_community)

        with open(path_to_community + id + '_comms.txt', 'w+') as txtfile:
            for label in std_comm_labels:
                for my_label in [sent[0] for i, sent in enumerate(utterances_processed) if membership[i] == label]:
                    to_write = [elt[2] for elt in utterances_indexed if elt[0] == my_label][0]
                    # one utterance per line
                    txtfile.write(to_write + '\n')
                # separate communities by white line
                txtfile.write('\n')

        # output tagged community
        if domain == 'meeting':
            path_to_community_tagged = path_to_root + 'data/community_tagged/meeting/' + dataset_id + '_' + str(param_id) + '/'
        if not os.path.exists(path_to_community_tagged):
            os.makedirs(path_to_community_tagged)

        with open(path_to_community_tagged + id + '_comms_tagged.txt', 'w+') as txtfile:
            for label in std_comm_labels:
                for my_label in [sent[0] for i, sent in enumerate(utterances_processed) if membership[i] == label]:
                    to_write = [elt[2] for elt in utterances_indexed_tagged if elt[0] == my_label][0]
                    # one utterance per line
                    txtfile.write(to_write + '\n')
                # separate communities by white line
                txtfile.write('\n')
