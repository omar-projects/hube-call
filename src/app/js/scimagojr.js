const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const axios = require("axios");

const url = 'https://www.scimagojr.com/';

const fetchData = async (url) => {
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

const getURLScimago = async (keyword) => {
  let path = "no path";

  const browser = await puppeteer.launch({ 
    args: ['--no-sandbox'] 
  });

  try {
    const page = await browser.newPage();
    await page.goto(url);
    await page.type('input#searchinput', keyword);

    await Promise.all([
      page.waitForNavigation(),
      page.keyboard.press('Enter')
    ]);
    if(await page.$('a > span.jrnlname') !== null) {

      await Promise.all([
        page.waitForNavigation(),
        page.click('a > span.jrnlname')
      ]);
      
      path = page.url();
    }
  } catch (e) {
    console.log("[Recuperation de l'url] " + e);
    return path;
  }

  await browser.close();
  return path;
}

// Web scrapping dynamique en utilisant Puppeteer, simule la navigation sur le site en renseignant le nom de la revue dans le champ pour récupérer le widget
const getSjrWidget = async (url) => {
  const $ = await fetchData(url);
  return $("#embed_code").val();
}

/**
 * Méthode de récupération des sous catégorie dans la page de scimago concernant la revue 
 */
const getIDSousCategorie = async (url) => {
  let sousCategories = "";
  const regExBusiness = "journalrank.php?category=14";
  const $ = await fetchData(url);
  const response = await axios.get(`${process.env.URL_API}/getSousCategorie/`);
  // String pour les element de la liste correspondant au milieu du business
  $(".treecategory").each( (index, element) => {
    let item = $(element).find("a").attr("href");
    if(item.includes(regExBusiness)){
      $(element).find("a").each((i, sousElem) => {
        let categ = $(sousElem).text();
        // appel au service de récupération de l'id de la catégorie courante (match selon le nom de la catégorie)
        response.data.forEach(elem => {
          if(elem.name.match(categ)){
            sousCategories += ";"+elem.id+";";
          }
        });
      });
    }
  }); 
  console.log(sousCategories);
  return sousCategories;
}

module.exports = {
  getURLScimago,
  getSjrWidget,
  getIDSousCategorie
}


