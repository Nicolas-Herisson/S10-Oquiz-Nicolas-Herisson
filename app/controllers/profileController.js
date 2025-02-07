import errors from "../middleware/errors.js";
import * as EmailValidator from 'email-validator';
import { User } from "../models/v2/associations.js";

const profileController = {
    showProfilePage: async (req, res) => {
        try {
          res.status(200).render('profile');
        } catch (error) {
          errors[500](req,res, error);
        }
      },
      updateProfile: async (req, res) => {
        try {

          const {firstname, lastname, email} = req.body;

          if (!firstname || !lastname || !email) 
            res.locals.error = "Veuillez remplir tous les champs";
console.log("after fields validation");
          if (!EmailValidator.validate(email))
            res.locals.error = "Email invalide";
console.log("after email validation | user id = "+req.session.user.id);
          const user = await User.findOne({where: {id: req.session.user.id}});
          console.log("After user find | user = "+JSON.stringify(user, null, 2));
          console.log("lastname = "+lastname);
          user.firstname = firstname;
          user.lastname = lastname;
          user.email = email;
          await user.save();

          console.log("After user save | user = "+JSON.stringify(user, null, 2));
          req.session.user = user;
          res.locals.user = user;


          res.status(200).render('profile');
        } catch (error) {
          errors[500](req,res, error);
        }
      }
}

export default profileController;