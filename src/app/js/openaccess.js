const puppeteer = require("puppeteer");

const url = 'https://v2.sherpa.ac.uk/romeo/';

// Web scrapping dynamique en utilisant Puppeteer, simule la navigation sur le site en renseignant le nom de la revue dans le champ pour récupérer l'openacess
const getOpenAccess = async keyword => {
    const browser = await puppeteer.launch({
      args: ['--no-sandbox']
    });
    const page = await browser.newPage();
    await page.goto(url);
    await page.type('input#publication_title-auto', keyword);

    try {
      await Promise.all([
        page.waitForNavigation(),
        page.click('input.ep_form_action_button'),
      ]);
    } catch(e) {
      console.log("[Recuperation de l'Open Access] " + e);
      return false;
    }
  
    const result = await page.evaluate(() => {
      var v = document.querySelector("div.ac > p");

      if (v != null) {
        return v.innertText != 'No Open Access is permitted for this version.';
      }
      return false;
    });

    await browser.close();
    return result;
}

module.exports = getOpenAccess;