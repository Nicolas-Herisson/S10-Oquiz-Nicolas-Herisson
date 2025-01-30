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

    get id() {
        return this.#id;
    };

    get answer() {
        return this.#answer;
    };

    get title() {
        return this.#title;
    };

    get is_valid() {
        return this.#is_valid;
    };

    get id_question() {
        return this.#id_question;
    };


    set answer(answer) {
        this.#answer = answer;
    };

    set title(title) {
        this.#title = title;
    };

    set is_valid(is_valid) {
        this.#is_valid = is_valid;
    };

    set id_question(id_question) {
        this.#id_question = id_question;
    };
};