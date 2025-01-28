class Tag {
    #id;
    #name;

    constructor(id, name)
    {
        this.#id = id;
        this.#name = name;
    };

    // GETTERs
    getId() {
        return this.#id;
    };

    getName() {
        return this.#name;
    };

    //SETTERs
    setName(name) {
        if (typeof id !== "string")
            throw new Error("id must be a string");
        this.#name = name;
    }
};