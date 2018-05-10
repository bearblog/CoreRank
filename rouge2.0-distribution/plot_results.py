"""
plot results based on results.csv
"""
from itertools import product
import numpy as np
import itertools
import csv
import os
import matplotlib
from matplotlib.ticker import FormatStrFormatter
if os.environ.get('DISPLAY', '') == '':
    # http://matplotlib.org/faq/usage_faq.html
    print('no display found. Using non-interactive Agg backend')
    matplotlib.use('Agg')
import matplotlib.pyplot as plt

def choose_marker(system, marker):
    if system == 'OUR SYSTEM (KEYRANK)':
        return 'o'
    if system == 'OUR SYSTEM (FLUCOVRANK)':
        return 's'
    if system == 'OUR SYSTEM (BASELINE)':
        return 'v'
    if system == 'OUR SYSTEM':
        return '^'
    if system == 'RANDOM':
        return '+'
    if system == 'LONGEST GREEDY':
        return 'x'
    if system == 'TEXTRANK':
        return 'h'
    if system == 'CLUSTERRANK':
        return 'p'
    if system == 'CORERANK SUBMODULAR':
        return ','
    if system == 'PAGERANK SUBMODULAR':
        return '.'
    if system == 'ORACLE':
        return '*'

    return marker

def choose_linestyle(system):
    if system == 'OUR SYSTEM (KEYRANK)' or system == 'OUR SYSTEM (FLUCOVRANK)' or system == 'OUR SYSTEM (BASELINE)' or system == 'OUR SYSTEM':
        return ':'
    if system == 'RANDOM' or system == 'LONGEST GREEDY':
        return '--'
    if system == 'TEXTRANK' or system == 'CLUSTERRANK':
        return '-.'
    return '-'


with open('results_renamed.csv') as f:
    results = [{k: v for k, v in row.items()} for row in csv.DictReader(f, skipinitialspace=True)]

for result in results:
    result['Summarization Size'] = result['System Name'].split('-')[1].split('.')[0]
    result['System Name'] = result['System Name'].split('-')[0]

### Average for system Random
if 'RANDOM0' in list(set([result['System Name'] for result in results])):
    randoms = list(set([result['System Name'] for result in results if result['System Name'].startswith('RANDOM')]))
    tasks = list(set([result['Task Name'] for result in results]))
    sizes = sorted(list(set([result['Summarization Size'] for result in results])), key=int)
    for task in tasks:
        for size in sizes:
            tmp = []
            for result in results:
                if result['System Name'] in randoms and result['Summarization Size'] == size and result['Task Name'] == task:
                    tmp.append(result)

            for t in tmp:
                results.remove(t)

            results.append(
                {
                    'Avg_F-Score': np.mean([float(t['Avg_F-Score']) for t in tmp]),
                    'Avg_Precision': np.mean([float(t['Avg_Precision']) for t in tmp]),
                    'Avg_Recall': np.mean([float(t['Avg_Recall']) for t in tmp]),
                    'Num Reference Summaries': '1',
                    'ROUGE-Type': 'ROUGE-1',
                    'Summarization Size': size,
                    'System Name': 'RANDOM',
                    'Task Name': task
                 }
            )

### Average for system Random
if 'ORACLE0' in list(set([result['System Name'] for result in results])):
    randoms = list(set([result['System Name'] for result in results if result['System Name'].startswith('ORACLE')]))
    tasks = list(set([result['Task Name'] for result in results]))
    sizes = sorted(list(set([result['Summarization Size'] for result in results])), key=int)
    for task in tasks:
        for size in sizes:
            tmp = []
            for result in results:
                if result['System Name'] in randoms and result['Summarization Size'] == size and result['Task Name'] == task:
                    tmp.append(result)

            for t in tmp:
                results.remove(t)

            results.append(
                {
                    'Avg_F-Score': np.mean([float(t['Avg_F-Score']) for t in tmp]),
                    'Avg_Precision': np.mean([float(t['Avg_Precision']) for t in tmp]),
                    'Avg_Recall': np.mean([float(t['Avg_Recall']) for t in tmp]),
                    'Num Reference Summaries': '1',
                    'ROUGE-Type': 'ROUGE-1',
                    'Summarization Size': size,
                    'System Name': 'ORACLE',
                    'Task Name': task
                 }
            )


figs = {
    'Avg_Precision': plt.figure(figsize=(12, 9)),
    'Avg_Recall': plt.figure(figsize=(12, 9)),
    'Avg_F-Score': plt.figure(figsize=(12, 9))
}
axs = dict((k,v.add_subplot(111)) for k, v in figs.items())
markers = itertools.cycle(matplotlib.markers.MarkerStyle.markers.keys())

for score in ['Avg_Precision', 'Avg_Recall', 'Avg_F-Score']:
    for system in set([result['System Name'] for result in results]):
        l = []
        for size in sorted(list(set([result['Summarization Size'] for result in results])), key=int):
            ll = []
            for result in results:
                if result['System Name'] == system and result['Summarization Size'] == size:
                    ll.append(float(result[score]))
            l.append(np.array(ll).mean())
        axs[score].plot(sorted(list(set([result['Summarization Size'] for result in results])), key=int)[1:], l[1:], label=system, marker=choose_marker(system, markers.next()), linestyle=choose_linestyle(system))
        print str(score)+','+str(system)+','+','.join(np.array(l).astype(str))

for score in ['Avg_Precision', 'Avg_Recall', 'Avg_F-Score']:    
    dataset_id ='AMI'
    if score == 'Avg_Precision':
        score_label = 'ROUGE-1 Precision'
    if score == 'Avg_Recall':
        score_label = 'ROUGE-1 Recall'
    if score == 'Avg_F-Score':
        score_label = 'ROUGE-1 F1-score'

    # 1 by 2
    if score == 'Avg_F-Score':
        axs[score].set_xlabel('summary size (words)', fontsize='x-large')
    if dataset_id == 'AMI':
        axs[score].set_ylabel(score_label, fontweight='bold', fontsize='xx-large')
    axs[score].set_title(dataset_id, fontweight='bold', fontsize='xx-large')

    # 3 by 2
    # if score == 'Avg_F-Score':
    #     axs[score].set_xlabel('summary size (words)', fontsize='x-large')
    # if score == 'Avg_Recall':
    #     axs[score].set_title(dataset_id, fontweight='bold', fontsize='xx-large')
    # if dataset_id == 'AMI':
    #     axs[score].set_ylabel(score_label, fontweight='bold', fontsize='xx-large')

    # 2 by 3
    # if score == 'Avg_Recall':
    #     axs[score].set_ylabel(dataset_id, fontweight='bold', fontsize='xx-large')
    # if dataset_id == 'AMI':
    #     axs[score].set_title(score_label, fontweight='bold', fontsize='xx-large')
    # if dataset_id == 'ICSI':
    #     axs[score].set_xlabel('summary size (words)', fontsize='x-large')

    axs[score].tick_params(axis='x', labelsize='x-large')
    axs[score].tick_params(axis='y', labelsize='x-large', labelrotation=90)
    axs[score].yaxis.set_major_formatter(FormatStrFormatter('%.2f'))

    if score == 'Avg_F-Score':
        if dataset_id == 'AMI':
            pass
            #axs[score].set_ylim([0.25, 0.381])
        else:
            pass
            axs[score].set_ylim([0.2125, 0.3222])
    # if score == 'Avg_Recall':
    #     axs[score].set_ylim([0., 0.6])
    # if score == 'Avg_Precision':
    #     axs[score].set_ylim([0., 0.6])

    # lengend labels reorder
    handles, labels = axs[score].get_legend_handles_labels()
    import operator
    labels2 = ['OUR SYSTEM', 'OUR SYSTEM (BASELINE)', 'OUR SYSTEM (KEYRANK)', 'OUR SYSTEM (FLUCOVRANK)', 'ORACLE', 'CORERANK SUBMODULAR', 'PAGERANK SUBMODULAR', 'TEXTRANK', 'CLUSTERRANK', 'LONGEST GREEDY', 'RANDOM']
    handles2 = [handles[labels.index(lab)] for lab in labels2]

    # legend position
    if score == 'Avg_F-Score':
        axs[score].legend(handles2, labels2, loc='lower right', fontsize='x-large')
    if score == 'Avg_Recall':
        axs[score].legend(handles2, labels2, loc='lower right', fontsize='x-large')
    if score == 'Avg_Precision':
        axs[score].legend(handles2, labels2, loc='upper right', fontsize='x-large')

    figs[score].savefig(score + ".pdf", bbox_inches='tight', dpi=500, pad_inches=0)
    #figs[score].show()


