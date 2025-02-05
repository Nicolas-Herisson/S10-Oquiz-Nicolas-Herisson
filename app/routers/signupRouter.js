import express from 'express';
import signupController from '../controllers/signupController.js';

const signupRouter = express.Router();


signupRouter.get('/signup', signupController.showSignupPage);
signupRouter.post('/signup', signupController.redirectLoginPage);


// on exporte le routeur
export default signupRouter;
