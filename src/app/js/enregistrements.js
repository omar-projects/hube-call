const cheerio = require("cheerio");
const axios = require("axios");
const getRankOfReviewCNRS = require("./cnrs");
const getRankOfReviewFNEGE = require("./fnege");
const getRankOfReviewHCERES = require("./hceres");
const getOpenAccess = require('./openaccess');
const getSjrWidget = require('./sjrWidget');

/**
 * Méthode d'enregistrement des revues - prend un tableau de revues et un editeur en paramètre
 */
const enregistrementRevues = async (editeur ,revues) => {
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
                editeur: editeur,
                name: revuesSansDoublon[i],
                rankFNEGE: rankFNEGE,
                rankHCERES: rankHCERES,
                rankCNRS: rankCNRS,
                isOpenAccess: isOpenAccess,
                sjr: sjr
            });
        }
    }
};

module.exports = enregistrementRevues;

/**
 * Méthode d'enregistrement des calls - prend des tableaux d'infos sur les calls et la revue en lien
 */
const enregistrementCalls = async (title, url, deadlines, desc, revues) => {
    // Création en bdd des calls
    for(var i = 0 ; i < title.length ; i++) {
        const response = await axios.get(`${process.env.URL_API}/getRevueIdbyName/${revues[i]}`);
        var date_soumission = deadlines[i];
        console.log(date_soumission);
        await axios.post(`${process.env.URL_API}/createCall`,{
            title: title[i],
            revue: response.data,
            deadline: date_soumission,
            desc: desc[i],
            url: url[i]
        });
    }
};

module.exports = enregistrementCalls;
