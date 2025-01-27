const mainController = {
    showHomePage: (req, res) => {
        res.render("index");
    },
    showTagsPage: (req, res) => {
        res.render("tags");
    },
    showLoginPage: (req, res) => {
        res.render("login");
    },
    showSignupPage: (req, res) => {
        res.render("signup");
    },
    showQuizPage: (req, res) => {
        res.render("quiz");
    },
};

export default mainController;
