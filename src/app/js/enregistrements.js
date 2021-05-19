const axios = require("axios");
const moment = require('moment');
const getRankOfReviewCNRS = require("./cnrs");
const getRankOfReviewFNEGE = require("./fnege");
const getRankOfReviewHCERES = require("./hceres");
const getOpenAccess = require('./openaccess');
const getSjrWidget = require('./sjrWidget');


/**
 * Méthode d'enregistrement des revues et des calls 
 * @param {Numéro de l'éditeur des revues} editeur 
 * @param {Titres des calls} title 
 * @param {urls des calls } url 
 * @param {deadlines des calls} deadlines 
 * @param {descriptions des calls} desc 
 * @param {Les revues trouvées par le scrapping} revues 
 */
const insertRevuesAndCalls = async (numEditeur, revues, title, url, deadlines, desc) => {
    // Création en bdd des revues (sans les doublons pour optimiser le nb de requete)
    const revuesSansDoublon = revues.filter(function(ele , pos) {
        return revues.indexOf(ele) == pos;
    });

    for(var i = 0 ; i < revuesSansDoublon.length ; i++) { 
        const response = await axios.get(`${process.env.URL_API}/getRevueIdbyName/${revuesSansDoublon[i]}`);
        
        // Si la revue n'est pas trouvée, on l'ajoute
        if(response.data == "Not found") {
            await console.log("Création de la revue : " + revuesSansDoublon[i]);

            const rankCNRS = await getRankOfReviewCNRS(revuesSansDoublon[i]);
            const rankHCERES = await getRankOfReviewHCERES(revuesSansDoublon[i]);
            const rankFNEGE = await getRankOfReviewFNEGE(revuesSansDoublon[i]);
            const isOpenAccess = await getOpenAccess(revuesSansDoublon[i]);
            const sjr = await getSjrWidget(revuesSansDoublon[i]);

            await axios.post(`${process.env.URL_API}/createRevue`,{
                editeur: numEditeur,
                name: revuesSansDoublon[i],
                rankFNEGE: rankFNEGE,
                rankHCERES: rankHCERES,
                rankCNRS: rankCNRS,
                isOpenAccess: isOpenAccess,
                sjr: sjr
            });
        }
    }
    
    // Création en bdd des calls
    for(var i = 0 ; i < title.length ; i++) {
        // encodage avec la fonction encodeURI puis manuellement pour le ? et le / et le & qui sont des caractère spéciaux dans les url
        var encodeTitle = encodeURI(title[i])
            .replace("?", "POINT_INTERROGATION")
            .replace("&", "ESPERLUETTE")
            .replace("/", "SLASH");
        const alreadyExist = await axios.get(`${process.env.URL_API}/getCallbyTitle/${encodeTitle}`);

        // On vérifie que le call n'existe pas déjà en base 
        if(alreadyExist.data === "Not found") {
            await console.log("Création du Call For Paper : " + title[i]);

            // encodage avec la fonction encodeURI puis manuellement pour le ? et le / et le & qui sont des caractère spéciaux dans les url
            var encodeRevueName = encodeURI(revues[i])
                .replace("?", "POINT_INTERROGATION")
                .replace("&", "ESPERLUETTE")
                .replace("/", "SLASH");
            const response = await axios.get(`${process.env.URL_API}/getRevueIdbyName/${encodeRevueName}`);

            if(response.data !== "Not found") {
                await axios.post(`${process.env.URL_API}/createCall`,{
                    title: title[i],
                    revue: response.data,
                    deadline: deadlines[i],
                    desc: desc[i],
                    url: url[i]
                });
            } else {
                await console.log("[ERROR] Revue non trouvée : " + revues[i]);
            }
        } else { // Si il existe déjà en base on se charge de vérifier si la date de soumission a changée et on la met à jour 
            const ddBase = await axios.get(`${process.env.URL_API}/getDeadlineCallbyId/${alreadyExist.data}`);
            var currDeadline = moment(new Date(deadlines[i]));
            var baseDeadline = moment(new Date(ddBase.data));

            // Si la deadline a changée, on met à jour le call
            if( currDeadline.format('YYYY-MM-DD') !== baseDeadline.format('YYYY-MM-DD')){
                await console.log("Mise à jour de la deadline du Call For Paper : " + title[i]);

                await axios.put(`${process.env.URL_API}/updateDeadlineById`,{
                    id: alreadyExist.data,
                    newDate: currDeadline.format('YYYY-MM-DD')
                });
            }
        }
    }
};

module.exports = insertRevuesAndCalls;