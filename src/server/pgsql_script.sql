DROP TABLE "CallForPaper" CASCADE;
DROP TABLE "Revue" CASCADE;
DROP TABLE "Editeur" CASCADE;


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


ALTER TABLE "CallForPaper" ADD CONSTRAINT "CallForPaper_fk0" FOREIGN KEY ("fk_revue") REFERENCES "Revue"("id") ON DELETE CASCADE;
ALTER TABLE "Revue" ADD CONSTRAINT "Revue_fk0" FOREIGN KEY ("fk_editeur") REFERENCES "Editeur"("id") ON DELETE CASCADE;


-- -- Exemples, à supprimer plus tard

INSERT INTO "Editeur" VALUES (DEFAULT,'Emerald Group');
INSERT INTO "Editeur" VALUES (DEFAULT,'Elsevier');
INSERT INTO "Editeur" VALUES (DEFAULT,'Taylor & Francis');
-- INSERT INTO "Revue" VALUES (DEFAULT,1,'RevueTest',54,23,47);
-- INSERT INTO "CallForPaper" VALUES (DEFAULT,'CallForPaperTest',1,'30/06/2020','Ceci est la description test','http://www.testURL.com');
-- INSERT INTO "CallForPaper" VALUES (DEFAULT,'CallForPaperTest2',1,'30/06/2020','Ceci est la description test 2','http://www.testURL2.com');
-- INSERT INTO "Keyword" VALUES (1,'Informatique');
-- INSERT INTO "Keyword" VALUES (1,'Test');

--GRANT ALL ON "CallForPaper" TO "admin";
--GRANT ALL ON "Revue" TO "admin";
--GRANT ALL ON "Editeur" TO "admin";
--GRANT ALL ON "CallForPaper_id_seq" TO "admin";
--GRANT ALL ON "Editeur_id_seq" TO "admin";
--GRANT ALL ON "Revue_id_seq" TO "admin";
-- GRANT ALL ON "CallForPaper" TO "admin-trc";
-- GRANT ALL ON "Revue" TO "admin-trc";
-- GRANT ALL ON "Editeur" TO "admin-trc";
-- GRANT ALL ON "CallForPaper_id_seq" TO "admin-trc";
-- GRANT ALL ON "Editeur_id_seq" TO "admin-trc";
-- GRANT ALL ON "Revue_id_seq" TO "admin-trc";
