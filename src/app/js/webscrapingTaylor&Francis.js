const cheerio = require("cheerio");
const axios = require("axios");
const insertRevuesAndCalls = require('./enregistrements');
const getDate = require('./service');

let urlTaylorFrancis = "https://authorservices.taylorandfrancis.com/call-for-papers/";

const title = new Array();
const url = new Array();
const desc = new Array();
const deadlines = new Array();
const revues = new Array();

const fetchData = async (url) => {
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

/**
 * Méthode réalisant le scrapping pour le site de l'éditeur Taylor & Francis 
 */
const getResultsTaylorFrancis = async () => {
  
  const regExManagement = new RegExp("\d\*,\?1694,\d\*,\?");
  const regExTourism = new RegExp("\d\*,\?1715,\d\*,\?");
  const $ = await fetchData(urlTaylorFrancis);
  
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
  for(var i = 0 ; i < url.length ; i++){
    let path = url[i];
    const manageUrlCall = await fetchData(path);
    manageUrlCall('div .deadline__title').each(async function(index,elem) {
      let item = $(elem).find("strong").text();
      if(getDate(item) === null){
        deadlines.splice(url.indexOf(path), 0, undefined);
      } else {
        deadlines.splice(url.indexOf(path), 0, getDate(item));
      }
    });
  }
  console.log("Lancement de l'enregistrement des revues");
  
  // On enregistre les revues et les calls
  await insertRevuesAndCalls(3, revues, title, url, deadlines, desc);

};
module.exports = getResultsTaylorFrancis;