const cheerio = require("cheerio");
const axios = require("axios");
require('dotenv').config();
const getRankOfReviewCNRS = require("./cnrs");
const getRankOfReviewFNEGE = require("./fnege");
const getRankOfReviewHCERES = require("./hceres");
const getOpenAccess = require('./openaccess');
const getSjrWidget = require('./sjrWidget');

let siteUrl = [
  "https://www.emeraldgrouppublishing.com/services/authors/calls-for-papers?field_journal_category_target_id=40162",
  "https://www.emeraldgrouppublishing.com/services/authors/calls-for-papers?field_journal_category_target_id=40164",
  "https://www.emeraldgrouppublishing.com/services/authors/calls-for-papers?field_journal_category_target_id=40172",
  "https://www.emeraldgrouppublishing.com/services/authors/calls-for-papers?field_journal_category_target_id=40174",
  "https://www.emeraldgrouppublishing.com/services/authors/calls-for-papers?field_journal_category_target_id=40180",
  "https://www.emeraldgrouppublishing.com/services/authors/calls-for-papers?field_journal_category_target_id=40182",
  "https://www.emeraldgrouppublishing.com/services/authors/calls-for-papers?field_journal_category_target_id=40187"
]

const regexDate = /(?:\d{1,2}[-/th|st|nd|rd\s]*)?(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)?[a-z\s,.]*(?:\d{1,2}[-/th|st|nd|rd)\s,]*)+(?:\d{2,4})+/g


const title = new Array();
const url = new Array();
const deadlines = new Array();
const revues = new Array();
const desc = new Array();

const fetchData = async (url) => {
  const result = await axios.get(url);
  return cheerio.load(result.data);
};


const getResultsEG = async () => {
  for(let itemsite of siteUrl) {
    console.log("Page en cours de scrapping : " + itemsite);

    //Boolean true if this is the last page
    let isLastPage = false;
    //nbActPage for the url when we go on te next page
    let nbActPage = 0;
    while(!isLastPage) {
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
        revues.push($(elem).text().trim());
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

    //Cherche les deadlines dans tous les Calls For Paper
    for(let item of url) {
      const $ = await fetchData(item);
      $('.section > div.section__inner.news-item.wysiwyg.b-single-col__inner').each(async function(i,element){
        let deadline = 'deadline not found';

        // On recupère la balise qui contient le texte 'submission deadline'
        $(element).children().each(async function(i, balise) {
          let texte = $(balise).text();
          let texteAvecDeadline = texte.match(/Submission deadline/i);

          if(texteAvecDeadline) {
            let texteApresSubmissionDeadline = texte.substring(texte.indexOf(texte.match(/Submission deadline/i)), texte.length);

            let dates = texteApresSubmissionDeadline.match(regexDate);

            if(dates != null && dates[0].length > 6 && dates[0].length < 20) {
              deadline = dates[0];
            }
          }
        });

        deadlines.push(deadline);
      });
    }
  }

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

module.exports = getResultsEG;


