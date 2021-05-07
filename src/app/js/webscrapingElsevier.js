const cheerio = require("cheerio");
const axios = require("axios");
const getRankOfReviewCNRS = require("./cnrs");
const getRankOfReviewFNEGE = require("./fnege");
const getRankOfReviewHCERES = require("./hceres");
const getOpenAccess = require('./openaccess');
const getSjrWidget = require('./sjrWidget');

let tabUrl = [
  "https://www.journals.elsevier.com/telecommunications-policy/call-for-papers", 
  "https://www.journals.elsevier.com/european-management-journal/call-for-papers"
];

const title = new Array();
const url = new Array();
const desc = new Array();
const deadlines = new Array();
const revues = new Array();

const fetchData = async (url) => {
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

const getResultsElsevier = async () => {
  
  for(let i = 0 ; i < tabUrl.length ; i++) {
    console.log("Page en cours de scrapping : " + tabUrl[i]);

    const $ = await fetchData(tabUrl[i]);

    let nomRevue = $("div.large-12 > h2").text();

    $("div.pod-listing").each((index, element) => {
      title.push($(element).find("a").attr("title"));
      url.push($(element).find("a").attr("href"));
      revues.push(nomRevue);
      desc.push($(element).find("div.article-content > p").text());
    });

  }

  for(var i = 0 ; i < title.length ; i++) {
    const $ = await fetchData(url[i]);

    $('div.article-content').each(function(i,elem) {
      let s = $(elem).text().trim();
      let limit;
      if(s.search("Paper submission:") > 0) {
        let index = s.search("Paper submission:");
        limit = s.substring(index+18, index+33).trim();
      } else if(s.search("Submission guidelines deadline:") > 0) {
        let index = s.search("Submission guidelines deadline:");
        limit = s.substring(index+32, index+46).trim();
      } else {
        limit = "deadline not found";
      }
      deadlines.push(limit);
    });
  }
  
  // Création en bdd des revues (sans les doublons pour optimiser le nb de requete)
  const revuesSansDoublon = revues.filter(function(ele , pos){
    return revues.indexOf(ele) == pos;
  });

  for(var i = 0 ; i < revuesSansDoublon.length ; i++) {
    const response = await axios.get(`${process.env.URL_API}/getRevueIdbyName/${revuesSansDoublon[i]}`);

    // Si la revue n'est pas trouvée, on l'ajoute
    if(response.data == "Not found") {
      console.log(" -> création de la revue : " + revuesSansDoublon[i]);

      const rankCNRS = await getRankOfReviewCNRS(revuesSansDoublon[i]);
      const rankHCERES = await getRankOfReviewHCERES(revuesSansDoublon[i]);
      const rankFNEGE = await getRankOfReviewFNEGE(revuesSansDoublon[i]);
      const isOpenAccess = await getOpenAccess(revuesSansDoublon[i]);
      const sjr = await getSjrWidget(revuesSansDoublon[i]);

      await axios.post(`${process.env.URL_API}/createRevue`,{
        editeur: 2,
        name: revuesSansDoublon[i],
        rankFNEGE: rankFNEGE,
        rankHCERES: rankHCERES,
        rankCNRS: rankCNRS,
        isOpenAccess: isOpenAccess,
        sjr: sjr
      });
    }
  }

  // Création en bdd des calls
  for(var i = 0 ; i < title.length ; i++) {
    console.log(" -> création du call for paper : " + title[i]);

    const response = await axios.get(`${process.env.URL_API}/getRevueIdbyName/${revues[i]}`);
    
    await axios.post(`${process.env.URL_API}/createCall`,{
      title: title[i],
      revue: response.data,
      deadline: deadlines[i],
      desc: desc[i],
      url: url[i]
    });
  }
};

module.exports = getResultsElsevier;