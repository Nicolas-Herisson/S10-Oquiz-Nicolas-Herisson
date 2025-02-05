import express from 'express';
import quizController from '../controllers/quizController.js';

const quizRouter = express.Router();


quizRouter.get('/quiz/:id', quizController.showQuizPage);



// on exporte le routeur
export default quizRouter;