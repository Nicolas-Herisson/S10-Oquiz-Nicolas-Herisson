DROP TABLE IF EXISTS "represent";
DROP TABLE IF EXISTS "theme";
DROP TABLE IF EXISTS "quiz";
DROP TABLE IF EXISTS "user";
DROP TABLE IF EXISTS "purpose";
DROP TABLE IF EXISTS "question";
DROP TABLE IF EXISTS "difficulty";


CREATE TABLE "difficulty" (
  "id_difficulty" SERIAL PRIMARY KEY,
  "description" VARCHAR(64) NOT NULL
);

CREATE TABLE "question" (
  "id_question" SERIAL PRIMARY KEY,
  "question_code" INT NOT NULL,
  "title" VARCHAR(64) NOT NULL,
  "anecdote" VARCHAR(255),
  "id_difficulty" INT,
  FOREIGN KEY ("id_difficulty") REFERENCES "difficulty"("id_difficulty")
);

CREATE TABLE "purpose" (
  "id_purpose" SERIAL PRIMARY KEY,
  "purpose_code" INT NOT NULL,
  "answer" VARCHAR(512) NOT NULL,
  "title" VARCHAR(128) NOT NULL,
  "is_valid" BOOLEAN NOT NULL,
  "id_question" INT,
  FOREIGN KEY ("id_question") REFERENCES "question"("id_question")
);

CREATE TABLE "user" (
  "id_user" SERIAL PRIMARY KEY,
  "email" VARCHAR(255) NOT NULL,
  "password" VARCHAR(255) NOT NULL,
  "first_name" VARCHAR(255) NOT NULL,
  "last_name" VARCHAR(255) NOT NULL,
  "role" VARCHAR(255) NOT NULL
);

CREATE TABLE "quiz" (
  "id_quiz" SERIAL PRIMARY KEY,
  "quiz_code" INT NOT NULL,
  "title" VARCHAR(128) NOT NULL,
  "description" VARCHAR(512) NOT NULL,
  "id_user" INT,
  FOREIGN KEY ("id_user") REFERENCES "user"("id_user")
);

CREATE TABLE "theme" (
  "id_theme" SERIAL PRIMARY KEY,
  "name" VARCHAR(128) NOT NULL
);

CREATE TABLE "represent" (
  "id_represent" SERIAL PRIMARY KEY,
  "id_quiz" INT,
  "id_theme" INT,
  FOREIGN KEY ("id_quiz") REFERENCES "quiz"("id_quiz"),
  FOREIGN KEY ("id_theme") REFERENCES "theme"("id_theme")
);
