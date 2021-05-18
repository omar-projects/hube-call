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

################# INVERSE DOCUMENT FREQUENCY #################
# IDF : calculates how common or rare a word is in the entire document set
# The closer it is to 0, the more common a word is.
def idf(text,sentences):
    idf_score = {}
    for word in text:
        word_occurence_per_phrases = check_sent(word, sentences)
        idf_score[word] = math.log(int(len(sentences))/(word_occurence_per_phrases+1))

	# Performing a log and divide
    return idf_score

# check_sent
def check_sent(word, sentences):
    final = [all([w in sentence for w in word]) for sentence in sentences]
    sent_len = [sentences[i] for i in range(0, len(final)) if final[i]]
    return int(len(sent_len))

################# TF-IDF #################
# IDF : calculates the key words on a text based on their quantity(tf)/quality(idf)
def tf_idf_score(tokens,sentences):
    tf_score = tf(tokens)
    idf_score = idf(tokens,sentences)
    return {key: tf_score[key] * idf_score.get(key, 0) for key in tf_score.keys()}


def get_top_n(dict_elem, n):
    result = dict(sorted(dict_elem.items(), key = itemgetter(1), reverse = True)[:n])
    return result

################# TEST #################
testText = "OTT is the abbreviation for \"over-the-top\" and refers to the distribution of video contents over a public network. With increasing popularity of smart connected devices and internet penetration, the global OTT service market is anticipated to grow from $81.60 billion in 2019 to $156.9 billion by 2024, exhibiting a CAGR (Compound Annual Growth Rate) of 14% (Markets and Markets, 2020). During the forecasted period, video on demand (VOD) services, especially subscription-based video-on-demand (SVoD) services and live steaming content, are expected to grow at the highest rate. In the SVoD market, Netflix remains to be the global market leader with 167 million subscribers worldwide. However, its dominance is estimated to weaken with the recent launch of Disney Plus and the rise of Asian OTT service providers. For example, Korea's Wavve, China's Youku and Malaysia's IFlix are just a few local OTT platforms that can challenge global OTT service providers. With Asia being the next lucrative OTT market, severe competition between local and global players is expected. The live streaming sector is a growing market with significant potential. From professional live content to user-generated content, the openness and authenticity of live streamed contents are engaging more audiences. Top performing players in the live streaming industry include but not limited to YouTube TV, Facebook Live, Periscope, and Twitch. Live streamed content is also popular in Asia with many audiences who consume live streaming content for entertainment and commercial purposes. For instance, Deloitte prospects China to be the largest live streaming market with more than 500 million users (Carnahan, 2020; Deloitte, 2018). Growth in the live streaming sector has led to the establishment of multi-channel networks (MCNs) that offer profound assistance to live content streamers. Despite the growing interest in OTT services, emerging literature highlights the need for more research. In the domain of OTT SVoD services, many studies appear to examine the platform's businesses and its impacts on various areas. For studies related to business strategies, case studies and modelling techniques are adopted to understand the service systems of OTT service providers (i.e., Hallinan & Striphas, 2016; Hiller, 2017). Studies comparing different OTT SVoD service providers and their business strategies provide an understanding of the industry (i.e., Park, 2017; Sanson & Steirer, 2019; Wayne, 2018). In light of global OTT platform's entrance into different countries, there are studies comparing local and global service providers to explicate the competitive dynamics between them (i.e., Dwyer et al., 2018; Kim et al., 2016). Recent studies further examine this phenomenon through the conceptual lens of imperialism to investigate the cultural impacts of global service providers (i.e., Fitzgerald, 2019; Lobato, 2018). Besides cultural impacts, OTT services’ influence on telecommunication providers, traditional industries, and users are also topics that continue to be discussed (i.e., Kim et al., 2017; Kim et al., 2019; Sujata et al., 2015). Live streaming contents and MCNs are recent terminologies and thus the literature is still in its infancy. Many prior studies focus on YouTube and examine why and how live video streaming has become the new alternative to mainstream contents (i.e., Koch et al., 2018; Hu et al., 2017). In addition, studies on live streamers’ self-presentation techniques focus on the monetary profits or streamers’ influences (i.e., Johnson & Woodcock, 2019; Lee et al., 2019; Mardona et al., 2018). With MCNs being a new type of entity created for online streamers, prior literature investigates the evolution and role of MCNs in the live streaming industry although it is still in its early stage of research (i.e., Gardner & Lehnert, 2016; Hou, 2018; Lobato, 2016; Vonderau, 2016)."
testText2 = "In this special issue, we strive to provide a much-needed synthesis of underlying theories and methodological approaches within the loosely coupled community of organizational scholars by taking account of the fact that micro-phenomena are embedded in macro-contexts, while macro-phenomena often emerge through the interaction and dynamics of lower-level elements. Such an approach may add depth and richness to our theoretical reasoning and likewise improve conversations between researchers and practitioners by providing insightful findings on how organizations operate and behave. We hope to encourage discussion around the multilevel issues in management through topics that broadly relate to the following: Organizational heterogeneity across levelsEmergent processes in organizationsAdvances in multilevel measurementSystematic review of multilevel organizational research, including bibliometric analysis and multilevel meta-analysisTemporal perspective of multilevel research on organizationsSingle- versus multi-level research approaches to study organizationsMethodological concerns and challenges in multilevel modelingMacro–micro divide in organizational researchMultilevel theories of organizations and organizingMultilevel organizational interventionsMultilevel organizational (mis)fitsMicro-foundations of organizationsLeadership across levelsOrchestrating individual creativity and team innovationJob- and team-level job designOrganizational implications of multilevel research."
testText3 = "About the journal The Journal of Work-Applied Management (JWAM) promotes management insights generated at the nexus of practice and theory, where change, discovery and innovation are driven by work-based, work-applied, collaborative, and experiential approaches such as case-based, reflective and action-oriented research methodologies. The aim of the journal is to share practical 'work-applied' management insights relevant to managers in private, public and community organisations; share ‘work-applied’ management insights relevant to academics seeking to improve work-based, work-applied, collaborative, and experiential approaches and to translate and challenge new developments in the use of case-based, reflective and action-oriented research methodologies. On behalf of the editorial team, we would like to invite papers examining topics from across the journal's scope for submission. The main aim of the journal is to bring together scholars, researchers, educators, students, professionals and other groups who are interested in work applied management. Typical areas of interest include: Work-based learning - at all levels and from differing perspectives  Case-based studies and action-oriented research approaches Reflective and experiential research approaches Approaches to facilitate change and transition in organisations Approaches to collaborative or integrated partnership working Editors Prof Tony Wall (Editor-in-Chief), International Centre for Thriving, University of Chester UK, Institutional lead for the Inter-University Research Programme for Sustainable Development & The European School of Sustainability Science and Research. (t.wall@chester.ac.uk). Dr Scott Foster, Liverpool Business School, Liverpool, UK (S.Foster@ljmu.ac.uk)  Research interest: Spirituality, well-being, Leadership and ethics Dr Mohsen Varsei, Australian Institute of Business, Adelaide, Australia (Mohsen.Varsei@aib.edu.au)  Research interest: Sustainable supply chain management Dr Verma Prikshat, Cardiff School of Management, Wales, UK (PVerma@cardiffmet.ac.uk) Research interest: Industry 4.0, the future of work, and leadership  Author Guidelines Please feel free to discuss your manuscript ideas with any of the Editors above. Details of the length of the submission are located within the author guidelines: https://www.emeraldgrouppublishing.com/journal/jwam#author-guidelines Articles should be a maximum of 7,000 words in length. This includes all text including references and appendices. Please allow 280 words for each figure or table. Authors must categorize their paper as part of the ScholarOne submission process. The category which most closely describes their paper should be selected from the list below: Research Study.  These articles may report applied research studies (for example, action research, action learning, reflective approaches), or research that has important implications for managers and/or those working in the field of work-based, work-applied, collaborative, and experiential change approaches. Case Study.  These articles describe actual interventions or experiences within organizations.  These may be shorter than the other types of articles, and as such, might be useful for teaching materials for work-based, work-applied or vocational programmes in higher education. Literature Review Study.  These articles utilize literature and systematic reviews as the primary or sole method of the paper.  The aim is to synthesise and critique existing literature in order to generate new understandings.  It might also include an overview or historical examination of some concept, technique or phenomenon.  The key is to ensure the article links to the aims and scope of the journal. Conceptual Study.  These articles will utilise existing literature (rather than original primary data) to develop new ideas, proposals for ways of working, or calls to develop new areas of practice. Viewpoint.  These are articles that share, translate, or challenge a particular opinion or interpretation of a situation, problem, or solution (conceptual and technical product or service) which are important to workapplied learning and management.  These may be shorter than other types of articles, and as such, might be useful for teaching materials for work-based, work-applied or vocational programmes in higher education. "
testText4 = "test from a simple test text"
testText5 = "The question 'What is Dogecoin?' has a seemingly simple answer: put simply, it's a cryptocurrency created in 2013 by software developers Billy Markus and Jackson Palmer as a satire of Bitcoin and the exploding popularity of crypto. But obviously there's more to it than that. That's because Dogecoin is also one of the fastest-growing cryptocurrencies, having risen in value by 10,000% since the start of 2021. That's right: if you'd invested $100 in Dogecoin back in January, your investment would now be worth around $10,000. In fact, it's now one of the top cryptocurrency performers overall, with an estimated overall worth of more than $60 billion — making it bigger than Ford and Twitter. Best personal finance apps: See our top picks What is Ethereum? Everything you need to know about the cryptocurrency. Robinhood: What is it and how it works. Despite that growth, Dogecoin is still cheap relative to other cryptos, and that makes it an ideal option for crypto-curious investors to dip their toes in the water. Watching the price of Dogecoin fluctuate can be a good lesson for kids or noobs in how crypto markets work and prepare them for some real investing. Think of Dogecoin as the gateway cryptocurrency. Here’s everything you need to know about Dogecoin and how it works. What is Dogecoin? According to its website, Dogecoin is “a decentralized, peer-to-peer digital currency that enables you to easily send money online.” That same definition could be applied to other more established cryptocurrencies including Bitcoin, Ethereum, or Litecoin. Cryptocurrencies started gaining popularity as alternatives to traditional currency in the early 2010s. They allow money to be transferred from one person to another without using a bank, and many people believe they make for a safer and more democratic financial system. Bitcoin was launched in 2009, and today there are thousands of other “altcoins” out there. Indeed, new ones launch on a seemingly constant basis, with SafeMoon and Chia just two of the most recent. Dogecoin has also been labelled a 'memecoin' on account of its origins — and this is one area in which it really differs from most other cryptos."

chosen_text = testText5
tokens = tokenize(chosen_text)
sentences = TextBlob(chosen_text).sentences

# print(tokenize(testText))
# print(stop_words)

# print()
# print("Nombre de mots :")
# print(len(tokens))
# print("Nombre de phrases :")
# print(len(sentences))


# print()
# print("############ TF-IDF ############")
# print(tf_idf_score(tokens,sentences))


# print()
# print()
# print()
# print("############ RESULT : ############")
print(json.dumps(get_top_n(tf_idf_score(tokens,sentences), 10)))
sys.stdout.flush()
