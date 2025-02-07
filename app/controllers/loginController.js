import {User} from '../models/v2/associations.js'
import * as argon2 from "argon2";
import errors from '../middleware/errors.js';



const loginController = {
    showLoginPage: async (req, res) => {
        try {

        res.status(200).render("login",{ errorMessage: null});

        } catch (error) {
            errors[500](req,res, error);
        }
    },

    login: async (req, res) => {
        try {
        // Ici je cherche le user pas som email dans la BDD
        const user = await User.findOne({
            where: { 
            email: req.body.email,
            }
        });

        if (!user) 
            // Si le user n'existe pas on affiche la vue login
            res.locals.error = "Email n'existe pas";
        else
        {
            // Si user existe on verifie si le password dans la BDD est egal au password renseigne
            if (!await argon2.verify(user.password, req.body.password)) 
                res.locals.error = "Mot de passe incorrect";
        }

        if (res.locals.error) 
            return res.status(200).render('login', {errorMessage: res.locals.error});


        req.session.user = user;
        res.status(200).redirect("/");
    
    
        
        } catch (error) {
            errors[500](req,res, error);
        }
    },
    logout: (req, res) => {

        req.session.destroy();

        res.redirect('/');
    },
}

export default loginController;