import express from 'express';
import mainController from '../controllers/mainController.js';

const mainRouter = express.Router();

mainRouter.get("/", mainController.showHomePage);
mainRouter.get("/tags", mainController.showTagsPage);
mainRouter.get("/login", mainController.showLoginPage);
mainRouter.get("/signup", mainController.showSignupPage);
mainRouter.get("/quiz", mainController.showQuizPage);

export default mainRouter;
