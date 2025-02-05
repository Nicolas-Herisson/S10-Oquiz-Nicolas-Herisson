import {Level} from "../models/v2/associations.js";

const adminController = {
    showAdminPage: async (req, res) => {
        try {
            const levels = await Level.findAll();

            res.status(200).render("admin", {levels, userId: req.session.userId});
            
        } catch (error) {
            console.log(error);
            res.status(500).send("Internal Server Error");
        }
    }
};

export default adminController;