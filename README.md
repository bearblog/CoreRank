## ACL2018_AbsSumm

### Requirements

Anaconda of Python 2.7 version
```
$ conda install -c conda-forge python-igraph
$ conda install libiconv gensim
$ conda install networkx=1.11
$ pip install pynlpl
```

Download `GoogleNews-vectors-negative300.bin.gz` and [`en-70k-0.2.lm`](https://sourceforge.net/projects/cmusphinx/files/Acoustic%20and%20Language%20Models/US%20English/) under `resources` folder.

### utterance communities detection
```
$ ipython data/utteance_community_detection.py
```

### test and evaluation on test set:
(with the best combination of parameters)
```
$ ipython multi_sentence_compression_single.py
$ ipython rouge2.0-distribution/copy_ami_icsi_reference.py
$ ipython budgeted_submodular_maximization_single.py
```

### parameter tuning on development set:
```
$ ipython multi_sentence_compression_multiprocessing.py
$ ipython rouge2.0-distribution/copy_ami_icsi_reference.py
$ ipython budgeted_submodular_maximization_multiprocessing.py
```

### Citation
```
Shang, G., Ding, W., Zhang, Z., Tixier, A. J. P., Meladianos, P., Vazirgiannis, M., & Lorre, J. P. (2018). Unsupervised Abstractive Meeting Summarization with Multi-Sentence Compression and Budgeted Submodular Maximization. arXiv preprint arXiv:1805.05271.

Boudin, F., & Morin, E. (2013, June). Keyphrase extraction for n-best reranking in multi-sentence compression. In North American Chapter of the Association for Computational Linguistics (NAACL).
```