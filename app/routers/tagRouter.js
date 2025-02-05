import express from 'express';
import tagController from '../controllers/tagController.js';

const tagRouter = express.Router();


tagRouter.get('/tags', tagController.showTagsPage);



// on exporte le routeur
export default tagRouter;