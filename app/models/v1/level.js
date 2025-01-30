import client from "../../database/client.js";

export default class Level extends Query {
    #name;

    constructor(obj)
    {
        super(obj);
        this.#name = obj.name;
    };

    // GETTERs

    get name() {
        return this.#name;
    };

    //SETTERs
    set name(name) {
        if (typeof id !== "string")
            throw new Error("id must be a string");
        this.#name = name;
    }

};