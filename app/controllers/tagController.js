  import errors from '../middleware/errors.js';
import {Tag} from '../models/v2/associations.js'
  
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

      res.render('tags', {tags});

    } catch (error) {
      errors[500](req,res, error);
    }
  },
}

export default tagController;