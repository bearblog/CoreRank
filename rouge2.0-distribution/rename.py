i = open('results.csv', 'r')
o = open('results_renamed.csv', 'w')

for l in i.readlines():
    if l == '\n':
        continue
    l = l.replace('LONGESTGREEDY', 'LONGEST GREEDY')
    l = l.replace('PAGERANKSUBMODULAR', 'PAGERANK SUBMODULAR')
    l = l.replace('BEST-MODEL', 'CORERANK SUBMODULAR')
    l = l.replace('CLUSTER-RANK', 'CLUSTERRANK')
    l = l.replace('TIXIER', 'OUR SYSTEM')
    l = l.replace('FILIPPOVA', 'OUR SYSTEM (BASELINE)')
    l = l.replace('BOUDIN', 'OUR SYSTEM (KEYRANK)')
    l = l.replace('MEHDAD', 'OUR SYSTEM (FLUCOVRANK)')
    o.write(l)

i.close()
o.close()
