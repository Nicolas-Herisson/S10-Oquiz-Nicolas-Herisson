import express from 'express';
import loginController from '../controllers/loginController.js';

const loginRouter = express.Router();


loginRouter.get('/login', loginController.showLoginPage);
loginRouter.post('/login', loginController.checkLogin);



// on exporte le routeur
export default loginRouter;
