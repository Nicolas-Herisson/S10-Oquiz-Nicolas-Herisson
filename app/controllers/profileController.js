

const profileController = {
    showProfilePage: async (req, res) => {
        try {
          res.status(200).render('profile', {userId: req.session.userId});
        } catch (error) {
          res.status(500).error(error);
        }
      },
}

export default profileController;