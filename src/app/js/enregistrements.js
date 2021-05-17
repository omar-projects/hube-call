const axios = require("axios");
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
            console.log(" -> création de la revue : " + revuesSansDoublon[i]);

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
    console.log("----------Insert Calls---------")
    // Création en bdd des calls
    for(var i = 0 ; i < title.length ; i++) {
        var encodeTitle = encodeURI(title[i]);
        const alreadyExist = await axios.get(`${process.env.URL_API}/getCallbyTitle?title=${encodeTitle}`);
        const response = await axios.get(`${process.env.URL_API}/getRevueIdbyName/${revues[i]}`);

        if(alreadyExist.data == "Not found") {
            await axios.post(`${process.env.URL_API}/createCall`,{
                title: title[i],
                revue: response.data,
                deadline: deadlines[i],
                desc: desc[i],
                url: url[i]
            });
        } else {
            const ddBase = await axios.get(`${process.env.URL_API}/getDeadlineCallbyId/${alreadyExist.data}`);
            var currDeadline = new Date(deadlines[i]);
            var baseDeadline = new Date(ddBase.data);
            console.log(alreadyExist.data+" - "+title[i]+"             :             "+currDeadline+"      =     "+baseDeadline)
            if( currDeadline.getTime() === baseDeadline.getTime()){
                console.log("Same date")
            }
        }
        
    }
};

module.exports = insertRevuesAndCalls;