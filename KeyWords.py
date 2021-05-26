from textblob import TextBlob
from textblob import Word
from textblob.wordnet import VERB
from operator import itemgetter
from nltk.corpus import stopwords
from nltk import FreqDist

import json
import sys

import nltk
import math
import string
import random

nltk.download('stopwords')

################# VARS #################
stop_words = stopwords.words('english')
stop_words.append('\'s')
stop_words.append('’')
stop_words.append('“')
stop_words.append('”')
stop_words.append('—')


################# TOKENIZE #################
def tokenize(text):
    #create TextBlob Obj
    TBtext = TextBlob(text)
    clean_data = []

    #lemmatize
    for i in range(len(TBtext.words)):
        if(TBtext.tags[i][1].startswith('VB')):
            arg = "v"
        elif(TBtext.tags[i][1].startswith('NN')):
            arg = "n"
        elif(TBtext.tags[i][1].startswith('NN')):
            arg = "r"
        else:
            arg = "a"

        word = Word(TBtext.tags[i][0].lower()).lemmatize(arg)


		#remove stopwords and ponctuation
        if word not in stop_words:
            if word not in string.punctuation:
                if not word.isnumeric():
                    if word not in clean_data:
                        clean_data.append(word)

    return clean_data


################# TERM FREQUENCY #################
# TF : calculates the frequence of a word on a text
# TF(t) = Nombre d'apparition du terme t dans le document / Nombre total de termes dans le document
def tf(text):
    #frequence
    tf_score = {}
    freq_dist = FreqDist(text)
    kwords = freq_dist.most_common(None)
    total_words = len(kwords)

    for k in kwords:
        if k is not None:
            tf_score[k[0]]=k[1]/total_words

    return tf_score

def get_top_n(dict_elem, n):
    result = dict(sorted(dict_elem.items(), key = itemgetter(1), reverse = True)[:n]) 
    return result


chosen_text = sys.argv[1];
tokens = tokenize(chosen_text)
sentences = TextBlob(chosen_text).sentences

print(json.dumps(get_top_n(tf(tokens), 10)))
sys.stdout.flush()
