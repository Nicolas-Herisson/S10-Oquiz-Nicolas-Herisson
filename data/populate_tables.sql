DELETE FROM "user";
DELETE FROM "quiz";
DELETE FROM "tag";

INSERT INTO "user" ("email", "password", "first_name", "last_name", "role") VALUES 
('fabien@oclock.school', 'cynophile', 'Fabien', 'JeCPas', 'god'),
('olivier@oclock.school', 'melomane', 'Olivier', 'CTropDur', 'god'),
('nicolas@oclock.school', 'peon', 'Nicolas', 'Herisson', 'minion');


INSERT INTO "quiz" ("title", "description", "id_user") VALUES 
('cosmos', 'A propos du cosmos', 1),
('math', 'A propos des math', 2),
('Fabien', 'A propos de Fabien', 3);

INSERT INTO "tag" ("name") VALUES 
('cosmos'),
('math'),
('Fabien');