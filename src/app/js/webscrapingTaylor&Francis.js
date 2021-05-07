const cheerio = require("cheerio");
const axios = require("axios");
const getRankOfReviewCNRS = require("./cnrs");
const getRankOfReviewFNEGE = require("./fnege");
const getRankOfReviewHCERES = require("./hceres");
const getOpenAccess = require('./openaccess');
const getSjrWidget = require('./sjrWidget');

let link = "https://authorservices.taylorandfrancis.com/call-for-papers/";

const title = new Array();
const url = new Array();
const desc = new Array();
const deadline = new Array();
const revueName = new Array();


const fetchData = async () => {
  const result = await axios.get(link);
  return cheerio.load(result.data);
};

/**
 * Méthode réalisant le xcrapping pour le site de l'éditeur Taylor & Francis 
 */
const getResultsTaylorFrancis = async () => {

  
  const regExManagement = new RegExp("\d\*,\?1694,\d\*,\?");
  const $ = await fetchData();
  
  // On parcours tous les div concernant les call for papers
  $("div .filtercpt__article").each((index, element) => {
    let sujet = $(element).attr('data-subjectareas');
    // On restreind au call for paper concernant le management 
    if(sujet.match(regExManagement)){
      let item = $(element).find("header.article-header").find("h3").text();
      revueName.push(item);
      item = $(element).find("span.article-header-subtitle").text();
      title.push(item);
      item = $(element).find("a").attr("href");
      url.push(item);
      item = $(element).find("div.filtercpt__content").text();
      desc.push(item);
    } 
  });

  // Création en bdd des revues (sans les doublons pour optimiser le nb de requete)
  const revuesSansDoublon = revues.filter(function(ele , pos) {
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
        editeur: 1,
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
    const response = await axios.get(`${process.env.URL_API}/getRevueIdbyName/${revueName[i]}`);
    
    await axios.post(`${process.env.URL_API}/createCall`,{
      title: title[i],
      revue: response.data,
      deadline: "Date not found",
      desc: desc[i],
      url: url[i]
    });
  }

};

module.exports = getResultsTaylorFrancis;