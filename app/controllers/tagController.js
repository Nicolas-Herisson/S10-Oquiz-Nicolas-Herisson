  import {Tag, Quiz} from '../models/v2/associations.js'
  
  const tagController = {
  showTagsPage:async (req, res) => {
    try {
      const tags = await Tag.findAll({
       attributes: ['name'],
        include: [
          {
            association: 'quizzes',
            attributes: ['id','title'],
          },
        ],
     }
    );

      res.render('tags', {tags, userId: req.session.userId});

    } catch (error) {
      res.status(500).error(error);
    }
  },
}

export default tagController;