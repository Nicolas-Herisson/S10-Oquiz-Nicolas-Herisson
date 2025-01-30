export default class Quiz {
    // # is private
    #id;
    #title;
    #description;
    #authorId;

    constructor(id, title, description, authorId)
    {
        this.#id = id;
        this.#title = title;
        this.#description = description;
        this.#authorId = authorId;
    };

    /* Other way, with object :
    constructor(object)
    {
        this.#id = object.id;
        this.#title = object.title;
        this.#description = object.description;
        this.#authorId = object.authorId;
    };
    */

    // GETTEUR
    get id() {
        return this.#id;
    };

    get title() {
        return this.#title;
    };

    get description() {
        return this.#description;
    };

    get authorId() {
        return this.#authorId;
    };

    //SETTEUR
    set title(title) {
        if (typeof id !== "string")
            throw new Error("id must be a string");
        this.#title = title;
    }

    set description(description) {
        if (typeof id !== "string")
            throw new Error("id must be a string");
        this.#description = description;
    }

    set authorId(authorId) {
        if (typeof id !== "integer")
            throw new Error("id must be an integer");
        this.#authorId = authorId;
    }
};