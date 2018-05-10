Download `GoogleNews-vectors-negative300.bin.gz` and [`en-70k-0.2.lm`](https://sourceforge.net/projects/cmusphinx/files/Acoustic%20and%20Language%20Models/US%20English/) under `resources` folder.

### create utterance communities
```
ipython data/utteance_community_detection.py
```

### parameter tuning on development set:
```
ipython multi_sentence_compression_multiprocessing.py
ipython rouge2.0-distribution/copy_ami_icsi_reference.py
ipython budgeted_submodular_maximization_multiprocessing.py
```

### evaluation with the best combination of parameters on test set:
```
ipython multi_sentence_compression_single.py
ipython rouge2.0-distribution/copy_ami_icsi_reference.py
ipython budgeted_submodular_maximization_single.py
```