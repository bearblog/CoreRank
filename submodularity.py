import copy
import numpy as np

def concept_submodularity_objective(
            units,
            concepts,
            my_scores,
            to_stem,
            weighted_sum_concepts,
            negative_terms,
            lamda,
            kmeans_diversity_score,
            kmeans_clusters_dict,
            sign
    ):

    # units elements need to be split by whitespace

    if len(units) > 0:
        ################
        ### COVERAGE ###
        ################
        if weighted_sum_concepts:
            sum_my_scores_coverage = sum(
                [my_scores[concepts.index(u)] for u in units if u in concepts]
            )
        else:
            sum_my_scores_coverage = sum(
                [my_scores[concepts.index(u)] for u in list(set(units)) if u in concepts]
            )

        ########################
        ### DIVERSITY REWARD ###
        ########################
        if kmeans_diversity_score:
            cluster_counters = np.zeros(len(set(kmeans_clusters_dict.values())))
            # token's form is tuple of (word, tag)
            for u in units:
                if u in kmeans_clusters_dict:
                    idx = kmeans_clusters_dict[u]
                    cluster_counters[idx] = 1
            diversity_score = np.sum(cluster_counters) / float(len(cluster_counters))
        else:
            # percentage of unique concepts covered
            diversity_score = len(list(set(concepts) & set(units))) / float(len(concepts))

        my_score_final = sum_my_scores_coverage + lamda * diversity_score

    else:
        my_score_final = 0.
    # if sign == 'singleton' or sign == 'summary':
    #     print sign, "coverage:", sum_my_scores_coverage, "diversity:", diversity_score, "final:", my_score_final, "size:", len(units)
    return my_score_final


def sentence_extraction_submodularity(
        units_splitted,
        units_splitted_stemmed,
        keywords_temp,
        scores_temp,
        to_stem,
        budget,
        scaling_factor,
        weighted_sum_concepts,
        negative_terms,
        lamda,
        kmeans_diversity_score=True,
        kmeans_clusters_dict=None
):
    # costs are unit sizes
    # scores are needed for the computation of the objective

    scores_internal = scores_temp

    # prune out units not containing any concept to save iterations
    unit_presence_index = [i for i in range(len(units_splitted_stemmed)) if any(j in units_splitted_stemmed[i] for j in keywords_temp)]
    units_splitted = [units_splitted[i] for i in unit_presence_index]
    units_splitted_stemmed = [units_splitted_stemmed[i] for i in unit_presence_index]

    # if at least one unit remains
    if len(units_splitted_stemmed) > 0:

        # ensure that singletons that exceed budget get truncated (otherwise their scores are increased)!
        singletons_scores = [
            concept_submodularity_objective(
                units=x[0:min(len(x), budget)],
                concepts=keywords_temp,
                my_scores=scores_internal,
                to_stem=to_stem,
                weighted_sum_concepts=weighted_sum_concepts,
                negative_terms=negative_terms,
                lamda=lamda,
                kmeans_diversity_score=kmeans_diversity_score,
                kmeans_clusters_dict=kmeans_clusters_dict,
                sign='singleton'
            )
            for x in units_splitted_stemmed
        ]

        # if multiple singletons are best, select the first one
        max_singletons_score = max(singletons_scores)
        first_best = singletons_scores.index(max_singletons_score)
        v_star = units_splitted[first_best][0:min(len(units_splitted[first_best]), budget)]

        # initialization
        G = []
        G_unstemmed = []
        concept_submodularity_objective_G = 0
        U = copy.copy(units_splitted_stemmed)

        while len(U) > 0:

            if len(U) == len(units_splitted_stemmed):
                # at first iteration, G is empty so:
                numerators_left = singletons_scores
            else:
                numerators_left = [
                    concept_submodularity_objective(
                        units=[item for sublist in G for item in sublist] + l,
                        concepts=keywords_temp,
                        my_scores=scores_internal,
                        to_stem=to_stem,
                        weighted_sum_concepts=weighted_sum_concepts,
                        negative_terms=negative_terms,
                        lamda=lamda,
                        kmeans_diversity_score=kmeans_diversity_score,
                        kmeans_clusters_dict=kmeans_clusters_dict,
                        sign='numerator_left'
                    )
                    for l in U
                ]

            # compute ratios of objective vs scaled cost
            ratios = []
            for i in range(len(U)):
                cost_l = len(U[i])
                num = numerators_left[i] - concept_submodularity_objective_G
                denom = cost_l ** scaling_factor
                # print "num:", num, "cost_l:", cost_l
                ratios.append(round(num / denom, 4))

            # select unit associated with the max ratio

            # what if we have several best? -> select the first one that has lowest cost
            index_max = [i for i,ratio in enumerate(ratios) if ratio == max(ratios)]
            candidate_ks = [U[i] for i in index_max]
            candidate_ks_unstemmed = [units_splitted[i] for i in index_max]
            candidate_ks_costs = [len(k) for k in candidate_ks]

            min_candidate_ks_costs = min(candidate_ks_costs)
            first_best = candidate_ks_costs.index(min_candidate_ks_costs)
            k = candidate_ks[first_best]
            k_unstemmed = candidate_ks_unstemmed[first_best]
            index_max = index_max[first_best]
            k_cost = min_candidate_ks_costs

            # check constraints
            summary_cost = sum([len(i) for i in G])

            budget_constraint = k_cost + summary_cost <= budget  # here PB

            objective_constraint = (numerators_left[index_max] - concept_submodularity_objective_G) >= 0

            if objective_constraint:
                if budget_constraint:
                    G.append(k)
                    G_unstemmed.append(k_unstemmed)
                else:
                    # truncate element that had been selected and iterate
                    U[index_max] = U[index_max][0:(budget - summary_cost)]
                    units_splitted[index_max] = units_splitted[index_max][0:(budget - summary_cost)]
                    # print "truncate"
                    continue

            # update
            concept_submodularity_objective_G = concept_submodularity_objective(
                    units=[item for sublist in G for item in sublist],
                    concepts=keywords_temp,
                    my_scores=scores_internal,
                    to_stem=to_stem,
                    weighted_sum_concepts=weighted_sum_concepts,
                    negative_terms=negative_terms,
                    lamda=lamda,
                    kmeans_diversity_score=kmeans_diversity_score,
                    kmeans_clusters_dict=kmeans_clusters_dict,
                    sign='summary'
                )

            # regardless of the constraints remove k from U
            U.remove(k)
            units_splitted.remove(k_unstemmed)

            if sum([len(i) for i in G]) >= budget:
                break
            # end while

        G = [' '.join(i) for i in G_unstemmed]

        # of G and v_star, select the one maximizing the objective
        if concept_submodularity_objective_G >= max_singletons_score:
            G_final = G
        else:
            G_final = ' '.join(v_star)

    # if no unit contains a concept
    else:
        G_final = ""

    return G_final
