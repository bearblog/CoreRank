import math
import pynlpl.lm.lm
from nltk import ngrams


class LanguageModel:
    def __init__(self, model_path):
        """
        download a pre-trained language model from here: https://sourceforge.net/projects/cmusphinx/files/Acoustic%20and%20Language%20Models/US%20English/
        you want to look at the files with .lm extension (standard ARPA format)
        'en-70k-0.2.lm.gz' takes about 6GB of RAM once loaded
        if you don't have enough memory you can try with the pruned version ('en-70k-0.2-pruned.lm.gz') but performance will be slightly inferior

        mode='simple' is faster but loads everything into memory
        if you have a C++ compiler installed, you can try mode='trie' (uses 35% less memory)
        """
        self.model = pynlpl.lm.lm.ARPALanguageModel(filename=model_path, mode='simple')

    def get_n_grams(self, sentence, n):
        """Recursion function for ngrams computation with left and right pad
        In [18]: get_n_grams("hey how are you", 6)
        Not enough words in sentence, 6-grams will decreased by 1
        Not enough words in sentence, 5-grams will decreased by 1
        Out[18]:
        [('hey',),
         ('hey', 'how'),
         ('hey', 'how', 'are'),
         ('hey', 'how', 'are', 'you'),
         ('how', 'are', 'you'),
         ('are', 'you'),
         ('you',)]
        """
        ss = sentence.split()
        n_grams = []
        if len(ss) < n:
            #print 'Not enough words in sentence, %d-grams will decreased by 1' % n
            n_grams = self.get_n_grams(sentence, n-1)
        else:
            # nltk3.2.3 for n_gram in ngrams(ss, n, pad_left=True, pad_right=True, left_pad_symbol=None, right_pad_symbol=None):
            for n_gram in ngrams(ss, n, pad_left=True, pad_right=True, left_pad_symbol=None, right_pad_symbol=None):
                n_grams.append(tuple([i for i in n_gram if i is not None]))
        return n_grams

    def get_sentence_score(self, sentence, n=3, unknown_word_prob=1e-5, normalization=True):
        sentence = sentence.lower()
        """ sum of the probabilities of all the n-grams for a sentence
        this is a trigram language model so we don't want to exceed n=3
        
        In [2]: lm.get_sentence_score("hey how are you", 3)
        ('hey',) 0.000273191385068
        ('hey', 'how') 0.0150004746029
        ('hey', 'how', 'are') 0.194845643515
        ('how', 'are', 'you') 0.603543531894
        ('are', 'you') 0.117793140303
        ('you',) 0.0176102288587
        """
        score = 0.
        n_grams = self.get_n_grams(sentence, n)
        if len(n_grams) > 0:
            for n_gram in n_grams:
                try:
                    log_prob = self.model.ngrams.prob(n_gram)
                    score += math.exp(log_prob)
                except KeyError:
                    score += unknown_word_prob
            if normalization:
                return score / len(n_grams)
            else:
                return score
        else:
            raise ValueError('Empty sentence')
