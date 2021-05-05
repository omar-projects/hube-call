//Install express server
require('dotenv').config();
const express = require('express');
const path = require('path');
const { Pool } = require("pg");
const bodyParser = require('body-parser');
const schedule = require('node-schedule');
const getResultsEG = require('./src/app/js/webscrapingEG');
const getResultsElsevier = require('./src/app/js/webscrapingElsevier');
const updateJournals = require('./src/app/js/updateJournals');

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
  const sql = 'SELECT * FROM "CallForPaper"';
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

// Créer un call
const createCall = (request, response) => {
  const {title, revue, deadline, desc, url } = request.body
  const sql = 'INSERT INTO "CallForPaper" VALUES (DEFAULT, $1, $2, $3, $4, $5)';
  pool.query(sql, [title, revue, deadline, desc, url], (error, results) => {
    parseError(error, sql);
    response.status(201).send(`Call For Paper added`)
  })
}

// Get calls filtrer par rang HCERES
const getCallFilterHCERES = (request, response) => {
  const sql = 'SELECT * FROM "CallForPaper","Revue" r WHERE "fk_revue" = r."id" AND "rankHCERES" != \'\' ORDER BY "rankHCERES"';
  pool.query(sql, (error, results) => {
    parseError(error, sql);
    response.status(200).json(results.rows)
  })
}

// Get calls filtrer par rang CNRS
const getCallFilterCNRS = (request, response) => {
  const sql = 'SELECT * FROM "CallForPaper","Revue" r WHERE "fk_revue" = r."id" AND "rankCNRS" != 0 ORDER BY "rankCNRS"';
  pool.query(sql, (error, results) => {
    parseError(error, sql);
    response.status(200).json(results.rows)
  })
}

// Get calls filtrer par rang FNEGE
const getCallFilterFNEGE = (request, response) => {
  const sql = 'SELECT * FROM "CallForPaper","Revue" r WHERE "fk_revue" = r."id" AND "rankFNEGE" != 0 ORDER BY "rankFNEGE"';
  pool.query(sql, (error, results) => {
    parseError(error, sql);
    response.status(200).json(results.rows)
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
  const name = request.params.id;
  const sql = 'SELECT id FROM "Revue" WHERE name = $1';
  pool.query(sql,[name], (error, results) => {
    parseError(error, sql);
    response.status(200).json(results.rows[0].id);
  })
}

// Créer une revue
const createRevue = (request, response) => {
  const { editeur, name, rankFNEGE, rankHCERES, rankCNRS, isOpenAccess, sjr} = request.body
  const sql = 'INSERT INTO "Revue" VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7)';
  pool.query(sql, [editeur, name, rankFNEGE, rankHCERES, rankCNRS, isOpenAccess, sjr], (error, results) => {
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

// Cron tab pour run les méthodes que l'on appelle à l'interieur tous les jours à minuit
schedule.scheduleJob('0 0 * * *', async () => {
  console.log("Cron tab is running...")
  await getResultsElsevier();
  await getResultsEG();
  await updateJournals();
});



// Association des appels API avec des routes
app.get('/api/getCall', getCall);
app.get('/api/getCall/:id',getCallbyId);
app.post('/api/createCall',createCall);
app.get('/api/getCallFilterHCERES', getCallFilterHCERES);
app.get('/api/getCallFilterCNRS', getCallFilterCNRS);
app.get('/api/getCallFilterFNEGE', getCallFilterFNEGE);

// Association des appels API avec des routes
app.get('/api/getRevue', getRevue);
app.get('/api/getRevue/:id',getRevuebyId);
app.get('/api/getRevueIdbyName/:id',getRevueIdbyName);
app.post('/api/createRevue',createRevue);
app.put('/api/updateOARevue',updateOARevue); 

// Association des appels API avec des routes
app.get('/api/getEditeur', getEditeur);
app.get('/api/getEditeur/:id',getEditeurbyId);
app.get('/api/getEditeurIdbyName/:id',getEditeurIdbyName);
app.post('/api/createEditeur',createEditeur);


// Route par défaut qui redirige vers l'index html
app.get('*', function(req, res) {
  res.sendfile('./dist/hube-call-app/index.html')
})

// Handler error pour gérer les erreur de PostgresSQL
function parseError(err, sqlString) {
  console.log("nparseError:", sqlString);

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

  if (err === undefined) {
    console.warn("No errors returned from Postgres");
  } else {
    // console.log("ERROR Object.keys():", Object.keys(err))
    if (err.message !== undefined) {
      console.error("ERROR message:", err.message);
    }

    if (err.code != 23505) {
      console.error("Postgres error code:", err.code);

      if (errorCodes[err.code] !== undefined) {
        console.error("Error code details:", errorCodes[err.code]);
      }
    }
  }
}