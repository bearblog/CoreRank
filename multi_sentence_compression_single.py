"""
Multi-Sentence Compression (MSC) （for test with a sigle combination of parameters）
Generate results: tixier and its variations tixier[0-6],
filippova, boudin and mehdad systems. [16G RAM required]

input (POS tagged utterance communities per meeting):
data/community_tagged/meeting/ami_[UCD parameter id]/ES2004a_comms_tagged.txt

output (full summary):
results/meeting/ami/test/tixier/[MSC parameter id]/ES2004a_tixier.txt

output (grid search csv):
results/tixier_params_MSC_development.csv
"""
import os
path_to_root = '/data/gshang/acl2018_abssumm/'
os.chdir(path_to_root)
import time
import string
import re
import gensim
import takahe
import tf_idf
import utils
import copy
from language_model import LanguageModel
from data.meeting import meeting_lists
from sklearn.model_selection import ParameterGrid

domain = 'meeting'  # meeting
dataset_id = 'ami'  # ami, icsi
language = 'en'     # en, fr
development_or_test = 'test'  # development / test

# #########################
# ### RESOURCES LOADING ###
# #########################
if domain == 'meeting':
    path_to_stopwords = path_to_root + 'resources/stopwords/meeting/stopwords.' + language + '.dat'
    stopwords = utils.load_stopwords(path_to_stopwords)

    if dataset_id == 'ami':
        ids = meeting_lists.ami_development_set \
            if development_or_test == 'development' \
            else meeting_lists.ami_test_set
    elif dataset_id == 'icsi':
        ids = meeting_lists.icsi_development_set \
            if development_or_test == 'development' \
            else meeting_lists.icsi_test_set

if language == 'en':
    path_to_wv = path_to_root + 'resources/GoogleNews-vectors-negative300.bin.gz'
    path_to_lm = path_to_root + 'resources/en-70k-0.2.lm'

# Load Word2Vec (takes approx. 8G RAM)
print "loading GoogleNews..."
start = time.time()
# vectors = Word2Vec(size=3e2, min_count=1)
# vectors.build_vocab([item for sublist in lists_of_tokens.values() for item in sublist])
# vectors.intersect_word2vec_format(path_to_wv, binary=True)
wv = gensim.models.KeyedVectors.load_word2vec_format(path_to_wv, binary=True)
# vectors = Word2Vec.load_word2vec_format(path_to_wv, binary=True)
print "finish loading GoogleNews, time_cost = %.2fs" % (time.time() - start)

# Load language model (takes approx. 8G RAM)
print "loading language model..."
start = time.time()
lm = LanguageModel(model_path=path_to_lm)
print "finish loading language model, time_cost = %.2fs" % (time.time() - start)

# ######################
# ### PARAMETER GRID ###
# ######################
system_name_list = ['filippova', 'boudin', 'mehdad', 'tixier']
system_params_dict = {}

for system_name in system_name_list:
    # pos_filtering_grid = [True, False] if system_name == 'tixier' or system_name == 'mehdad' else [False]
    # cr_w_grid = [3, 10, 20] if system_name == 'tixier' else [3]
    cr_w_grid = [6, 12] if system_name == 'tixier' else [3]
    cr_overspanning_grid = [True, False] if system_name == 'tixier' else [False]

    param_grid = {
        # TfIdf, TwIdf
        'remove_stopwords': [True],
        'pos_filtering'   : [False],
        'stemming'        : [True],

        # CoreRank
        'cr_w'            : cr_w_grid,
        'cr_weighted'     : [True],
        'cr_overspanning' : cr_overspanning_grid,

        # minimum number of words allowed in the compression
        'nb_words'            : [6, 8, 10, 12, 14, 16],

        # k value of k-means for diversity score
        'diversity_n_clusters': [6, 8, 10, 12, 14, 16]
    }
    params = list(ParameterGrid(param_grid))

    # keep nb_words == n_clusters
    params_new = []
    for param in params:
        if param['nb_words'] == param['diversity_n_clusters']:
            params_new.append(param)

    for i in range(len(params_new)):
        params_new[i]['index'] = i

    system_params_dict[system_name] = params_new

    # save indexed parameter grid
    import csv
    keys = params_new[0].keys()
    with open(path_to_root + 'results/' + system_name + '_params_MSC_' + development_or_test + '.csv', 'wb') as output_file:
        dict_writer = csv.DictWriter(output_file, keys)
        dict_writer.writeheader()
        dict_writer.writerows(params_new)

# ###############################
# ### LOOP OVER TAGGED CORPUS ###
# ###############################
# corpus refers to:
# data/community_tagged/meeting/ami_0/
# data/community_tagged/meeting/ami_1/
# data/community_tagged/meeting/ami_2/
# etc.
corpus_id_range = range(0, 9)

for corpus_id in corpus_id_range:
    start = time.time()

    print str(corpus_id_range.index(corpus_id)) + '/' + str(len(corpus_id_range) - 1), "corpus:", dataset_id + '_' + str(corpus_id)
    if domain == 'meeting':
        path_to_tagged_corpus = path_to_root + 'data/community_tagged/meeting/' + dataset_id + '_' + str(corpus_id) + '/'
    elif domain == 'document':
        path_to_tagged_corpus = path_to_root + 'data/community_tagged/document/' + dataset_id + '_' + str(corpus_id) + '/'

    # #############################
    # ### TAGGED CORPUS LOADING ###
    # #############################
    pos_separator = '/'
    punct_tag = 'PUNCT'

    tagged_corpus = {key: [] for key in ids}
    for meeting_id in ids:
        tagged_meeting = []
        with open(path_to_tagged_corpus + meeting_id + '_comms_tagged.txt', 'r') as file:
            tagged_community = []
            for line in file.read().splitlines():
                if line != '':
                    tagged_community.append(line)
                else:
                    tagged_meeting.append(tagged_community)
                    tagged_community = []
        tagged_corpus[meeting_id] = tagged_meeting

    # #########################
    # ### LOOP OVER SYSTEMS ###
    # #########################
    for system_name in system_name_list:
        print system_name

        # ############################
        # ### LOOP OVER PARAM_GRID ###
        # ############################
        for param in system_params_dict[system_name]:
            param_id = param['index']
            # print "\tparam_id:", param_id

            # !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            # only run on best parameter found in UCD and MSC steps
            if system_name == 'filippova':
                if corpus_id == 6 and param_id == 3: # ami
                # if corpus_id == 5 and param_id == 4: # icsi
                    pass
                else:
                    continue
            elif system_name == 'boudin':
                if corpus_id == 6 and param_id == 2: # ami
                # if corpus_id == 5 and param_id == 3: # icsi
                    pass
                else:
                    continue
            elif system_name == 'mehdad':
                if corpus_id == 3 and param_id == 0: # ami
                # if corpus_id == 6 and param_id == 2: # icsi
                    pass
                else:
                    continue
            elif system_name == 'tixier':
                if corpus_id == 6 and param_id == 13: # ami
                # if corpus_id == 4 and param_id == 16: # icsi
                    pass
                else:
                    continue
            # !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

            remove_stopwords     = param['remove_stopwords']
            pos_filtering        = param['pos_filtering']
            stemming             = param['stemming']
            cr_w                 = param['cr_w']
            cr_weighted          = param['cr_weighted']
            cr_overspanning      = param['cr_overspanning']
            nb_words             = param['nb_words']
            diversity_n_clusters = param['diversity_n_clusters']

            # ##########################
            # ### LOOP OVER MEETINGS ###
            # ##########################
            for meeting_id in ids:
                # print "\t\tmeeting_id:", meeting_id

                # #############################
                # ### IDFS (meeting level)  ###
                # #############################
                # consider community as DOCUMENT, meeting as CORPUS
                # idf is based on lower_case form
                tokenized_document_list = []
                for tagged_community in tagged_corpus[meeting_id]:
                    tagged_document = ' '.join(tagged_community)
                    cleaned_tagged_document = utils.clean_tagged_text(
                        tagged_document, stopwords,
                        remove_stopwords=remove_stopwords, pos_filtering=pos_filtering,
                        stemming=stemming, lower_case=True,
                        pos_separator=pos_separator, punct_tag=punct_tag
                    )
                    cleaned_document = utils.remove_tags_from_text(cleaned_tagged_document)
                    tokenized_document_list.append(cleaned_document.split(' '))
                meeting_idf_dict = tf_idf.inverse_document_frequencies(tokenized_document_list)

                # #############################
                # ### LOOP OVER COMMUNITIES ###
                # #############################
                meeting_summary = []

                for tagged_community in tagged_corpus[meeting_id]:
                    # print "\t\t\ttagged_community_id:", tagged_corpus[meeting_id].index(tagged_community)

                    compresser = takahe.word_graph(
                        system_name=system_name,
                        tagged_community=copy.copy(tagged_community),
                        language=language,
                        punct_tag=punct_tag,
                        pos_separator=pos_separator,

                        lm=lm,
                        wv=wv,
                        stopwords=stopwords,
                        meeting_idf_dict=meeting_idf_dict,

                        remove_stopwords=remove_stopwords,
                        pos_filtering=pos_filtering,
                        stemming=stemming,
                        cr_w=cr_w,
                        cr_weighted=cr_weighted,
                        cr_overspanning=cr_overspanning,
                        nb_words=nb_words,
                        diversity_n_clusters=diversity_n_clusters,

                        keyphrase_reranker_window_size=0,
                        common_hyp_threshold_verb=0.9,
                        common_hyp_threshold_nonverb=0.3
                    )

                    # Write the word graph in the dot format
                    # compresser.write_dot('new.dot')
                    loose_verb_constraint = False
                    while True:
                        # Get the 200 best paths
                        candidates = compresser.get_compression(nb_candidates=200, loose_verb_constraint=loose_verb_constraint)
                        if len(candidates) > 0:
                            final_paths = compresser.final_score(candidates, 1)  # n_results
                            meeting_summary.append(final_paths[0][1])
                            break
                        # Then reason of no candidate:
                        # 1. minimum number of words allowed in the compression larger than
                        # the maximum path length in graph, then decrease nb_words and diversity_n_clusters
                        else:
                            compresser.nb_words -= 1
                            if compresser.nb_words == 0:
                                # 2. path should contain at least one verb, but no verb presented in the community
                                # in this case, then loose the verb constraint
                                loose_verb_constraint = True
                                # raise RuntimeError("MSC failed")

                # ######################
                # ### OUTPUT SUMMARY ###
                # ######################
                output_path = path_to_root + 'results/' + domain + '/' + dataset_id + '_' + str(corpus_id) + '/' + development_or_test + '/' + system_name + '/' + str(param_id) + '/'
                if not os.path.exists(output_path):
                    os.makedirs(output_path)

                output = '\n'.join(meeting_summary)
                # output = ''.join([l for l in output if l not in string.punctuation])
                output = re.sub(' +', ' ', output).strip()  # .lower()

                # write full summary
                file_path_name = output_path + meeting_id + '_' + system_name + '.txt'
                f = open(file_path_name, 'w')
                f.write(output)
                f.close()

                # # write trucated summaries with different sizes
                # for summary_size in range(50, 550, 50):
                #     file_path_name = output_path + meeting_id + '_' + system_name + '-' + str(summary_size) + '.txt'
                #     f = open(file_path_name, 'w')
                #     cut = ' '.join(output.split(' ')[:summary_size]).replace(' \n', '\n')
                #     f.write(cut)
                #     f.close()
    print "time_cost = %.2fs" % (time.time() - start)
