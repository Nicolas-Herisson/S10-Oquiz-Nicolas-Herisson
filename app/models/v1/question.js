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

    get id() {
        return this.#id;
    };

    get title() {
        return this.#title;
    };

    get anecdote() {
        return this.#anecdote;
    };

    get id_level() {
        return this.#id_level;
    };

    get id_quiz() {
        return this.#id_quiz;
    };


    set title(title) {
        this.#title = title;
    };

    set anecdote(anecdote) {
        this.#anecdote = anecdote;
    };

    set id_level(id_level) {
        this.#id_level = id_level;
    };

    set id_quiz(id_quiz) {
        this.#id_quiz = id_quiz;
    };
};