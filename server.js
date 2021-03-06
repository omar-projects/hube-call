//Install express server
require('dotenv').config();
const express = require('express');
const path = require('path');
const { Pool } = require("pg");
const bodyParser = require('body-parser');
const schedule = require('node-schedule');
const getResultsEG = require('./src/app/js/webscrapingEG');
const getResultsElsevier = require('./src/app/js/webscrapingElsevier');
const getResultsTaylorFrancis = require('./src/app/js/webscrapingTaylor&Francis');
const updateJournals = require('./src/app/js/updateJournals');
const axios = require('axios');
const { request } = require('http');


const {spawn} = require('child_process');

const app = express();

const connectionString = process.env.DATABASE_URL;

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/hube-call-app'));

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

const pool = new Pool({
  connectionString: connectionString,
  ssl:false,
});

console.log("Connexion réussie à la base de données !");
//---------- CALLFORPAPERS ----------\\

// Get tous les calls
const getCall = (request, response) => {
  const sql = 'SELECT * FROM "CallForPaper" WHERE deadline >= NOW() OR deadline IS NULL';
  pool.query(sql, (error, results) => {
    parseError(error, sql);
    response.status(200).json(results.rows)
  })
}

//Get un call par Id
const getCallbyId = (request, response) => {
  const id = parseInt(request.params.id);
  const sql = 'SELECT * FROM "CallForPaper" WHERE Id = $1';
  pool.query(sql,[id], (error, results) => {
    parseError(error, sql);
    response.status(200).json(results.rows)
  })
}

//Get deadline d'un call par Id
const getDeadlineCallbyId = (request, response) => {
  const id = parseInt(request.params.id);
  const sql = 'SELECT * FROM "CallForPaper" WHERE Id = $1';
  pool.query(sql,[id], (error, results) => {
    parseError(error, sql);
    response.status(200).send(results.rows[0].deadline)
  })
}

// Le Call existe déjà
const getCallbyTitle = (request, response) => {
  const title = request.params.title;

  const sql = 'SELECT id FROM "CallForPaper" WHERE title = $1';
  pool.query(sql,[title], (error, results) => {
    parseError(error, sql);
    if(results.rows[0]) {
      response.status(200).json(results.rows[0].id);
    } else {
      response.status(200).send("Not found");
    }
  })
}

// Mise à jour de la deadline
const updateDeadlineById = (request, response) => {
  const {id, newDate} = request.body;
  const sql = 'UPDATE "CallForPaper" SET deadline = $2 WHERE Id = $1';
  pool.query(sql,[id, newDate], (error, results) => {
    parseError(error, sql);
    response.status(201).send(`Deadline of Call For Paper - UPDATE`);
  })
}

// Créer un call
const createCall = (request, response) => {
  const {title, revue, deadline, desc, url } = request.body
  const sql = 'INSERT INTO "CallForPaper" VALUES (DEFAULT, $1, $2, $3, $4, $5)';
  pool.query(sql, [title, revue, deadline, desc, url], (error, results) => {
    parseError(error, sql);
    response.status(201).send(`Call For Paper added`)
  })
}

// Renvoie le nombre de call selon la revue
const getNbCallByRevue = (request, response) => {
  const fk_revue = parseInt(request.params.fk_revue);
  const sql = 'SELECT count(*) FROM "CallForPaper" WHERE fk_revue = $1';
  pool.query(sql, [fk_revue], (error, results) => {
    parseError(error, sql);
    response.status(200).send(results.rows[0].count);
  })
}

// Get calls filtrer par rang HCERES
const getCallFilterHCERES = (request, response) => {
  const sql = 'SELECT * FROM "CallForPaper","Revue" r WHERE "fk_revue" = r."id" AND "rankHCERES" != \'\' AND (deadline >= NOW() OR deadline IS NULL) ORDER BY "rankHCERES"';
  pool.query(sql, (error, results) => {
    parseError(error, sql);
    response.status(200).json(results.rows)
  })
}

// Get calls filtrer par rang CNRS
const getCallFilterCNRS = (request, response) => {
  const sql = 'SELECT * FROM "CallForPaper","Revue" r WHERE "fk_revue" = r."id" AND "rankCNRS" != 0 AND (deadline >= NOW() OR deadline IS NULL) ORDER BY "rankCNRS"';
  pool.query(sql, (error, results) => {
    parseError(error, sql);
    response.status(200).json(results.rows)
  })
}

// Get calls filtrer par rang FNEGE
const getCallFilterFNEGE = (request, response) => {
  const sql = 'SELECT * FROM "CallForPaper","Revue" r WHERE "fk_revue" = r."id" AND "rankFNEGE" != 0 AND (deadline >= NOW() OR deadline IS NULL) ORDER BY "rankFNEGE"';
  pool.query(sql, (error, results) => {
    parseError(error, sql);
    response.status(200).json(results.rows)
  })
}

// Supprimer tous les calls
const deleteAllCalls = (request, response) => {
  const sql = 'DELETE FROM "CallForPaper"';
  pool.query(sql, (error, results) => {
    parseError(error, sql);
    response.status(201).send('All Calls For Paper deleted')
  })
}

//---------- Revue ----------\\

// Get toutes les revues
const getRevue = (request, response) => {
  const sql = 'SELECT * FROM "Revue"';
  pool.query(sql, (error, results) => {
    parseError(error, sql);
    response.status(200).json(results.rows)
  })
}

//Get une revue par Id
const getRevuebyId = (request, response) => {
  const id = parseInt(request.params.id);
  const sql = 'SELECT * FROM "Revue" WHERE Id = $1';
  pool.query(sql,[id], (error, results) => {
    parseError(error, sql);
    response.status(200).json(results.rows)
  })
}

//Get une revue Id grâce à son nom
const getRevueIdbyName = (request, response) => {
  const name = request.params.name;

  const sql = 'SELECT id FROM "Revue" WHERE name = $1';
  pool.query(sql,[name], (error, results) => {
    parseError(error, sql);
    if(results.rows[0]) {
      response.status(200).json(results.rows[0].id);
    } else {
      response.status(200).send("Not found");
    }
  })
}

// Créer une revue
const createRevue = (request, response) => {
  const { editeur, name, rankFNEGE, rankHCERES, rankCNRS, isOpenAccess, sjr, sousCategorie} = request.body
  const sql = 'INSERT INTO "Revue" VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8)';
  pool.query(sql, [editeur, name, rankFNEGE, rankHCERES, rankCNRS, isOpenAccess, sjr, sousCategorie], (error, results) => {
    parseError(error, sql);
    response.status(201).send(`Revue added`)
  })
}

// Update open access sur une revue
const updateOARevue = (request, response) => {
  const { isOpenAccess, id} = request.body
  const sql = 'UPDATE "Revue" SET "isOpenAccess" = $1 WHERE "id" = $2';
  pool.query(sql, [isOpenAccess, id], (error, results) => {
    parseError(error, sql);
    response.status(201).send(`Revue updated`)
  })
}

// Supprimer toutes les revues
const deleteAllRevues = (request, response) => {
  const sql = 'DELETE FROM "Revue"';
  pool.query(sql, (error, results) => {
    parseError(error, sql);
    response.status(201).send('All revues deleted')
  })
}

//---------- Editeur ----------\\

// Get toutes les revues
const getEditeur = (request, response) => {
  const sql = 'SELECT * FROM "Editeur"';
  pool.query(sql, (error, results) => {
    parseError(error, sql);
    response.status(200).json(results.rows)
  })
}


//Get une revue par Id
const getEditeurbyId = (request, response) => {
  const id = parseInt(request.params.id);
  const sql = 'SELECT * FROM "Editeur" WHERE Id = $1';
  pool.query(sql,[id], (error, results) => {
    parseError(error, sql);
    response.status(200).json(results.rows)
  })
}

// Get editeur par son nom
const getEditeurIdbyName = (request, response) => {
  const name = request.params.id;
  const sql = 'SELECT id FROM "Editeur" WHERE name = $1';
  pool.query(sql,[name], (error, results) => {
    parseError(error, sql);
    response.status(200).json(results.rows)
  })
}

// Créer un editeur
const createEditeur = (request, response) => {
  const {name} = request.body
  const sql = 'INSERT INTO "Editeur" VALUES (DEFAULT, $1)';
  pool.query(sql, [name], (error, results) => {
    parseError(error, sql);
    response.status(201).send(`Editeur added`)
  })
}

//---------- Mots clé ----------\\

const getMotCleByTerme = (request, response) => {
  const terme = request.params.terme;

  const sql = 'SELECT * FROM "MotCle" WHERE terme = $1';
  pool.query(sql,[terme], (error, results) => {
    parseError(error, sql);
    if(results.rows[0]) {
      response.status(200).json(results.rows[0]);
    } else {
      response.status(200).send("Not found");
    }
  })
}

const createMotCle = (request, response) => {
  const { terme, calls} = request.body;

  const sql = 'INSERT INTO "MotCle" VALUES ($1, $2)';
  pool.query(sql, [terme, calls], (error, results) => {
    parseError(error, sql);
    response.status(201).send(`Keyword added`);
  })
}

const updateMotCleByTerme = (request, response) => {
  const terme = request.params.terme;
  const { calls } = request.body;

  const sql = 'UPDATE "MotCle" SET calls = $2 WHERE terme = $1';
  pool.query(sql, [terme, calls], (error, results) => {
    parseError(error, sql);
    response.status(201).send(`Keyword updated`);
  })
}

//---------- Statistique --------------\\

const getNbCallByEditeur = (request, response) => {
  const sql = 'SELECT e.name, count(c.title) as value FROM "CallForPaper" as c INNER JOIN "Revue" as r ON c.fk_revue = r.id INNER JOIN "Editeur" as e ON r.fk_editeur = e.id GROUP BY e.name';
  pool.query(sql, (error, results) => {
    parseError(error, sql);
    response.status(200).json(results.rows);
  })
}

// Récupère le nombre de call par mois
const getNbCallByMonth = (request, response) => {
  const sql = 'SELECT to_char(date_insert,\'Mon\') as month, count(title) as number FROM "CallForPaper" GROUP BY month';
  pool.query(sql, (error, results) => {
    parseError(error, sql);
    response.status(200).json(results.rows)
  })
}

//---------- Advanced search ----------\\

const advancedSearch = (request, response) => {
  const paperAbstract = request.body;
  const python = spawn('python3', ['KeyWords.py', paperAbstract.text]);

  python.stdout.on('data', function (data) {
    dataToSend = data.toString();
  });

  python.on('close', (code) => {
    // send data to browser
    response.status(200).json(JSON.parse(dataToSend));
  });
}

//---------- Catégories et sous-catégorie ----------\\

// Récupération de toutes les sous-catégories
const getSousCategorie = (request, response) => {
  const sql = 'SELECT * FROM "SousCategorie"';
  pool.query(sql, (error, results) => {
    parseError(error, sql);
    response.status(200).json(results.rows)
  })
}

// Récupération d'une sous-catégorie selon son id
const getSousCategorieByID = (request, response) => {
  const id = parseInt(request.params.id);
  const sql = 'SELECT * FROM "SousCategorie" WHERE Id = $1';
  pool.query(sql,[id], (error, results) => {
    parseError(error, sql);
    if(results.rows) {
      response.status(200).json(results.rows);
    } else {
      response.status(200).send("Not found");
    }
  })
}

// Récupération d'une sous-catégorie selon son nom
const getSousCategorieByName = (request, response) => {
  const name = request.params.name;
  const sql = 'SELECT * FROM "SousCategorie" WHERE name = $1';
  pool.query(sql,[name], (error, results) => {
    parseError(error, sql);
    if(results.rows) {
      response.status(200).json(results.rows);
    } else {
      response.status(200).send("Not found");
    }
  })
}

//---------- Job ----------\\

const matchKeyWords = (request, response) => {
  const keyWords = request.body;
  const keyWordsString = Object.keys(keyWords).join('|');

  const sql = 'SELECT * FROM "MotCle" where terme similar to $1';

  let titlesString = '';
  let prefix = '';

  pool.query(sql,[keyWordsString], (error, results) => {
    parseError(error, sql);
    const resultsTab = [];

    results.rows.forEach(termDetails => {
      const termDetailsJson = JSON.parse(termDetails['calls']);

      Object.keys(termDetailsJson).forEach(key => {
        const callObjectFound = resultsTab.find( element => element['title'] === key);
        if( callObjectFound !== undefined ){
          callObjectFound['frequencySum'] += termDetailsJson[key];
          callObjectFound['occurence']++;
        }else {
          titlesString += prefix + key;
          prefix = '|';
          const callObject = {
            title: key,
            frequencySum: termDetailsJson[key],
            occurence : 1
          }
          resultsTab.push(callObject);
        }
      });
    });

    const sqlCalls = 'SELECT * FROM "CallForPaper" WHERE title similar to $1';

    pool.query(sqlCalls,[titlesString] , (error, results) => {
      parseError(error, sqlCalls);

      results.rows.forEach(call => {
        const callObjectFound = resultsTab.find( element => element['title'] === call['title']);
        call['frequencySum'] = callObjectFound['frequencySum'];
        call['occurence'] = callObjectFound['occurence'];
      });

      results.rows.sort((a,b) =>
        (a['frequencySum'] < b['frequencySum']) ? 1 : ((a['frequencySum'] > b['frequencySum']) ? -1 : 0)
      );
      response.status(200).json(results.rows);
    })
  })
}

// Cron tab pour run les méthodes que l'on appelle à l'interieur tous les jours à minuit
schedule.scheduleJob('0 0 * * *', async () => {
  await console.log("Cron tab is running...")
  const debut = new Date();

  //Scrapping des sites des éditeurs pour créer les revues et les calls à jour
  await getResultsElsevier();
  await getResultsEG();
  await getResultsTaylorFrancis();
  await updateJournals();

  const fin = new Date();
  await console.log("Cron tab is fisnished in " + (fin-debut) + " ms ...");
});

// Association des appels API avec des routes
app.get('/api/getCall', getCall);
app.get('/api/getCall/:id',getCallbyId);
app.get('/api/getCallbyTitle/:title',getCallbyTitle);
app.get('/api/getDeadlineCallbyId/:id',getDeadlineCallbyId);
app.put('/api/updateDeadlineById',updateDeadlineById);
app.post('/api/createCall',createCall);
app.get('/api/getCallFilterHCERES', getCallFilterHCERES);
app.get('/api/getCallFilterCNRS', getCallFilterCNRS);
app.get('/api/getCallFilterFNEGE', getCallFilterFNEGE);
app.delete('/api/call/deleteAll', deleteAllCalls);

// Appel pour des statistiques
app.get('/api/getNbCallByMonth', getNbCallByMonth);
app.get('/api/getNbCallByRevue/:fk_revue',getNbCallByRevue)

// Association des appels API avec des routes
app.get('/api/getRevue', getRevue);
app.get('/api/getRevue/:id',getRevuebyId);
app.get('/api/getRevueIdbyName/:name',getRevueIdbyName);
app.post('/api/createRevue',createRevue);
app.put('/api/updateOARevue',updateOARevue);
app.delete('/api/revue/deleteAll', deleteAllRevues);

// Association des appels API avec des routes
app.get('/api/getEditeur', getEditeur);
app.get('/api/getNbCallByEditeur', getNbCallByEditeur);
app.get('/api/getEditeur/:id',getEditeurbyId);
app.get('/api/getEditeurIdbyName/:id',getEditeurIdbyName);
app.post('/api/createEditeur',createEditeur);

app.post('/api/advanced-search',advancedSearch);
app.post('/api/result-search',advancedSearch);
app.post('/api/match-keywords',matchKeyWords);

app.get('/api/keywords/:terme', getMotCleByTerme);
app.post('/api/create/keyword', createMotCle);
app.put('/api/keywords/:terme/update', updateMotCleByTerme);

// Appel api pour les catégories et sous catégories
app.get('/api/getSousCategorieByID/:id',getSousCategorieByID);
app.get('/api/getSousCategorieByName/:name',getSousCategorieByName);
app.get('/api/getSousCategorie/',getSousCategorie);




// Route par défaut qui redirige vers l'index html
// ** Il faut commenter ce code si l'on veut tester l'api rest en local **
app.get('*', function(req, res) {
  res.sendfile('./dist/hube-call-app/index.html')
})

// Handler error pour gérer les erreur de PostgresSQL
function parseError(err, sqlString) {
  //console.error("Requete : ", sqlString);

  let errorCodes = {
    "08003": "connection_does_not_exist",
    "08006": "connection_failure",
    "2F002": "modifying_sql_data_not_permitted",
    "57P03": "cannot_connect_now",
    "42601": "syntax_error",
    "42501": "insufficient_privilege",
    "42602": "invalid_name",
    "42622": "name_too_long",
    "42939": "reserved_name",
    "42703": "undefined_column",
    "42000": "syntax_error_or_access_rule_violation",
    "42P01": "undefined_table",
    "42P02": "undefined_parameter"
  };

  if(err) {
    if (err.message !== undefined) {
      console.error("Requete : ", sqlString);
      console.error("[ERROR] message : ", err.message);
    }

    if (err.code != 23505) {
      if (errorCodes[err.code] !== undefined) {
        console.error("Requete : ", sqlString);
        console.error("[ERROR] Error code details : ", errorCodes[err.code]);
      }
    }
  }
}
