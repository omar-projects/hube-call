const cheerio = require("cheerio");
const axios = require("axios");
const enregistrementRevues = require('./enregistrements');
const enregistrementCalls = require('./enregistrements');

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
  
  // On enregistre les revues 
  enregistrementRevues(2, revues);

  // On enregistre les calls
  enregistrementCalls(title, url, deadline, desc, revues);

};

module.exports = getResultsElsevier;