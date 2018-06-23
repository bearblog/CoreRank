"""
Budgeted Submodular Maximization (BSM) （for test with a sigle combination of parameters）

input (full summary):
results/meeting/ami/test/tixier/[MSC parameter id]/ES2004a_tixier.txt

output (summaries with varies budgets):
/tmp/takahe/rouge2.0-distribution_tixier_6_13_152/test-summarization/system/ES2004a_tixier-50.txt

output (grid search csv):
results/params_submodularity.csv

output (ROUGE score)
tixier_evaluation.csv
"""
import os
path_to_root = '/data/gshang/acl2018_abssumm/'
os.chdir(path_to_root)
import time
import csv
import string
import re
import copy
import gensim
import utils
import shutil
import numpy as np
import submodularity
import core_rank as cr
import multiprocessing
from data.meeting import meeting_lists
from sklearn.model_selection import ParameterGrid

def worker(idx, submodularity_param):
    # make a copy of rouge folder for each worker
    path_to_rouge_of_worker = '/tmp/takahe/rouge2.0-distribution_' + system_name + '_' + str(corpus_id) + '_' + str(MSC_param_id) + '_' + str(submodularity_param['index']) + '/'
    path_to_system_of_worker = path_to_rouge_of_worker + 'test-summarization/system/'
    path_to_results_csv_of_worker = path_to_rouge_of_worker + 'results.csv'
    if os.path.exists(path_to_rouge_of_worker):
        # clean system folder
        shutil.rmtree(path_to_system_of_worker)
        os.mkdir(path_to_system_of_worker)
        # clean existing results.csv
        if os.path.exists(path_to_results_csv_of_worker):
            os.remove(path_to_results_csv_of_worker)
    else:
        shutil.copytree(path_to_rouge, path_to_rouge_of_worker)

    # ##########################
    # ### LOOP OVER MEETINGS ###
    # ##########################
    for meeting_id in ids:
        # print "\t\t\t worker:", worker_id, "meeting_id:", meeting_id

        for summary_size in summary_size_range:
            # print "\t\t\t\tsummary_size:", summary_size

            cut = '\n'.join(submodularity.sentence_extraction_submodularity(
                summary_of_meeting[meeting_id],
                summary_stemmed_of_meeting[meeting_id],
                core_rank_scores_of_meeting[meeting_id].keys(),
                # round up to avoid carrying many decimals (to improve efficiency)
                np.round(np.array(core_rank_scores_of_meeting[meeting_id].values()) / sum(core_rank_scores_of_meeting[meeting_id].values()), 4),
                to_stem=False,
                budget=summary_size,
                scaling_factor=submodularity_param['scaling_factor'],
                weighted_sum_concepts=True,
                negative_terms=None,
                lamda=submodularity_param['lamda'],
                kmeans_diversity_score=True,
                kmeans_clusters_dict=kmeans_clusters_dict_of_meeting[meeting_id]
            ))

            cut = ''.join([l for l in cut if l not in string.punctuation])

            f = open(path_to_system_of_worker + meeting_id + '_' + system_name + '-' + str(summary_size) + '.txt', 'w')
            f.write(cut)
            f.close()

    # #############
    # ### ROUGE ###
    # #############
    # run rouge2.0.jar
    os.chdir(path_to_rouge_of_worker)
    code = os.system('java -jar rouge2.0.jar > /dev/null')
    if code != 0:
        raise RuntimeError()
    os.chdir(path_to_root)

    # read results.csv
    with open(path_to_results_csv_of_worker) as f:
        results = [{k: v for k, v in row.items()} for row in csv.DictReader(f, skipinitialspace=True)]

    scores = {
        str(summary_size): {'Avg_Precision': [], 'Avg_Recall': [], 'Avg_F-Score': []}
        for summary_size in summary_size_range
    }

    for result in results:
        summary_size = result['System Name'].split('-')[1].split('.')[0]
        scores[summary_size]['Avg_Precision'].append(float(result['Avg_Precision']))
        scores[summary_size]['Avg_Recall'].append(float(result['Avg_Recall']))
        scores[summary_size]['Avg_F-Score'].append(float(result['Avg_F-Score']))

    # for each summary_size, get the average score over different meetings
    for summary_size in summary_size_range:
        for key in ['Avg_Precision', 'Avg_Recall', 'Avg_F-Score']:
            scores[str(summary_size)][key] = np.mean(scores[str(summary_size)][key])

    # evaluation score correspond to current submodularity_param
    overall_evaluation_score = np.mean(
        [scores[str(summary_size)]['Avg_F-Score'] for summary_size in summary_size_range])

    print "\t\tsubmodularity_param id:", submodularity_param['index']
    return overall_evaluation_score, scores


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

# Load Word2Vec (takes approx. 8G RAM)
print "loading GoogleNews..."
start = time.time()
# vectors = Word2Vec(size=3e2, min_count=1)
# vectors.build_vocab([item for sublist in lists_of_tokens.values() for item in sublist])
# vectors.intersect_word2vec_format(path_to_wv, binary=True)
wv = gensim.models.KeyedVectors.load_word2vec_format(path_to_wv, binary=True)
# vectors = Word2Vec.load_word2vec_format(path_to_wv, binary=True)
print "finish loading GoogleNews, time_cost = %.2fs" % (time.time() - start)

# #############
# ### ROUGE ###
# #############
path_to_rouge = path_to_root + 'rouge2.0-distribution/'

# clean existing system folder
if os.path.exists(path_to_rouge + 'test-summarization/system/'):
    shutil.rmtree(path_to_rouge + 'test-summarization/system/')
os.mkdir(path_to_rouge + 'test-summarization/system/')

# clean existing results.csv
if os.path.exists(path_to_rouge + 'results.csv'):
    os.remove(path_to_rouge + 'results.csv')

# clean existing rouge folder copy of workers
if os.path.exists('/tmp/takahe/'):
    shutil.rmtree('/tmp/takahe/')

# Run previously copy_ami_icsi_reference.py to copy human written summaries to rouge's reference folder

# #####################################
# ### COMMUNITY CREATION PARAMETERS ###
# #####################################
path = path_to_root + 'data/' + dataset_id + '_params_create_community.csv'
with open(path) as f:
    corpus_params_dict = {row['index']: {k: v for k, v in row.items()} for row in csv.DictReader(f, skipinitialspace=True)}

# ######################
# ### MSC PARAMETERS ###
# ######################
system_name_list = ['filippova', 'boudin', 'mehdad', 'tixier']
MSC_system_params_dict = {}

for system_name in system_name_list:
    path = path_to_root + 'results/' + system_name + '_params_MSC_' + development_or_test + '.csv'
    with open(path) as f:
        MSC_system_params_dict[system_name] = {row['index']: {k: v for k, v in row.items()} for row in csv.DictReader(f, skipinitialspace=True)}

# ################################
# ### SUBMODULARITY PARAMETERS ###
# ################################
summary_size_range = range(50, 550, 50)

param_grid = {
    'lamda'         : np.arange(0, 1.1, 0.1),
    'scaling_factor': np.arange(0, 2.1, 0.1),
}
submodularity_params = list(ParameterGrid(param_grid))
for i in range(len(submodularity_params)):
    submodularity_params[i]['index'] = i

# # save indexed parameter grid
# keys = submodularity_params[0].keys()
# with open(path_to_root + 'results/' + 'params_submodularity.csv', 'wb') as output_file:
#     dict_writer = csv.DictWriter(output_file, keys)
#     dict_writer.writeheader()
#     dict_writer.writerows(submodularity_params)

# ######################
# ### EVALUATION CSV ###
# ######################
for system_name in system_name_list:
    with open(path_to_root + system_name + '_evaluation.csv', "wb") as f:
        f.write('index_step1,index_step2,index_step3,overall_score')
        for key in ['Avg_F-Score', 'Avg_Precision', 'Avg_Recall']:
            for summary_size in summary_size_range:
                f.write(',' + str(summary_size) + '_' + key)
        f.write('\n')

# ###############################################
# ### LOOP OVER COMMUNITY CREATION PARAMETERS ###
# ###############################################
corpus_id_range = range(0, 9)

for corpus_id in corpus_id_range:
    start = time.time()

    print str(corpus_id_range.index(corpus_id)) + '/' + str(len(corpus_id_range) - 1), "corpus:", dataset_id + '_' + str(corpus_id)

    # #########################
    # ### LOOP OVER SYSTEMS ###
    # #########################
    for system_name in system_name_list:
        print system_name

        # ################################
        # ### LOOP OVER MSC PARAMETERS ###
        # ################################
        for MSC_param_id in range(len(MSC_system_params_dict[system_name])):
            print "\tMSC_param_id:", MSC_param_id

            # !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            # only run on best parameter found in UCD, MSC, BSM steps
            if system_name == 'filippova':
                if corpus_id == 6 and MSC_param_id == 3: # ami
                # if corpus_id == 5 and param_id == 4: # icsi
                    submodularity_params_single = [submodularity_params[68]] # ami
                    # submodularity_params_single = [submodularity_params[21]] # icsi
                    pass
                else:
                    continue
            elif system_name == 'boudin':
                if corpus_id == 6 and MSC_param_id == 2: # ami
                # if corpus_id == 5 and param_id == 3: # icsi
                    submodularity_params_single = [submodularity_params[51]] # ami
                    # submodularity_params_single = [submodularity_params[67]] # icsi
                    pass
                else:
                    continue
            elif system_name == 'mehdad':
                if corpus_id == 3 and MSC_param_id == 0: # ami
                # if corpus_id == 6 and param_id == 2: # icsi
                    submodularity_params_single = [submodularity_params[94]] # ami
                    # submodularity_params_single = [submodularity_params[45]] # icsi
                    pass
                else:
                    continue
            elif system_name == 'tixier':
                if corpus_id == 6 and MSC_param_id == 13: # ami
                # if corpus_id == 4 and param_id == 16: # icsi
                    submodularity_params_single = [submodularity_params[152]] # ami
                    # submodularity_params_single = [submodularity_params[0]] # icsi
                    pass
                else:
                    continue
            # !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

            # remove_stopwords     = True if MSC_system_params_dict[system_name][str(MSC_param_id)]['remove_stopwords'] == 'True' else False
            remove_stopwords     = True
            # pos_filtering        = True if MSC_system_params_dict[system_name][str(MSC_param_id)]['pos_filtering'] == 'True' else False
            pos_filtering        = False
            # stemming             = True if MSC_system_params_dict[system_name][str(MSC_param_id)]['stemming'] == 'True' else False
            stemming             = True
            # cr_w                 = int(MSC_system_params_dict[system_name][str(MSC_param_id)]['cr_w'])
            cr_w                 = 12
            # cr_weighted          = True if MSC_system_params_dict[system_name][str(MSC_param_id)]['cr_weighted'] == 'True' else False
            cr_weighted          = True
            # cr_overspanning      = True if MSC_system_params_dict[system_name][str(MSC_param_id)]['cr_overspanning'] == 'True' else False
            cr_overspanning      = True

            # #######################################################
            # ### RESULTS LOADING, CORERANK AND KMEANS CLUSTERING ###
            # #######################################################
            summary_of_meeting = {}
            summary_stemmed_of_meeting = {}
            core_rank_scores_of_meeting = {}
            kmeans_clusters_dict_of_meeting = {}

            for meeting_id in ids:
                path = path_to_root + 'data/utterance/' + domain + '/' + dataset_id + '_' + str(corpus_id) + '/' +\
                       meeting_id + '_utterances.txt'
                with open(path, 'r+') as f:
                    utterances = f.read().splitlines()

                # get CoreRank scores dict
                lists_of_terms = []
                for sentence in utterances:
                    lists_of_terms.append(
                        utils.clean_text(
                            copy.copy(sentence), stopwords=stopwords, remove_stopwords=remove_stopwords,
                            pos_filtering=pos_filtering, stemming=stemming,
                            lower_case=True
                            # lower_case for CoreRank
                        )
                    )
                core_rank_scores_of_meeting[meeting_id] = cr.get_core_rank_scores(lists_of_terms, window_size=cr_w, overspanning=cr_overspanning, weighted=cr_weighted)

                # Kmeans clustering
                terms = list(set([item for sublist in lists_of_terms for item in sublist]))
                kmeans_clusters_dict, X = utils.cluster_words(terms, wv, num_cluster=60)
                kmeans_clusters_dict_of_meeting[meeting_id] = kmeans_clusters_dict
                # optimal_k_clusters(X, range(0, X.shape[0], 10)[1:], meeting_id, system_name[i])

                path = path_to_root + 'results/' + domain + '/' + dataset_id + '_' + str(corpus_id) + '/' + development_or_test + '/' \
                       + system_name + '/' + str(MSC_param_id) + '/' + meeting_id + '_' + system_name + '.txt'
                with open(path, 'r+') as f:
                    summary = f.read().splitlines()

                summary = [re.sub(' +', ' ', sentence).strip().lower().split(' ') for sentence in summary]
                summary_of_meeting[meeting_id] = summary

                summary_stemmed = []
                for sentence in summary:
                    summary_stemmed.append(
                        utils.clean_text(
                            ' '.join(sentence), stopwords=stopwords, remove_stopwords=False,
                            pos_filtering=False, stemming=stemming,
                            lower_case=True
                        )
                    )
                summary_stemmed_of_meeting[meeting_id] = summary_stemmed

            # #################################################
            # ### MULTIPROCESSING OVER SUBMODULARITY PARAMS ###
            # #################################################
            start_submodularity = time.time()
            pool = multiprocessing.Pool()
            pool_results = []

            for idx, submodularity_param in enumerate(submodularity_params_single):
                pool_results.append(
                    pool.apply_async(worker, args=(idx, submodularity_param))
                )

            pool.close()
            pool.join()
            print "time_cost = %.2fs" % (time.time() - start_submodularity)

            # get results from pool
            overall_evaluation_scores_of_submodularity_params = []
            scores_of_submodularity_params = []
            for pool_result in pool_results:
                overall_evaluation_score, scores = pool_result.get()
                overall_evaluation_scores_of_submodularity_params.append(overall_evaluation_score)
                scores_of_submodularity_params.append(scores)

            # ---- Output all ----
            with open(path_to_root + system_name + '_evaluation.csv', "a") as f:
                for idx, submodularity_param in enumerate(submodularity_params_single):
                    f.write(
                        str(corpus_id) + ',' +
                        str(MSC_param_id) + ',' +
                        str(submodularity_param['index']) + ',' +
                        str(overall_evaluation_scores_of_submodularity_params[idx])
                    )

                    for key in ['Avg_F-Score', 'Avg_Precision', 'Avg_Recall']:
                        for summary_size in summary_size_range:
                            f.write(',')
                            f.write(str(scores_of_submodularity_params[idx][str(summary_size)][key]))
                    f.write('\n')

            # ---- output the best ----
            # # select the best submodularity_param based on the best overall_evaluation_score
            # index = utils.max_index(overall_evaluation_scores_of_submodularity_params)
            # best_submodularity_param = submodularity_params[index]
            # best_overall_evaluation_score = overall_evaluation_scores_of_submodularity_params[index]
            # best_scores = scores_of_submodularity_params[index]
            #
            # # keep final param tuning results
            # index_of_community_creation_param = corpus_id
            # index_of_MSC_param = MSC_param_id
            # index_of_submodularity_param = index
            #
            # with open(path_to_root + system_name + '_evaluation.csv', "a") as f:
            #     f.write(
            #         str(index_of_community_creation_param) + ',' +
            #         str(index_of_MSC_param) + ',' +
            #         str(index_of_submodularity_param) + ',' +
            #         str(best_overall_evaluation_score)
            #     )
            #
            #     for key in ['Avg_F-Score', 'Avg_Precision', 'Avg_Recall']:
            #         for summary_size in summary_size_range:
            #             f.write(',')
            #             f.write(str(best_scores[str(summary_size)][key]))
            #     f.write('\n')

    print "time_cost = %.2fs" % (time.time() - start)


