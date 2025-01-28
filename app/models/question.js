class Question {
    #id;
    #title;
    #anecdote;
    #id_level;
    #id_quiz;

    constructor(id, title, anecdote, id_level, id_quiz) {
        this.#id = id;
        this.#title = title;
        this.#anecdote = anecdote;
        this.#id_level = id_level;
        this.#id_quiz = id_quiz;
    };

    getId() {
        return this.#id;
    };

    getTitle() {
        return this.#title;
    };

    getAnecdote() {
        return this.#anecdote;
    };

    getIdLevel() {
        return this.#id_level;
    };

    getIdQuiz() {
        return this.#id_quiz;
    };


    setTitle(title) {
        this.#title = title;
    };

    setAnecdote(anecdote) {
        this.#anecdote = anecdote;
    };

    setIdLevel(id_level) {
        this.#id_level = id_level;
    };

    setIdQuiz(id_quiz) {
        this.#id_quiz = id_quiz;
    };
};