import Question from "./question.js";
import Answer from "./answer.js";
import Level from "./level.js";
import Quiz from "./quiz.js";
import User from "./user.js";

// one to many

Question.hasMany(Answer, {
    foreignKey: "question_id",
    as: "answers"
});

Answer.belongsTo(Question,{
        foreignKey: "question_id",
        as: "question"
    }
);

Level.hasMany(Question, {
        foreignKey: "level_id",
        as: "questions"
    }
);

Question.belongsTo(Level, {
        foreignKey: "level_id",
        as: "level"
    }
);

Quiz.hasMany(Question, {
        foreignKey: "quiz_id",
        as: "questions"
    }
);

Question.belongsTo(Quiz, {
        foreignKey: "quiz_id",
        as: "quiz"
    }
);

User.hasMany(Quiz, {
        foreignKey: "user_id",
        as: "quizs"
    }
);

Quiz.belongsTo(User, {
        foreignKey: "user_id",
        as: "user"
    }
);

export { Question, Answer, Level, Quiz, User };
export default { Question, Answer, Level, Quiz, User };