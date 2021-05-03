const https = require('https');
const fs = require('fs');
const pdf = require('pdf-parse');

var pdfUrl = "./src/app/js/pdf/cnrs.pdf";

// Méthode pour DL le pdf en local, mis en commentaire pour éviter de le DL à chaque fois

// const file = fs.createWriteStream("./src/app/js/cnrs/2019.pdf");
// const request = https.get("https://www.gate.cnrs.fr/IMG/pdf/categorisation37_liste_juin_2019-3.pdf", function(response) {
//   response.pipe(file);
// });

let dataBuffer = fs.readFileSync(pdfUrl);

const getRankOfReviewCNRS = (review) => {
    return pdf(dataBuffer).then(function(data) {
        // On coupe le pdf pour en ressortir que la liste par ordre alphabétique
        let index = data.text.indexOf("Liste Juin 2019 alphabétique");
        let textToScrap = data.text.substring(index);

        // On split le textToScrap pour obtenir la ligne de la revue concernée
        index = textToScrap.indexOf(review);
        let newTextToScrap = textToScrap.substring(index);

        // On split chaque ligne du pdf pour en ressortir la ligne contenant le rank
        let s = newTextToScrap.split('\n');

        let compt = 1;
        let rank = s[1].substring(s[1].length-compt);
        if(rank.match(/\d/g) != null){
            return rank;
        }
        //S'il n'y a pas la revue dans le classement
        if(rank == 'm'){
                return null;
        }
        while(compt < s[1].substring(s[1].length)){ 
            compt++; 
            rank = s[1].substring(s[1].length-compt);
            if(rank.match(/\d/g) != null){
                return rank;
            }   
        }
    });
}


module.exports = getRankOfReviewCNRS;