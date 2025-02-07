const errors = {
    404: (req, res) => {
        res.status(404).render("404", {  });
    },
    500: (req, res, error) => {
        res.status(500).render("500", { error });
    }
};

export default errors;
