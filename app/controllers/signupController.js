import * as argon2 from "argon2";
import * as EmailValidator from 'email-validator';
import passwordValidator from 'password-validator';
import errors from '../middleware/errors.js';
import {User} from '../models/v2/associations.js';

async function emailCheck(toCheckEmail)
{

  if (!EmailValidator.validate(toCheckEmail))
    return "Email non valide!";

  const user = await User.findOne({
    where: {email: toCheckEmail}
  });


  if (user)
  {
    return "L'email est deja prit!"
  }


  return "";

}

function passwordCheck(password, confirmedPassword)
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

  if (password !== confirmedPassword)
    return "Les deux mot de passe ne sont pas identiques!";

  return "";

}

const signupController = {
    showSignupPage: async (req, res) => {
        try {
          res.status(200).render("signup", {data: null, errorMessage: null});
    
        } catch (error) {
           errors[500](req,res);
        }
      },
      redirectLoginPage: async (req, res) => {
        try {

          const {firstname, lastname, email, password, confirmation} = req.body;

          if (!firstname || ! lastname || !email || !password)
            res.locals.error =  "Veuillez remplir tous les champs!";

          const emailError = await emailCheck(req.body.email);

          if (emailError !== "")
            res.locals.error = emailError;

          const passwordError = passwordCheck(req.body.password, confirmation)

          if (passwordError !== "")
            res.locals.error = passwordError;

          // On hash le password renseigne
          const hashPassword = await argon2.hash(req.body.password);


          if (res.locals.error === "")
          {
            await User.create({
              email: req.body.email,
              password: hashPassword,
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              role: "customer"
            });
            return res.status(200).redirect("/login");
          }
          
          res.status(200).render("signup", {data: req.body, errorMessage: res.locals.error});
    
    
    
        } catch (error) {
          errors[500](req, res);
        }
      },
}

export default signupController;