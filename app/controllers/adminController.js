import {Level} from "../models/v2/assocition.js";

const adminController = {
    showAdminPage: async (req, res) => {
        try {
            const levels = await Level.findAll();

            res.status(200).render("admin", {levels});
            
        } catch (error) {
            console.log(error);
            res.status(500).send("Internal Server Error");
        }
    }
};

export default adminController;