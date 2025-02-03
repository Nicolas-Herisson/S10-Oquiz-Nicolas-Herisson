import Quiz from "./quiz.js";
import User from "./user.js";
import { Question, Answer, Level } from "./assocition.js";

const quizs = await Quiz.findAll();

console.table(quizs.map((quiz) => quiz.get({ plain: true })));
console.table(quizs.map((quiz) => quiz.toJSON()));

const questions = await Question.findOne({
    where: { id: 1 },
    include: "answers",
});

const level = await Level.findOne({
    where: { id: 1 },
    include: "questions",
});

const question = await Question.findOne({
    where: { id: 1 },
    include: "level",
});

console.log(questions.toJSON());
console.log(question.toJSON());
console.log(level.toJSON());