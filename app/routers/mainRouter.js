import express from 'express';
import mainController from '../controllers/mainController.js';

const mainRouter = express.Router();

mainRouter.get('/', mainController.showHomepage);


// on exporte le routeur
export default mainRouter;
