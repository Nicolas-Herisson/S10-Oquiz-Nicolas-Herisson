import express from 'express';
import profileController from '../controllers/profileController.js';

const profileRouter = express.Router();


profileRouter.get('/profile', profileController.showProfilePage);
profileRouter.post('/profile', profileController.updateProfile);

// on exporte le routeur
export default profileRouter;