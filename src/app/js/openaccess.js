const puppeteer = require("puppeteer");
const url = 'https://v2.sherpa.ac.uk/romeo/';

// Web scrapping dynamique en utilisant Puppeteer, simule la navigation sur le site en renseignant le nom de la revue dans le champ pour récupérer l'openacess
const getOpenAccess = async keyword => {
    const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.goto(url);
    await page.type('input#publication_title-auto', keyword);
    await page.click('input.ep_form_action_button')
    await page.waitFor(1000)
    const result = await page.evaluate(() => {
      if(document.querySelector("div#ep_publisher_policy_tabs_panel_1 > p") != null) {
        let openAccessText = document.querySelector("div#ep_publisher_policy_tabs_panel_1 > p").innerText;
        if(openAccessText != 'No Open Access is permitted for this version.')
          return true;
        else
          return false;
      }
      else {
        return false;
      }
    });
    await browser.close();
    return result;
}

module.exports = getOpenAccess;