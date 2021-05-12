/**
 * Permet de recupéré une date conforme pour l'insertion de la deadline en base 
 * @param {Numéro de l'editeur en base} editeur 
 * @param {Deadline en cours de récupération} deadline 
 * @returns 
 */
const getDate = function (editeur, deadline) {
    var ddate = new String('');
    const formatDateTF = new RegExp("\d\*\s\?\w\*\s\?\d\*");
    switch(editeur){
        case 1 :
            break;
        case 2 :
            break;
        case 3 : // Editeur Taylor & Francis 
            if(deadline.match(formatDateTF)){
                let tdeadline = deadline.split(" ");
                let month = getMonth(tdeadline[1]);
                ddate = tdeadline[2]+"-"+month+"-"+tdeadline[0];
            }
            console.log(ddate);
            return ddate; 
            break;
        default :
            return null;
    }
};

module.exports = getDate;

/**
 * Retourne le numéro de mois selon son nom (en Anglais)
 * @param {Mois sous forme de String} month 
 * @returns 
 */
const getMonth = function(month) {
    switch(month){
        case "January" : 
            return '01';
            break;
        case "February" :
            return '02';
            break;
        case "March" :
            return '03';
            break;
        case "April" :
            return '04';
            break;
        case "May" :
            return '05';
            break;
        case "June" :
            return '06';
            break;
        case "July" :
            return '07';
            break;
        case "August" :
            return '08';
            break;
        case "September" :
            return '09';
            break;
        case "October" :
            return '10';
            break;
        case "November" :
            return '11';
            break;
        case "December" :
            return '12';
            break;
        default : 
            Error("GetMonth - Mois non pris en compte");

    }
};