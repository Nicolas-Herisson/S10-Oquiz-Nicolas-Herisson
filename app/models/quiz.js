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
    getId() {
        return this.#id;
    };

    getTitle() {
        return this.#title;
    };

    getDescription() {
        return this.#description;
    };

    getAuthorId() {
        return this.#authorId;
    };

    //SETTEUR
    setTitle(title) {
        if (typeof id !== "string")
            throw new Error("id must be a string");
        this.#title = title;
    }

    setDescription(description) {
        if (typeof id !== "string")
            throw new Error("id must be a string");
        this.#description = description;
    }

    setAuthorId(authorId) {
        if (typeof id !== "integer")
            throw new Error("id must be an integer");
        this.#authorId = authorId;
    }
};