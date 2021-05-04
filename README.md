# HubeCallApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.1.

## Create database

**Download postgresql for ubuntu :**

`sudo apt install postgresql`

**Then create a user and a database :**

https://doc.ubuntu-fr.org/postgresql#methode_alternative_pour_creer_un_utilisateur

**Finally run the sql script located in :**

`"hube-call-app/src/server/pgsql_script.sql"`

> *Check the doc to know how to run a sql file in the shell of postgres ("\i")*

**You will certainly encountered some errors about the granting on table of the database**

You will have to set the granting of each table by the following lines :

```sql
GRANT ALL ON "CallForPaper" TO "<username>";
GRANT ALL ON "Revue" TO "<username>";
GRANT ALL ON "Editeur" TO "<username>";
GRANT ALL ON "CallForPaper_id_seq" TO "<username>";
GRANT ALL ON "Editeur_id_seq" TO "<username>";
GRANT ALL ON "Revue_id_seq" TO "<username>";
```

## Create your dotenv file

> /!\ Create the .env file in the `root` of the project /!\

You have to create a `.env` file to run the project with your local configuration.

```
DATABASE_URL=postgresql://<user>:<password>@<host>/<nameDatabase>
URL_API=http://localhost:8080/api
```

As you can see, you have to set 2 environments variables : 
 - the connection string of your local database
 - the url of you local deployment for the API (if you don't update the `server.js` it the same as the one above)

## Change some lines in the code

You will have to change some lines in the following files :
- `hube-call-app/src/app/services/call-for-paper.service.ts`
- `hube-call-app/src/app/services/revue.service.ts`

Change `${this.apiURL}` by `${this.apiURLlocal}`

> The `.env` file does not work properly with TypeScript

## Run the project

**Before let's make the classic :**

 `npm install`

**Then :**

`npm run local`

**Then go to :**

`http://localhost:8080/`

> If you don't see any data in your database, it's normal because the retrieving script to store data take about 5-10 minutes to be done.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
