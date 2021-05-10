const axios = require('axios');

const getOpenAccess = require('./openaccess');

// Script de maj des Open Access pour chaque revue
const updateJournals = async () => {
    let listJournal;
    await axios.get(`${process.env.URL_API}/getRevue`).then((response) => {
        listJournal = response.data; 
    });

    for(var i = 0 ; i < listJournal.length ; i++) {
        let temp = await getOpenAccess(listJournal[i].name);
        axios.put(`${process.env.URL_API}/updateOARevue`, {
            isOpenAccess: temp,
            id: listJournal[i].id
        });
    }
}

module.exports = updateJournals;