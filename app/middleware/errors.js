const errors = {
    404: (req, res) => {
        res.status(404).render("404", { userId: req.session.userId });
    },
    500: (req, res) => {
        res.status(500).render("500", { userId: req.session.userId });
    }
};

export default errors;
