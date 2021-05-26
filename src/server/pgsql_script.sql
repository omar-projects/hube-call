DROP TABLE IF EXISTS "CallForPaper" CASCADE;
DROP TABLE IF EXISTS "Revue" CASCADE;
DROP TABLE IF EXISTS "Editeur" CASCADE;
DROP TABLE IF EXISTS "MotCle" CASCADE;

CREATE TABLE "CallForPaper" (
	"id" serial NOT NULL,
	"title" varchar(255) NOT NULL,
	"fk_revue" bigint NOT NULL,
	"deadline" DATE	,
	"desc" text NOT NULL,
	"url" varchar(255) NOT NULL,
	"date_insert" DATE NOT NULL DEFAULT CURRENT_DATE,
	CONSTRAINT "CallForPaper_pk" PRIMARY KEY ("id"),
	UNIQUE ("title","fk_revue","deadline")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Revue" (
	"id" serial NOT NULL,
	"fk_editeur" bigint NOT NULL,
	"name" varchar(255) NOT NULL,
	"rankFNEGE" int,
	"rankHCERES" CHAR(1),
	"rankCNRS" int,
	"isOpenAccess" boolean,
	"sjr" text,
	"categories" varchar(255) NOT NULL,
	CONSTRAINT "Revue_pk" PRIMARY KEY ("id"),
	UNIQUE ("name","fk_editeur")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Editeur" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "Editeur_pk" PRIMARY KEY ("id"),
	UNIQUE("name")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "Categorie" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "Categorie_pk" PRIMARY KEY ("id"),
	UNIQUE("name")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "SousCategorie" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"fk_categorie" bigint NOT NULL,
	CONSTRAINT "SousCategorie_pk" PRIMARY KEY ("id"),
	UNIQUE("name")
) WITH (
  OIDS=FALSE
);

CREATE TABLE "MotCle" (
	"terme" varchar(200) NOT NULL,
	"calls" text NULL,
	CONSTRAINT "MotCles_pk" PRIMARY KEY ("terme"),
	UNIQUE("terme")
) WITH (
	OIDS=FALSE
);

ALTER TABLE "CallForPaper" ADD CONSTRAINT "CallForPaper_fk0" FOREIGN KEY ("fk_revue") REFERENCES "Revue"("id") ON DELETE CASCADE;
ALTER TABLE "Revue" ADD CONSTRAINT "Revue_fk0" FOREIGN KEY ("fk_editeur") REFERENCES "Editeur"("id") ON DELETE CASCADE;
ALTER TABLE "SousCategorie" ADD CONSTRAINT "SousCategorie_fk0" FOREIGN KEY ("fk_categorie") REFERENCES "Categorie"("id") ON DELETE CASCADE;

-- Insert dans la table Editeur
INSERT INTO "Editeur" VALUES (DEFAULT,'Emerald Group');
INSERT INTO "Editeur" VALUES (DEFAULT,'Elsevier');
INSERT INTO "Editeur" VALUES (DEFAULT,'Taylor & Francis');

-- Insert dans la table Categorie
INSERT INTO "Categorie" VALUES (1,'Business, Management and Accounting');

-- Insert dans la table SousCategorie
INSERT INTO "SousCategorie" VALUES (DEFAULT,'Accounting', 1);
INSERT INTO "SousCategorie" VALUES (DEFAULT,'Business and International Management', 1);
INSERT INTO "SousCategorie" VALUES (DEFAULT,'Business, Management and Accounting (miscellaneous)', 1);
INSERT INTO "SousCategorie" VALUES (DEFAULT,'Industrial Relations', 1);
INSERT INTO "SousCategorie" VALUES (DEFAULT,'Management Information Systems', 1);
INSERT INTO "SousCategorie" VALUES (DEFAULT,'Management of Technology and Innovation', 1);
INSERT INTO "SousCategorie" VALUES (DEFAULT,'Marketing', 1);
INSERT INTO "SousCategorie" VALUES (DEFAULT,'Organizational Behavior and Human Resource Management', 1);
INSERT INTO "SousCategorie" VALUES (DEFAULT,'Strategy and Management', 1);
INSERT INTO "SousCategorie" VALUES (DEFAULT,'Tourism, Leisure and Hospitality Management', 1);



