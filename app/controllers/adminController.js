import errors from "../middleware/errors.js";
import {Level} from "../models/v2/associations.js";

const adminController = {
    showAdminPage: async (req, res) => {
        try {
            const levels = await Level.findAll();

            res.status(200).render("admin", {levels});
            
        } catch (error) {
            errors[500](req,res, error);
        }
    }
};

export default adminController;