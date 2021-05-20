const cheerio = require("cheerio");
const axios = require("axios");
const insertRevuesAndCalls = require('./enregistrements');
const getDate = require('./service');

let tabUrl = [
  "https://www.journals.elsevier.com/telecommunications-policy/call-for-papers", 
  "https://www.journals.elsevier.com/european-management-journal/call-for-papers"
];

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

const getResultsElsevier = async () => {
  await console.log("=============== ELSEVIER ===================");
  await console.log("Scrapping :");

  for(let i = 0 ; i < tabUrl.length ; i++) {
    await console.log(tabUrl[i]);

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

    $('div#Content1').each(function(i, elem) {
      let content = $(elem).text().trim().replace(/[\s]{2,}/g," ");
      contenus.push(content);
    });

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
      // Gestion de la récupération sous un bon format de la date de soumission
      let dateDeadline = getDate(limit)
      if(dateDeadline != null){
        deadlines.push(dateDeadline);
      } else {
        deadlines.push(undefined)
      }
    });
  }

  await console.log("Enregistrement des nouvelles revues et/ou des nouveaux Call For Paper : ");
  // On enregistre les revues et les calls
  await insertRevuesAndCalls(2, revues, title, url, deadlines, desc, contenus);
};

module.exports = getResultsElsevier;