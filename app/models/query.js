import client from "../database/client.js";

export default class Query {

    constructor() {
    }

    static async find(table, property, value) {
        const result = await client.query({
            text: `SELECT * FROM "${table}" WHERE ${property} = $1;`, 
            values: [value]
        });

        return result.rows;
    }

    static async findAll(table) {
        console.log(`in findAll ${table}`); 
        const result = await client.query(`SELECT * FROM "${table}";`); 
        console.log(result.rows);
        return result.rows;
    }

    static async insert(object) {
        const result = await client.query({
            text: `INSERT INTO "${object.table}" (${object.property}) VALUES ($1) RETURNING *;`, 
            values: [object.value]
        });

        return result.rows[0];
    }

    static async update(table, setProperty, setValue, conditionnalProperty, conditionnalValue) {
        const result = await client.query({
            text: `UPDATE "${table}" SET ${setProperty} = $1 WHERE ${conditionnalProperty} = $2 RETURNING *;`, 
            values: [setValue, conditionnalValue]
        });

        return result.rows[0];
    }

    static async delete(object) {
        await client.query({
            text: `DELETE FROM "${object.table}" WHERE ${object.property} = $1;`, 
            values: [object.value]
        });
    }
}
