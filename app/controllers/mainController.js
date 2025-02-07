import errors from '../middleware/errors.js';
import { Quiz } from '../models/v2/associations.js';

// Tout ce qui est en lien avec la page d'accueil
const mainController = {
  // On crée une nouvelle méthode pour afficher la page d'accueil
  showHomepage: async (req, res) => {
    try {
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

      if (!req.session.userId)
        req.session.userId = 2;

      res.status(200).render('index', { quizzes});

    } catch (error) {
        errors[500](req,res, error);
    }
  },


};

export default mainController;
