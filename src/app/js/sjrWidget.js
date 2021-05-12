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
  return result;
}

module.exports = getSjrWidget;