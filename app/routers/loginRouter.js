import express from 'express';
import loginController from '../controllers/loginController.js';

const loginRouter = express.Router();


loginRouter.get('/login', loginController.showLoginPage);
loginRouter.post('/login', loginController.login);

loginRouter.get('/logout', loginController.logout);


// on exporte le routeur
export default loginRouter;
