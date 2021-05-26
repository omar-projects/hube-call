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

  let result = $("#embed_code").val();

  // On ajoute le target="_blank" dans la balise <a> pour ouvrir dans un nouvel onglet
  // On ajoute une taille à l'image SJR (width="120")
  result = result.replace(' ', ' target=\"_blank\" ');

  let part1 = result.substring(0, result.indexOf("img") + 3);
  let part2 = ' width="120" ';
  let part3 = result.substring(result.indexOf("img") + 3);
  result = part1.concat(part2).concat(part3);

  return result;
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
  return sousCategories;
}

module.exports = {
  getURLScimago,
  getSjrWidget,
  getIDSousCategorie
}