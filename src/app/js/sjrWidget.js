const puppeteer = require("puppeteer");
const url = 'https://www.scimagojr.com/';

// Web scrapping dynamique en utilisant Puppeteer, simule la navigation sur le site en renseignant le nom de la revue dans le champ pour récupérer le widget
const getSjrWidget = async keyword => {
  let result = "unavailable SJR";
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto(url);
  await page.type('input#searchinput', keyword);
  await page.waitFor(1000)
  await page.keyboard.press('Enter')
  await page.waitFor(5000)
  if(await page.$('a > span.jrnlname') !== null) {
    await page.click('a > span.jrnlname')
    await page.waitFor(1000)
    result = await page.evaluate(() => {
      return document.getElementById('embed_code').value;
    });
  }
  
  await browser.close();
  return result;
}

// getSjrWidget('Telecommunications Policy').then(data => console.log(data));

module.exports = getSjrWidget;