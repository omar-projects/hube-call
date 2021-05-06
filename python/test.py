from textblob import TextBlob
from textblob import Word
from textblob.wordnet import VERB

import nltk
nltk.download('stopwords')
from nltk.corpus import stopwords
import string
from nltk import FreqDist
import random


################# VARS #################
stop_words = stopwords.words('english')
stop_words.append('\'s')
print()
print(stop_words)
NUMBER_OF_KWORDS = 5


################# GET K-WORDS #################
"""
	Get the most frequent words in a text
"""
def get_kwords(text,number_of_returns):
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
				clean_data.append(word)
				

	#frequence
	freq_dist = FreqDist(clean_data)
	kwords = freq_dist.most_common(None)
	nKWords = []
 
	n=number_of_returns
	if(number_of_returns>len(kwords)):
		n=len(kwords)

	for i in range(n):
		if kwords[i] is not None:
			nKWords.append(kwords[i])

	"""
	print()
	print("\n ######## CLEAN DATA : ########")
	print(clean_data)
	print()
	print(len(clean_data))
	
	
	print()
	print("\n ######## FREQUENCE : ########")
	print(kwords)
	print()
	print(len(freq_dist.values()))

	
	print()
	print("\n ######## 5 FREQUENCE : ########")
	print(nKWords)
	print()
	print(len(freq_dist.values()))
	"""

	return nKWords


################# TEST #################
testText = "OTT is the abbreviation for \"over-the-top\" and refers to the distribution of video contents over a public network. With increasing popularity of smart connected devices and internet penetration, the global OTT service market is anticipated to grow from $81.60 billion in 2019 to $156.9 billion by 2024, exhibiting a CAGR (Compound Annual Growth Rate) of 14% (Markets and Markets, 2020). During the forecasted period, video on demand (VOD) services, especially subscription-based video-on-demand (SVoD) services and live steaming content, are expected to grow at the highest rate. In the SVoD market, Netflix remains to be the global market leader with 167 million subscribers worldwide. However, its dominance is estimated to weaken with the recent launch of Disney Plus and the rise of Asian OTT service providers. For example, Korea's Wavve, China's Youku and Malaysia's IFlix are just a few local OTT platforms that can challenge global OTT service providers. With Asia being the next lucrative OTT market, severe competition between local and global players is expected."
testText2 = "In this special issue, we strive to provide a much-needed synthesis of underlying theories and methodological approaches within the loosely coupled community of organizational scholars by taking account of the fact that micro-phenomena are embedded in macro-contexts, while macro-phenomena often emerge through the interaction and dynamics of lower-level elements. Such an approach may add depth and richness to our theoretical reasoning and likewise improve conversations between researchers and practitioners by providing insightful findings on how organizations operate and behave. We hope to encourage discussion around the multilevel issues in management through topics that broadly relate to the following: Organizational heterogeneity across levelsEmergent processes in organizationsAdvances in multilevel measurementSystematic review of multilevel organizational research, including bibliometric analysis and multilevel meta-analysisTemporal perspective of multilevel research on organizationsSingle- versus multi-level research approaches to study organizationsMethodological concerns and challenges in multilevel modelingMacro–micro divide in organizational researchMultilevel theories of organizations and organizingMultilevel organizational interventionsMultilevel organizational (mis)fitsMicro-foundations of organizationsLeadership across levelsOrchestrating individual creativity and team innovationJob- and team-level job designOrganizational implications of multilevel research."
testText3 = "About the journal The Journal of Work-Applied Management (JWAM) promotes management insights generated at the nexus of practice and theory, where change, discovery and innovation are driven by work-based, work-applied, collaborative, and experiential approaches such as case-based, reflective and action-oriented research methodologies. The aim of the journal is to share practical ‘work-applied’ management insights relevant to managers in private, public and community organisations; share ‘work-applied’ management insights relevant to academics seeking to improve work-based, work-applied, collaborative, and experiential approaches and to translate and challenge new developments in the use of case-based, reflective and action-oriented research methodologies. On behalf of the editorial team, we would like to invite papers examining topics from across the journal's scope for submission. The main aim of the journal is to bring together scholars, researchers, educators, students, professionals and other groups who are interested in work applied management. Typical areas of interest include: Work-based learning - at all levels and from differing perspectives  Case-based studies and action-oriented research approaches Reflective and experiential research approaches Approaches to facilitate change and transition in organisations Approaches to collaborative or integrated partnership working Editors Prof Tony Wall (Editor-in-Chief), International Centre for Thriving, University of Chester UK, Institutional lead for the Inter-University Research Programme for Sustainable Development & The European School of Sustainability Science and Research. (t.wall@chester.ac.uk). Dr Scott Foster, Liverpool Business School, Liverpool, UK (S.Foster@ljmu.ac.uk)  Research interest: Spirituality, well-being, Leadership and ethics Dr Mohsen Varsei, Australian Institute of Business, Adelaide, Australia (Mohsen.Varsei@aib.edu.au)  Research interest: Sustainable supply chain management Dr Verma Prikshat, Cardiff School of Management, Wales, UK (PVerma@cardiffmet.ac.uk) Research interest: Industry 4.0, the future of work, and leadership  Author Guidelines Please feel free to discuss your manuscript ideas with any of the Editors above. Details of the length of the submission are located within the author guidelines: https://www.emeraldgrouppublishing.com/journal/jwam#author-guidelines Articles should be a maximum of 7,000 words in length. This includes all text including references and appendices. Please allow 280 words for each figure or table. Authors must categorize their paper as part of the ScholarOne submission process. The category which most closely describes their paper should be selected from the list below: Research Study.  These articles may report applied research studies (for example, action research, action learning, reflective approaches), or research that has important implications for managers and/or those working in the field of work-based, work-applied, collaborative, and experiential change approaches. Case Study.  These articles describe actual interventions or experiences within organizations.  These may be shorter than the other types of articles, and as such, might be useful for teaching materials for work-based, work-applied or vocational programmes in higher education. Literature Review Study.  These articles utilize literature and systematic reviews as the primary or sole method of the paper.  The aim is to synthesise and critique existing literature in order to generate new understandings.  It might also include an overview or historical examination of some concept, technique or phenomenon.  The key is to ensure the article links to the aims and scope of the journal. Conceptual Study.  These articles will utilise existing literature (rather than original primary data) to develop new ideas, proposals for ways of working, or calls to develop new areas of practice. Viewpoint.  These are articles that share, translate, or challenge a particular opinion or interpretation of a situation, problem, or solution (conceptual and technical product or service) which are important to workapplied learning and management.  These may be shorter than other types of articles, and as such, might be useful for teaching materials for work-based, work-applied or vocational programmes in higher education. "
testText4 = "texte 3 mots"
print()
print(get_kwords(testText3,NUMBER_OF_KWORDS))