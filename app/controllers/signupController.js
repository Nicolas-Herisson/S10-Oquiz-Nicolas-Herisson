import * as argon2 from "argon2";
import * as EmailValidator from 'email-validator';
import passwordValidator from 'password-validator';
import errors from '../middleware/errors.js'

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

          if (!EmailValidator.validate(req.body.email))
            return res.render("signup", {userId: req.session.userId, data: req.body, errorMessage: "Email non valide!"});

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
            return res.render("signup", {userId: req.session.userId, data: req.body, errorMessage: "Mot de passe non valide!"});

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