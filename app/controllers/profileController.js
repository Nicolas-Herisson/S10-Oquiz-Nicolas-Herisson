import errors from "../middleware/errors.js";


const profileController = {
    showProfilePage: async (req, res) => {
        try {
          res.status(200).render('profile');
        } catch (error) {
          errors[500](req,res);
        }
      },
}

export default profileController;