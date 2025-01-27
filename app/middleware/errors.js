const errors = {
    404: (res) => {
        res.status(404).render("404");
    },
    500: (res) => {
        res.status(500).render("500");
    }
};

export default errors;
