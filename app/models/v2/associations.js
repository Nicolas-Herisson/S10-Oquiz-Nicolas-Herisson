import Answer from "./answer.js";
import Level from "./level.js";
import Question from "./question.js";
import Quiz from "./quiz.js";
import Tag from "./tag.js";
import User from "./user.js";

// --- Associations ---
// Doc : https://sequelize.org/docs/v6/core-concepts/assocs/
// One-To-Many : hasMany() + belongsTo()

// * Question <-> Answer
// Une question a plusieurs réponses
Question.hasMany(Answer, {
  // Lorsque je vais récupérer les questions, je souhaite récupérer aussi un objet intégré
  // qui contiendra toutes les réponses grâce à l'association
  as: "answers",
  // Je dois aussi ajouter la clé étrangère qui me permet de faire la liaison entre les deux tables
  foreignKey: "question_id",
});

Answer.belongsTo(Question, {
  // On lui ajoute un alias afin d'indiquer à quelle question appartient notre réponse
  as: "question",
  // On ajoute aussi la clé étrangère symbolisant la relation entre les deux tables
  foreignKey: "question_id",
});

// * Question <-> Level (c) Maxime M.
Level.hasMany(Question, {
  as: "questions",
  foreignKey: "level_id",
});

Question.belongsTo(Level, {
  as: "level",
  foreignKey: "level_id",
});

// * Question <-> Quiz (c) Arnaud B.
Quiz.hasMany(Question, {
  as: "questions",
  foreignKey: "quiz_id",
});

Question.belongsTo(Quiz, {
  as: "quiz",
  foreignKey: "quiz_id",
});

// * Quiz <-> User (c) Karine D.
User.hasMany(Quiz, {
  as: "quizzes",
  foreignKey: "user_id",
});

Quiz.belongsTo(User, {
  as: "user",
  foreignKey: "user_id",
});

// * Quiz <-> Tag
Quiz.belongsToMany(Tag, {
  // through = à travers
  through: "quiz_has_tag", // C'est la table de jointure
  foreignKey: "quiz_id", // La clé étrangère permettant de faire la jonction entre Quiz et la table de jointure
  otherKey: "tag_id", // L'autre clé étrangère pour récupérer les sujets (tags),
  as: "tags", // On renomme la liste des sujets
});

Tag.belongsToMany(Quiz, {
  through: "quiz_has_tag",
  foreignKey: "tag_id",
  otherKey: "quiz_id",
  as: "quizzes",
});

export { Answer, Level, Question, Quiz, Tag, User };
