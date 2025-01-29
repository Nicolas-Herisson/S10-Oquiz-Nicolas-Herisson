import client from "../database/client.js";

export default class Level {
    #id;
    #name;

    constructor(id, name)
    {
        this.#id = id;
        this.#name = name;
    };

    // GETTERs
    get id() {
        return this.#id;
    };

    get name() {
        return this.#name;
    };

    //SETTERs
    set name(name) {
        if (typeof id !== "string")
            throw new Error("id must be a string");
        this.#name = name;
    }

    //METHODs
    async insert() {
        const result = await client.query({
            text: "INSERT INTO level (name) VALUES ($1) RETURNING *;",
            values: [this.#name]
        });

        this.#id = result.rows[0].id;
    };

    async update() {
        await client.query({
            text: "UPDATE level SET name = $1 WHERE id = $2;",
            values: [this.#name, this.#id]
        });

        return this;
    };

    async delete() {
        await client.query({
            text: "DELETE FROM level WHERE id = $1;",
            values: [this.#id]
        });

        this.#id = undefined;
    };
};