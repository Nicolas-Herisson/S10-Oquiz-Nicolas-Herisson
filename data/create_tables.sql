DROP TABLE IF EXISTS "quiz_has_tag" CASCADE;
DROP TABLE IF EXISTS "answer" CASCADE;
DROP TABLE IF EXISTS "question" CASCADE;
DROP TABLE IF EXISTS "quiz" CASCADE;
DROP TABLE IF EXISTS "user" CASCADE;
DROP TABLE IF EXISTS "difficulty" CASCADE;
DROP TABLE IF EXISTS "tag" CASCADE;

CREATE TABLE "level" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(64) NOT NULL
);

CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY,
  "email" VARCHAR(255) NOT NULL,
  "password" VARCHAR(255) NOT NULL,
  "first_name" VARCHAR(255) NOT NULL,
  "last_name" VARCHAR(255) NOT NULL,
  "role" VARCHAR(255) NOT NULL
);

CREATE TABLE "quiz" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(128) NOT NULL,
  "description" VARCHAR(512) NOT NULL,
  "id_user" INT,
  FOREIGN KEY ("id_user") REFERENCES "user"("id")
);

CREATE TABLE "question" (
  "id" SERIAL PRIMARY KEY,
  "title" VARCHAR(64) NOT NULL,
  "anecdote" TEXT,
  "id_level" INT,
  FOREIGN KEY ("id_level") REFERENCES "level"("id"),
  "id_quiz" INT,
  FOREIGN KEY ("id_quiz") REFERENCES "quiz"("id")
);

CREATE TABLE "answer" (
  "id" SERIAL PRIMARY KEY,
  "answer" VARCHAR(512) NOT NULL,
  "title" VARCHAR(128) NOT NULL,
  "is_valid" BOOLEAN NOT NULL,
  "id_question" INT,
  FOREIGN KEY ("id_question") REFERENCES "question"("id")
);


CREATE TABLE "tag" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(128) NOT NULL
);

CREATE TABLE "quiz_has_tag" (
  "id_quiz" INT,
  "id_tag" INT,
  FOREIGN KEY ("id_quiz") REFERENCES "quiz"("id"),
  FOREIGN KEY ("id_tag") REFERENCES "tag"("id")
);
