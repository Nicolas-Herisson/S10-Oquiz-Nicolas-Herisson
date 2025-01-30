import Query from './query.js';


export default class User extends Query {

    #email;
    #password;
    #first_name;
    #last_name;
    #role;
    static tableName = "user";
//findll byId byEmail insert update delete
    constructor(obj) {
        super(obj);
        this.#email = obj.email;
        this.#password = obj.password;
        this.#first_name = obj.first_name;
        this.#last_name = obj.last_name;
        this.#role = obj.role;
    }

    get email() {
        return this.#email;
    };

    get password() {
        return this.#password;
    };

    get first_name() {
        return this.#first_name;
    };

    get last_name() {
        return this.#last_name;
    };

    get role() {
        return this.#role;
    };

    set email(email) {
        this.#email = email;
    };

    set password(password) {
        this.#password = password;
    };

    set first_name(first_name) {
        this.#first_name = first_name;
    };

    set last_name(last_name) {
        this.#last_name = last_name;
    };

    set role(role) {
        this.#role = role;
    };
}