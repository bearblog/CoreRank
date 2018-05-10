### Files
```
.
├── test_batch.py        # main script for systems: tixier, filippova, boudin and mehdad
├── baseline             # scripts for baselines
│   ├── longest_greedy.py
│   ├── random.py
│   └── textrank.py
├── data
│   ├── document         # original dataset
│   ├── meeting          # original dataset
│   ├── community        # sentence communities / output of create_community.py
│   ├── community_tagged # tagged sentence communities / output of tagging_community.py
│   ├── create_community.py
│   ├── tagging_community.py
├── results              # results of systems for development/test dataset
├── rouge2.0-distribution
│   ├── copy_ami_icsi_reference.py
│   ├── plot_results.py
├── mapping              # extractive-abstractive summerazation mapping
```

### Create sentence communities
1.Create sentence communities with original datasets
```
ipython data/create_community.py
```

2.Tokenize and tagging sentence communities
```
ipython data/tagging_community.py
```

### Run systems:
1.Change variables: domain/dataset_id/development_or_test
```
domain = 'meeting'  # meeting / document
dataset_id = 'ami'  # ami, icsi / duc2001
language = 'en'
development_or_test = 'development'  # development / test
```

2.Run
```
ipython test_batch.py
ipython baseline/random.py
ipython baseline/longestGreedy.py
ipython baseline/textrank.py
```

### Test and plot results
1.Copy references for ROUGE
```
For ami/icsi
ipython copy_ami_icsi_reference.py
For duc2001
cp data/document/duc2001/reference/* rouge2.0-distribution/test-summarization/reference/
```

2.Copy output of systems for ROUGE :
```
cp results/meeting/ami/development/boudin/*  rouge2.0-distribution/test-summarization/system/
```

3.Run ROUGE jar
```
java -jar rouge2.0.jar
```

4.Plot
```
ipython plot_results.py
```