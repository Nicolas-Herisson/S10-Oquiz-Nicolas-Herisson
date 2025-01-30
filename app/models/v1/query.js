import client from "../../database/client.js";

export default class Query {

    id;
    created_at;
    updated_at;

    static tableName = null;

    constructor(obj) {
        this.id = obj.id;
        this.created_at = obj.created_at;
        this.updated_at = obj.updated_at; 
    };

    get id() {
        return this.id;
    };

    static async find(property, value) {
        const result = await client.query({
            text: `SELECT * FROM "${this.tableName}" WHERE ${property} = $1;`, 
            values: [value]
        });

        return result.rows;
    }

    static async findAll() {
        const result = await client.query(`SELECT * FROM "${this.tableName}";`); 

        return result.rows;
    }

    static async insert(object) {
        const result = await client.query({
            text: `INSERT INTO "${this.tableName}" (${object.property}) VALUES ($1) RETURNING *;`, 
            values: [object.value]
        });

        return result.rows[0];
    }

    static async update(setProperty, setValue, conditionnalProperty, conditionnalValue) {
        const result = await client.query({
            text: `UPDATE "${this.tableName}" SET ${setProperty} = $1 WHERE ${conditionnalProperty} = $2 RETURNING *;`, 
            values: [setValue, conditionnalValue]
        });

        return result.rows[0];
    }

    static async delete(object) {
        await client.query({
            text: `DELETE FROM "${this.tableName}" WHERE ${object.property} = $1;`, 
            values: [object.value]
        });
    }
}
