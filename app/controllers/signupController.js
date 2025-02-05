import * as argon2 from "argon2";
import * as EmailValidator from 'email-validator';
import passwordValidator from 'password-validator';
import errors from '../middleware/errors.js';
import {User} from '../models/v2/associations.js';

async function emailCheck(email)
{

  if (!EmailValidator.validate(email))
    return "Email non valide!";

  const user = await User.findOne({
    Where: {email}
  });

  
  if (user)
    return "L'email est deja prit!"

  return "";

}

function passwordCheck(password)
{
  const schema = new passwordValidator();

  schema
  .is().min(8)                                    
  .is().max(100)                                  
  .has().uppercase()                              
  .has().lowercase()                              
  .has().digits(2)                                
  .has().not().spaces()                           
  .is().not().oneOf(['Qwerty1234.', 'Azerty1234.', 'Password1234.', 'Motdepasse1234.', 'Passw0rd', 'Password123']); 

  if (!schema.validate(password))
    return "Mot de passe non valide!";

  return "";

}

const signupController = {
    showSignupPage: async (req, res) => {
        try {
          res.status(200).render("signup", {userId: req.session.userId, data: null, errorMessage: null});
    
        } catch (error) {
          res.status(500).error(error);
        }
      },
      redirectLoginPage: async (req, res) => {
        try {

          const {firstname, lastname, email, password, confirmation} = req.body;

          if (!firstname || ! lastname || !email || !password)
            return res.render("signup", {userId: req.session.userId, data: req.body, errorMessage: "Veuillez remplir tous les champs!"});

          const emailError = await emailCheck(req.body.email);

          if (emailError !== "")
            return res.render("signup", {userId: req.session.userId, data: req.body, errorMessage: emailError});

          const passwordError = passwordCheck(req.body.password)
          
          if (passwordError !== "")
            return res.render("signup", {userId: req.session.userId, data: req.body, errorMessage: passwordError});
          
          // On hash le password renseigne
          const hashPassword = await argon2.hash(req.body.password);

    
          await User.create({
            email: req.body.email,
            password: hashPassword,
            firstname: req.body.firstname,
            lastname: req.body.lastname
          });
          
          return res.status(200).redirect("login", {userId: req.session.userId, data: null, errorMessage: null});
    
    
    
        } catch (error) {
          errors[500](req, res);
        }
      },
}

export default signupController;