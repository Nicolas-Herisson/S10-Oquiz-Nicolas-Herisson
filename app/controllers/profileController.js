import errors from "../middleware/errors.js";
import * as EmailValidator from 'email-validator';
import { User } from "../models/v2/associations.js";

const profileController = {
    showProfilePage: async (req, res) => {
        try {
          res.status(200).render('profile', {errorMessage: null});
        } catch (error) {
          errors[500](req,res, error);
        }
      },
      updateProfile: async (req, res) => {
        try {

          const {firstname, lastname, email} = req.body;

          if (!firstname || !lastname || !email) 
            res.locals.error = "Veuillez remplir tous les champs";

          if (!EmailValidator.validate(email))
            res.locals.error = "Email invalide";

          const user = await User.findOne({where: {id: req.session.user.id}});

          user.firstname = firstname;
          user.lastname = lastname;
          user.email = email;
          await user.save();


          req.session.user = user;
          res.locals.user = user;


          res.status(200).render('profile', { errorMessage: res.locals.error });

        } catch (error) {
          errors[500](req,res, error);
        }
      }
}

export default profileController;