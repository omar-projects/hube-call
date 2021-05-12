const cheerio = require("cheerio");
const axios = require("axios");
const enregistrementRevues = require('./enregistrements');
const enregistrementCalls = require('./enregistrements');
const getDate = require('./service');

let link = "https://authorservices.taylorandfrancis.com/call-for-papers/";

const title = new Array();
const url = new Array();
const desc = new Array();
const deadlines = new Array();
const revues = new Array();

const fetchData = async () => {
  const result = await axios.get(link);
  return cheerio.load(result.data);
};

/**
 * Méthode réalisant le scrapping pour le site de l'éditeur Taylor & Francis 
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
      revues.push(item);
      item = $(element).find("span.article-header-subtitle").text();
      title.push(item);
      item = $(element).find("a").attr("href");
      url.push(item);
      item = $(element).find("div.filtercpt__content").text();
      desc.push(item);
    } 
  });

  // Recherche la deadline selon l'url des call for paper récupérée plus tôt
  url.forEach(async function(path) {
    link = path;
    const $ = await fetchData();
    $('div .deadline__title').each(async function(index,elem) {
      let item = $(elem).find("strong").text();
      deadlines.push(getDate(3, item));
    });
  });

  // On enregistre les revues 
  enregistrementRevues(3, revues);

  // On enregistre les calls
  enregistrementCalls(title, url, deadlines, desc, revues);

};

module.exports = getResultsTaylorFrancis;