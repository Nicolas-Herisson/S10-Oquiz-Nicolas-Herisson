import * as argon2 from "argon2";

const signupController = {
    showSignupPage: async (req, res) => {
        try {
          res.status(200).render("signup", {userId: req.session.userId});
    
        } catch (error) {
          res.status(500).error(error);
        }
      },
      redirectLoginPage: async (req, res) => {
        try {
          // On hash le password renseigne
          const hashPassword = await argon2.hash(req.body.password);
    
          await User.create({
            email: req.body.email,
            password: hashPassword,
            firstname: req.body.firstname,
            lastname: req.body.lastname
          });
          
          return res.status(200).redirect("login");
    
    
    
        } catch (error) {
          res.status(500).error(error);
        }
      },
}

export default signupController;