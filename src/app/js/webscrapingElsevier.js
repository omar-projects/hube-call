const cheerio = require("cheerio");
const axios = require("axios");
const getRankOfReviewCNRS = require("./cnrs");
const getRankOfReviewFNEGE = require("./fnege");
const getRankOfReviewHCERES = require("./hceres");
const getOpenAccess = require('./openaccess');
const getSjrWidget = require('./sjrWidget');

let tabUrl = ["https://www.journals.elsevier.com/telecommunications-policy/call-for-papers", "https://www.journals.elsevier.com/european-management-journal/call-for-papers"];
let link = "";

const title = new Array();
const url = new Array();
const desc = new Array();
const deadline = new Array();
const revueName = new Array();

const fetchData = async () => {
  const result = await axios.get(link);
  return cheerio.load(result.data);
};

const getResultsElsevier = async () => {
  
  for(let i = 0 ; i < tabUrl.length ; i++) {
    link = tabUrl[i];
    const $ = await fetchData();

    $("div.pod-listing").each((index, element) => {
      let t = $(element).find("a").attr("title");
      title.push(t);
      t = $(element).find("a").attr("href");
      url.push(t);
      t = $("div.large-12 > h2").text();
      revueName.push(t);
      t = $(element).find("div.article-content > p").text();
      desc.push(t);
    });
    
  }

  for(var i = 0 ; i < title.length ; i++) {
    link = url[i];
    const $ = await fetchData();
    $('div.article-content').each(function(i,elem) {
      let s = $(elem).text().trim();
      if(s.search("Paper submission:") > 0) {
        let index = s.search("Paper submission:");
        let limit = s.substring(index+18, index+33).trim();
        deadline.push(limit);
      } else if(s.search("Submission guidelines deadline:") > 0) {
        let index = s.search("Submission guidelines deadline:");
        let limit = s.substring(index+32, index+46).trim();
        deadline.push(limit);
      } else {
        let limit = "undefined";
        deadline.push(limit);
      }
    });
  }
  
  // Création en bdd des revues
  for(var i = 0 ; i < revueName.length ; i++) {
    const rankCNRS = await getRankOfReviewCNRS(revueName[i]);
    const rankHCERES = await getRankOfReviewHCERES(revueName[i]);
    const rankFNEGE = await getRankOfReviewFNEGE(revueName[i]);
    const isOpenAccess = await getOpenAccess(revueName[i]);
    const sjr = await getSjrWidget(revueName[i]);
    await axios.post(`${process.env.URL_API}/createRevue`,{
      editeur: 2,
      name: revueName[i],
      rankFNEGE: rankFNEGE,
      rankHCERES: rankHCERES,
      rankCNRS: rankCNRS,
      isOpenAccess: isOpenAccess,
      sjr: sjr
    });
  }

  // Création en bdd des calls
  for(var i = 0 ; i < title.length ; i++) {
    const response = await axios.get(`${process.env.URL_API}/getRevueIdbyName/${revueName[i]}`);
    
    await axios.post(`${process.env.URL_API}/createCall`,{
      title: title[i],
      revue: response.data,
      deadline: deadline[i],
      desc: desc[i],
      url: url[i]
    });
  }
};

module.exports = getResultsElsevier;