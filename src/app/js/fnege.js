const http = require('http');
const fs = require('fs');
const pdf = require('pdf-parse');

var pdfUrl = "./src/app/js/pdf/fnege.pdf";

// Méthode pour DL le pdf en local, mis en commentaire pour éviter de le DL à chaque fois

// const file = fs.createWriteStream("./src/app/js/fnege.pdf");
// const request = http.get("http://www.coactis.org/sites/coactis.org/files/fichiers_joints/FNEGE_classement-revues-2019-v2.pdf", function(response) {
//   response.pipe(file);
// });

let dataBuffer = fs.readFileSync(pdfUrl);

const getRankOfReviewFNEGE = (review) => {
    return pdf(dataBuffer).then(function(data) {
        let textToScrap = data.text;
        const spaceregex = / /g;
        // On split le textToScrap pour obtenir la ligne de la revue concernée
        //On ajoute la possibilité d'un retour à la ligne entre chaque espace du nom
        let newReview = review.replace(spaceregex," [\\n]?");
        //console.log(newReview);
        index = textToScrap.search(newReview);
        //console.log(index);
        let newTextToScrap = textToScrap.substring(index);

        // On split chaque ligne du pdf pour en ressortir la ligne contenant le rank
        let s = newTextToScrap.split('\n');
        //console.log(s);

        let rank = '';
        let compt = 0;
        let hasNumber = false;
        let number = new Array ();
        // On vérifie s'il y a bien le rank sur la ligne, sinon on regarde la prochaine ligne
        while(!hasNumber){
            rank = s[compt];
            if(rank.match(/\d/g) != null){
                number = rank.match(/\d/g);
                //console.log(number);
                hasNumber = true;
            }
            compt++;
        }
        
        rank = number[number.length-1];

        if(rank == 9){
	    rank = null;
	}
	return rank;
    });
}

module.exports = getRankOfReviewFNEGE;
