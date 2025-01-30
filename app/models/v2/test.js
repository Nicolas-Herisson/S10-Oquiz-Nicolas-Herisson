import Level from "./level.js";
import Quiz from "./quiz.js";
import User from "./user.js";

const quizs = await Quiz.findAll();

console.table(quizs.map((quiz) => quiz.get({ plain: true })));
console.table(quizs.map((quiz) => quiz.toJSON()));
