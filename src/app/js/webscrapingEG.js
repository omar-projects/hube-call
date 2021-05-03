const cheerio = require("cheerio");
const axios = require("axios");
require('dotenv').config();
const getRankOfReviewCNRS = require("./cnrs");
const getRankOfReviewFNEGE = require("./fnege");
const getRankOfReviewHCERES = require("./hceres");
const getOpenAccess = require('./openaccess');
const getSjrWidget = require('./sjrWidget');

let siteUrl = ["https://www.emeraldgrouppublishing.com/services/authors/calls-for-papers?field_journal_category_target_id=40162",
"https://www.emeraldgrouppublishing.com/services/authors/calls-for-papers?field_journal_category_target_id=40164",
"https://www.emeraldgrouppublishing.com/services/authors/calls-for-papers?field_journal_category_target_id=40172",
"https://www.emeraldgrouppublishing.com/services/authors/calls-for-papers?field_journal_category_target_id=40174",
"https://www.emeraldgrouppublishing.com/services/authors/calls-for-papers?field_journal_category_target_id=40180",
"https://www.emeraldgrouppublishing.com/services/authors/calls-for-papers?field_journal_category_target_id=40182",
"https://www.emeraldgrouppublishing.com/services/authors/calls-for-papers?field_journal_category_target_id=40187"
]

const title = new Array();
const url = new Array();
const deadlineTemp = new Array();
const deadlineFinal = new Array();
const revueName = new Array();
const desc = new Array();

const fetchData = async (Url) => {
  const result = await axios.get(Url);
  return cheerio.load(result.data);
};


const getResultsEG = async () => {
  for(let itemsite of siteUrl){
    //Boolean true if this is the last page
    let isLastPage = false;
    //nbActPage for the url when we go on te next page
    let nbActPage = 0;
    while(!isLastPage){
      let $ = await fetchData(itemsite);
      isLastPage = true;
      //Récupérer tous les titres de la page
      $('.news-grid__card-title').each(function(i,elem) {
        title.push($(elem).text().trim());
      });
      //Récupérer toutes les url de la page
      $('.news-grid__cards > a').each(function(i,elem) {
        url.push('https://www.emeraldgrouppublishing.com'+$(elem).attr('href').trim());
      });
      //Récupérer toutes les revues de la page
      $('.news-grid__card-reference').each(function(i,elem) {
        revueName.push($(elem).text().trim());
      });

      //Récupérer toutes les descriptions de la page
      $('.news-grid__card-content').each(function(i,elem) {
        desc.push($(elem).text().trim());
      });

      

      $('.pager__item--next').each(function(i,elem) {
        isLastPage = false;
        nbActPage ++;
        itemsite = itemsite+"&page="+nbActPage;
      }); 
    }

    
    //Va chercher les deadlines dans tous les call
    for(let item of url) {
      const $ = await fetchData(item);
      $('.section > div.section__inner.news-item.wysiwyg.b-single-col__inner').each(async function(i,elem){
        let s = $(elem).text().trim();
        if(s.match(/Submission deadline:/i)){
          let index = s.match(/Submission deadline:/i);
          let limit = s.substring(index.index+21, index.index+40).trim();
          //console.log(limit);
          deadlineTemp.push(limit);
        }
        else {
          let limit = "undefined";
          deadlineTemp.push(limit);
        }
      });
    }
    
    //Met les deadlines au bon format
    var currentTime = new Date();
    for(let item of deadlineTemp) {
      let year = currentTime.getFullYear();
      let month = "00";
      let day = "01";
      //Si nous n'avons pas trouver de deadline
      if(item.match('undefined')){
        deadlineFinal.push(item);
      }
      //Si le format est au format DD/MM/AAAA
      else if (item.match('[0-3][0-9]/[0-1][0-9]/20[0-9][0-9]')){
        let index = item.match('[0-3][0-9]/[0-1][0-9]/20[0-9][0-9]');
        day = item.substring(index.index,index.index+2);
        month = item.substring(index.index+3,index.index+5);
        year = item.substring(index.index+6,index.index+10);
        deadlineFinal.push(day+"/"+month+"/"+year);
      }
      else{
        //Si on trouve une année au format AAAA
        if(item.match('[0-9]{4}')){
          year = item.match('[0-9]{4}');
          item = item.replace(year,'');
        }
        //Si on trouve un jour au format DD
        if(item.match('[0-3][0-9]')){
          day = item.match('[0-3][0-9]');
        }
        else if(item.match('[1-9]')){
          day = "0"+item.match('[1-9]');
        }
        //Si on trouve l'un des mois
        if(item.match('January') || item.match('Jan')){
          month = "01"
        }
        else if(item.match('February') || item.match('Feb')){
          month = "02";
        }
        else if(item.match('March') || item.match('Mar')){
          month = "03";
        }
        else if(item.match('April') || item.match('Apr')){
          month = "04";
        }
        else if(item.match('May')){
          month = "05";
        }
        else if(item.match('June') || item.match('Jun')){
          month = "06";
        }
        else if(item.match('July') || item.match('Jul')){
          month = "07";
        }
        else if(item.match('August') || item.match('Aug')){
          month = "08";
        }
        else if(item.match('September') || item.match('Sep')){
          month = "09";
        }
        else if(item.match('October') || item.match('Oct')){
          month = "10";
        }
        else if(item.match('November') || item.match('Nov')){
          month = "11";
        }
        else if(item.match('December') || item.match('Dec')){
          month = "12";
        }
        deadlineFinal.push(day+"/"+month+"/"+year);
      }
    }
    
  }
  for(var i = 0 ; i < revueName.length ; i++) {
    const rankCNRS = await getRankOfReviewCNRS(revueName[i]);
    const rankHCERES = await getRankOfReviewHCERES(revueName[i]);
    const rankFNEGE = await getRankOfReviewFNEGE(revueName[i]);
    const isOpenAccess = await getOpenAccess(revueName[i]);
    const sjr = await getSjrWidget(revueName[i]);

    await axios.post(`${process.env.URL_API}/createRevue`,{
      editeur: 1,
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
      deadline: deadlineFinal[i],
      desc: desc[i],
      url: url[i]
    });
  }
  
};

module.exports = getResultsEG;


