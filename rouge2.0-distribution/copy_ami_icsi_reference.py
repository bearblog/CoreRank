"""
copy human-written abstract to rouge2.0-distribution/test-summarization/reference/
"""
import os
import re
import shutil
path_to_root = '/data/gshang/acl2018_abssumm/'
os.chdir(path_to_root)

import string
from data.meeting import meeting_lists
punctuations = string.punctuation

dataset_id = 'ami'
development_or_test = 'test'
path_to_from = path_to_root + 'data/meeting/' + dataset_id + '/'
path_to_to = path_to_root + 'rouge2.0-distribution/test-summarization/reference/'

if os.path.exists(path_to_to):
    shutil.rmtree(path_to_to)
os.mkdir(path_to_to)

if dataset_id == 'ami':
    ids = meeting_lists.ami_development_set \
        if development_or_test == 'development' \
        else meeting_lists.ami_test_set
elif dataset_id == 'icsi':
    ids = meeting_lists.icsi_development_set \
        if development_or_test == 'development' \
        else meeting_lists.icsi_test_set

for id in ids:
    if dataset_id == 'ami':
        i = open(path_to_from + id + '.longabstract', 'r')
        o = open(path_to_to + id + '_reference.txt', 'w')

        content = ''.join(l for l in i.read() if l not in punctuations)
        content = re.sub(' +', ' ', content)
        content = content.lower()
        print id, 'reference words count:', len(content.split())
        o.write(content)

        i.close()
        o.close()
    elif dataset_id == 'icsi':
        if development_or_test == 'development':
            i = open(path_to_from + id + '.ducref.longabstract', 'r')
            o = open(path_to_to + id + '_reference.txt', 'w')

            content = ''.join(l for l in i.read() if l not in punctuations)
            content = re.sub(' +', ' ', content)
            content = content.lower()
            print id, 'reference words count:', len(content.split())
            o.write(content)

            i.close()
            o.close()
        elif development_or_test == 'test':
            for idx, key in enumerate(['beata', 's9553330', 'vkaraisk']):
                i = open(path_to_from + id + '.ducref.' + key + '.longabstract', 'r')
                o = open(path_to_to + id + '_reference' + str(idx) + '.txt', 'w')

                content = ''.join(l for l in i.read() if l not in punctuations)
                content = re.sub(' +', ' ', content)
                content = content.lower()
                print id, key, 'reference words count:', len(content.split())
                o.write(content)

                i.close()
                o.close()


"""
ES2005b reference words count: 258,
ES2005d reference words count: 300,
ES2007b reference words count: 232,
ES2008a reference words count: 296,
ES2008d reference words count: 297,
ES2015d reference words count: 247,
IS1003c reference words count: 248,
IS1004c reference words count: 652,
IS1006b reference words count: 259,
IS1006d reference words count: 294,
TS3004c reference words count: 340,
TS3005d reference words count: 293,
TS3006c reference words count: 272,
TS3008b reference words count: 359,
TS3011a reference words count: 320,
ES2005a reference words count: 118,
ES2005c reference words count: 304,
ES2007a reference words count: 169,
ES2007c reference words count: 262,
ES2007d reference words count: 144,
ES2008b reference words count: 335,
ES2008c reference words count: 354,
ES2015a reference words count: 204,
ES2015b reference words count: 261,
ES2015c reference words count: 323,
IS1003a reference words count: 83,
IS1003d reference words count: 244,
IS1004a reference words count: 277,
IS1004b reference words count: 321,
IS1004d reference words count: 354,
IS1006a reference words count: 302,
IS1006c reference words count: 304,
TS3004a reference words count: 259,
TS3004b reference words count: 329,
TS3004d reference words count: 268,
TS3005a reference words count: 160,
TS3005b reference words count: 398,
TS3005c reference words count: 298,
TS3006a reference words count: 235,
TS3006b reference words count: 371,
TS3006d reference words count: 303,
TS3008a reference words count: 242,
TS3008c reference words count: 346,
TS3008d reference words count: 341,
TS3011b reference words count: 521,
TS3011c reference words count: 523,
TS3011d reference words count: 340,

ES2004a reference words count: 169,
ES2004b reference words count: 311,
ES2004c reference words count: 267,
ES2004d reference words count: 339,
ES2014a reference words count: 179,
ES2014b reference words count: 307,
ES2014c reference words count: 325,
ES2014d reference words count: 391,
IS1009a reference words count: 287,
IS1009b reference words count: 293,
IS1009c reference words count: 322,
IS1009d reference words count: 342,
TS3003a reference words count: 186,
TS3003b reference words count: 370,
TS3003c reference words count: 254,
TS3003d reference words count: 432,
TS3007a reference words count: 227,
TS3007b reference words count: 259,
TS3007c reference words count: 313,
TS3007d reference words count: 265,

Bed003 reference words count: 741,
Bed006 reference words count: 680,
Bed011 reference words count: 688,
Bed014 reference words count: 623,
Bed015 reference words count: 654,
Bed017 reference words count: 587,
Bmr013 reference words count: 477,
Bmr014 reference words count: 457,
Bmr015 reference words count: 513,
Bmr020 reference words count: 687,
Bro023 reference words count: 265,
Bro024 reference words count: 220,
Bro025 reference words count: 207,
Bro026 reference words count: 275,
Bro027 reference words count: 274,
Bed002 reference words count: 622,
Bed005 reference words count: 635,
Bed008 reference words count: 621,
Bed010 reference words count: 595,
Bed012 reference words count: 488,
Bed013 reference words count: 587,
Bmr003 reference words count: 571,
Bmr006 reference words count: 481,
Bmr007 reference words count: 484,
Bmr018 reference words count: 413,

Bed004 beata reference words count: 245,
Bed004 s9553330 reference words count: 143,
Bed004 vkaraisk reference words count: 713,
Bed009 beata reference words count: 180,
Bed009 s9553330 reference words count: 180,
Bed009 vkaraisk reference words count: 617,
Bed016 beata reference words count: 165,
Bed016 s9553330 reference words count: 123,
Bed016 vkaraisk reference words count: 483,
Bmr005 beata reference words count: 215,
Bmr005 s9553330 reference words count: 564,
Bmr005 vkaraisk reference words count: 776,
Bmr019 beata reference words count: 234,
Bmr019 s9553330 reference words count: 158,
Bmr019 vkaraisk reference words count: 673,
Bro018 beata reference words count: 288,
Bro018 s9553330 reference words count: 174,
Bro018 vkaraisk reference words count: 752,


ami dev avg_size:  297
ami test avg_size: 291
icsi dev avg_size: 513
icsi test vkaraisk avg_size: 669
"""
