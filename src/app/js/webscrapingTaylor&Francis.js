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
const contenus = new Array();

const fetchData = async (url) => {
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

/**
 * Méthode réalisant le scrapping pour le site de l'éditeur Taylor & Francis 
 */
const getResultsTaylorFrancis = async () => {
  await console.log("=============== TAYLOR FRANCIS ===================");
  await console.log("Scrapping :");

  await console.log(urlTaylorFrancis);

  const regExManagement = new RegExp("\d\*,\?1694,\d\*,\?");
  const regExTourism = new RegExp("\d\*,\?1715,\d\*,\?");
  const $ = await fetchData(urlTaylorFrancis);
  
  // On parcours tous les div concernant les call for papers
  $("div .filtercpt__article").each((index, element) => {
    let sujet = $(element).attr('data-subjectareas');
    // On restreind au call for paper concernant le management 
    if(sujet.match(regExManagement) || sujet.match(regExTourism)){
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
  for(var i = 0 ; i < url.length ; i++) {
    let path = url[i];
    const $ = await fetchData(path);

    let content = $('div.panel-layout > div:nth-child(4)').text().trim().replace(/[\s]{2,}/g," ");
    contenus.push(content);

    $('div .deadline__title > h4 > span > strong').each(function(index, elem) {
      const deadline = $(elem).text();
      deadlines.push(deadline);
      return false; // equivalent de break;
    });
  }
  
  await console.log("Enregistrement des nouvelles revues et/ou des nouveaux Call For Paper : ");
  // On enregistre les revues et les calls
  await insertRevuesAndCalls(3, revues, title, url, deadlines, desc, contenus);
};
module.exports = getResultsTaylorFrancis;