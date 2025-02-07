  import {Quiz} from '../models/v2/associations.js';
  import errors from '../middleware/errors.js';

  const quizController = 
  {
    showQuizPage: async (req, res) => {
        try {
        const quizId = parseInt(req.params.id);
        
        const quiz = await Quiz.findOne({
            where: {id: quizId},
            attributes: ['id','description', 'title'],
            include: [
            {
                association: 'questions',
                attributes: ['description', 'anecdote'],
                include: [
                {
                    association: 'answers',
                    attributes: ['description'],
                },
                {
                    association: 'level',
                    
                },
                ]
            },
            
            {
                association: 'user',
                attributes: ['firstname', 'lastname', 'created_at'],
            },
            {
                association: 'tags',
                attributes: ['name'],
            },
            ],
        });

        if (!quiz) 
            return errors[404](req, res);

        res.status(200).render("quiz", { quiz});

        } catch (error) {
            errors[500](req,res, error);
        }
    },
}

export default quizController;