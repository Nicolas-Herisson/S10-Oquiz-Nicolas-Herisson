class Answer {
    #id;
    #answer;
    #title;
    #is_valid;
    #id_question;

    constructor(id, answer, title, is_valid, id_question) {
        this.#id = id;
        this.#answer = answer;
        this.#title = title;
        this.#is_valid = is_valid;
        this.#id_question = id_question;
    };

    getId() {
        return this.#id;
    };

    getAnswer() {
        return this.#answer;
    };

    getTitle() {
        return this.#title;
    };

    getIdLevel() {
        return this.#is_valid;
    };

    getIdQuiz() {
        return this.#id_question;
    };


    setAnswer(answer) {
        this.#answer = answer;
    };

    setTitle(title) {
        this.#title = title;
    };

    setIdLevel(is_valid) {
        this.#is_valid = is_valid;
    };

    setIdQuiz(id_question) {
        this.#id_question = id_question;
    };
};