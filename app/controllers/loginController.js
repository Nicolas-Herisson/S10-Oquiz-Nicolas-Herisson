import {User, Quiz} from '../models/v2/associations.js'
import * as argon2 from "argon2";
import * as EmailValidator from 'email-validator';

const loginController = {
    showLoginPage: async (req, res) => {
        try {

        res.status(200).render("login",{ userId: req.session.userId});

        } catch (error) {
        res.status(500).error(error);
        }
    },

    checkLogin: async (req, res) => {
        try {
        // Ici je cherche le user pas som email dans la BDD
        const user = await User.findOne({
            where: { 
            email: req.body.email,
            }
        });
        
        if (!user) {
            // Si le user n'existe pas on affiche la vue login
            res.status(200).render('login', {userId: req.session.userId})
        }
        else
        {
            // Si user existe on verifie si le password dans la BDD est egal au password renseigne
            if (await argon2.verify(user.password, req.body.password)) 
            {
                const quizzes = await Quiz.findAll({
                order: [["title", "ASC"]],
                attributes: ['id', 'title', 'picture_url'],
                include: [
                    {
                    association: 'user',
                    attributes: ['firstname', 'lastname'],
                    },
                    {
                    association: 'tags',
                    attributes: ['name'],
                    },
                ],
                });
        
                req.session.name = user.lastname;
                req.session.userId = user.id;
        
                return res.status(200).redirect("/");
            } 
            else 
            {
                // Si les passwords ne sont pas les memes on afficher la vue login
                res.status(200).render('login', {userId: req.session.userId});
            }
        }
        // par securite, si la condition echoue on affiche la vue login
        res.status(200).render('login', {userId: req.session.userId});
        
        } catch (error) {
        res.status(500).error(error);
        }
    },
}

export default loginController;