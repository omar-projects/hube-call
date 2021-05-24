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
const insertRevuesAndCalls = async (numEditeur, revues, title, url, deadlines, desc, contenus) => {
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
        var encodeTitle = encodeURIComponent(title[i]);
        const alreadyExist = await axios.get(`${process.env.URL_API}/getCallbyTitle/${encodeTitle}`);

        // On vérifie que le call n'existe pas déjà en base
        if(alreadyExist.data === "Not found") {
            await console.log("Création du Call For Paper : " + title[i]);

            var encodeRevueName = encodeURIComponent(revues[i]);
            const response = await axios.get(`${process.env.URL_API}/getRevueIdbyName/${encodeRevueName}`);

            if(response.data !== "Not found") {
                await rechercheEtEnregistrementMotCles(title[i], contenus[i]);

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

const rechercheEtEnregistrementMotCles = async (title, contenu) => {
    await console.log("Recherche des mots clés...");
    const response = await axios.post(`${process.env.URL_API}/advanced-search`,{
        text: contenu
    });

    await console.log("Enregistrement des mots clés...");
    await insertMotCles(title, response.data);
};

const insertMotCles = async (title, motCles) => {
    // Parcours des mot clés retournés
    Object.keys(motCles).forEach(async function(terme) {
        var encodeTerme = encodeURIComponent(terme);
        const response = await axios.get(`${process.env.URL_API}/keywords/${encodeTerme}`);

        // Si le terme, n'existe pas on l'ajoute dans la table
        if(response.data === "Not found") {
            await console.log("création du mot clé : " + terme);
            // Création de l'objet qui contient le call et la fréqeunce d'apparition (tf) du terme dans ce call
            const call = {};
            call[title] = motCles[terme];

            await axios.post(`${process.env.URL_API}/create/keyword`,{
                terme: terme,
                calls: JSON.stringify(call)
            });
        } else {
            // Si le terme existe déjà, on récupère le JSON des calls for paper (et des tf) qui lui sont associés
            var calls = JSON.parse(response.data.calls);

            // On recherche si le call n'est pas déjà présent
            const callEstDejaPresent = Object.keys(calls).includes(title);

            // Si le call n'est pas présent, on l'ajoute à l'objet et on fait un update
            if(!callEstDejaPresent) {
                await console.log("mise à jour du mot clé : " + terme);

                calls[title] = motCles[terme];

                // Ensuite, on met à jour
                await axios.put(`${process.env.URL_API}/keywords/${encodeTerme}/update`,{
                    calls: JSON.parse(JSON.stringify(calls))
                });
            }
        }
    });

};

module.exports = insertRevuesAndCalls;
