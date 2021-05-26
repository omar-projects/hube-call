const puppeteer = require("puppeteer");

const url = 'https://www.scimagojr.com/';

// Web scrapping dynamique en utilisant Puppeteer, simule la navigation sur le site en renseignant le nom de la revue dans le champ pour récupérer le widget
const getSjrWidget = async keyword => {
  let result = "unavailable SJR";

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

      result = await page.evaluate(() => {
        return document.getElementById('embed_code').value;
      });
    }
  } catch (e) {
    console.log("[Recuperation du SJR] " + e);
    return result;
  }

  await browser.close();
  // On ajoute le target="_blank" dans la balise <a> pour ouvrir dans un nouvel onglet
  // On ajoute une taille à l'image SJR (width="120")
  if(result.toLowerCase().indexOf('unavailable') === -1) {
    result = result.replace(' ', ' target=\"_blank\" ');

    let part1 = result.substring(0, result.indexOf("img") + 3);
    let part2 = ' width="120" ';
    let part3 = result.substring(result.indexOf("img") + 3);
    result = part1.concat(part2).concat(part3);
  }
  return result;
}

module.exports = getSjrWidget;