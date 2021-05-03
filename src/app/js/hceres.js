const https = require('https');
const fs = require('fs');
const pdf = require('pdf-parse');

var pdfUrl = "./src/app/js/pdf/hceres.pdf";

// Méthode pour DL le pdf en local, mis en commentaire pour éviter de le DL à chaque fois

// const file = fs.createWriteStream("./src/app/js/hceres.pdf");
// const request = https.get("https://www.hceres.fr/sites/default/files/media/downloads/2019%20Liste%20HCERES%20domaine%20SHS1%20ECONOMIE%20et%20GESTION.pdf", function(response) {
//   response.pipe(file);
// });

let dataBuffer = fs.readFileSync(pdfUrl);

const getRankOfReviewHCERES = (review) => {
    return pdf(dataBuffer).then(function(data) {
        let textToScrap = data.text;

        // On split le textToScrap pour obtenir la ligne de la revue concernée
        index = textToScrap.indexOf(review);
        let newTextToScrap = textToScrap.substring(index);

        // On split chaque ligne du pdf pour en ressortir la ligne contenant le rank
        let s = newTextToScrap.split('\n');

        // On split s de façon à obtenir le rank
        let rank = s[0].substring(s[0].length-2);
        
        return rank;
    });
}

module.exports = getRankOfReviewHCERES;
