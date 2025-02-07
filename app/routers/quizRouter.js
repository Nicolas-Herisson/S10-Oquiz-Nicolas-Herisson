import express from 'express';
import quizController from '../controllers/quizController.js';
import isLogged from '../middleware/permissions.js';

const quizRouter = express.Router();


quizRouter.get('/quiz/:id',isLogged, quizController.showQuizPage);



// on exporte le routeur
export default quizRouter;