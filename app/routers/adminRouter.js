import express from 'express';
import adminController from '../controllers/adminController.js';
import isLogged, { isAdmin } from '../middleware/permissions.js';

const adminRouter = express.Router();

adminRouter.get('/admin', isLogged, isAdmin, adminController.showAdminPage);

export default adminRouter;