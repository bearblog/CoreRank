"""
Tokenize sentences based on dictionary

"""
import string


class DictionaryTokenizer:
    """
    In [1]: from word2vec_keys_tokenizer import Word2VecKeysTokenizer

    In [2]: tokenier = Word2VecKeysTokenizer("resources/word2vec_keys.txt")

    In [3]: text = 'La-st ***Monday*** , a former ||| U.S. .p.r.e.s.i.d.e.n.t. (Bill
       ...:  Clinton), replaced his (old ) T.V. with an l.c.d.. screen.'

    In [4]: tokenier.tokenize(text)
    Out[4]:
    ['Last',
     '*',
     '*',
     '*',
     'Monday',

     '*',
     '*',
     '*',
     ',',
     'a',
     'former',
     '|',
     '|',
     '|',
     'U.S.',
     'president',
     '(',
     'Bill',
     'Clinton',
     ')',
     ',',
     'replaced',
     'his',
     '(',
     'old',
     ')',
     'TV',
     'with',
     'an',
     'lcd',
     'screen',
     '.']
    """
    def __init__(self, path_to_dictionary):
        with open(path_to_dictionary, 'r+') as file:
            self.vocabulary = file.read().splitlines()

    def tokenize(self, text):
        tokens = text.split()
        punct = string.punctuation

        # remove punctuation from the tokens that don't have an entry in word2vec (such as l.c.d.)
        # however, we don't want to remove true punctuation, like 'on Monday, bla bla'
        # so we perform a first separation

        for idx, token in enumerate(tokens):
            if token not in self.vocabulary: # case-sensitive!
                # take care of cases such as ','(keep) ',,,'(drop)
                if token.strip(punct) == '':
                    tokens[idx] = list(tokens[idx])
                    continue

                # take care of cases such as 'Monday...'
                idx_char_l = len(token)-1
                punct_l = ''
                while token[idx_char_l] in punct:
                    punct_l = token[idx_char_l] + punct_l
                    idx_char_l = idx_char_l - 1

                # take care of cases such as '(Bill'
                idx_char_f = 0
                punct_f = ''
                while token[idx_char_f] in punct:
                    punct_f = punct_f + token[idx_char_f]
                    idx_char_f = idx_char_f + 1

                if token[idx_char_f:idx_char_l+1] in self.vocabulary:
                    tokens[idx] = list(punct_f) + [token[idx_char_f:idx_char_l+1]] + list(punct_l) # separate punctuation from word
                else:
                    tokens[idx] = [tokens[idx]]

            else:
                tokens[idx] = [tokens[idx]]

        # flatten and remove empty elements
        tokens_flat = [item for sublist in tokens for item in sublist if len(item)>0]

        # now, we can remove punctuation inside the tokens that don't have an entry in word2vec
        for idx, elt in enumerate(tokens_flat):
            if elt not in punct:
                if elt not in self.vocabulary:
                    tokens_flat[idx] = elt.translate(None, punct)

        return filter(None, tokens_flat)
