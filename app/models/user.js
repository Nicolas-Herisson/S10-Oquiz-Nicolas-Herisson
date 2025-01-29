import Query from './query.js';


export default class User extends Query {
    #id;
    #email;
    #password;
    #first_name;
    #last_name;
    #role;
//findll byId byEmail insert update delete
    constructor(id, email, password, first_name, last_name, role) {
        super("user");
        this.#id = id;
        this.#email = email;
        this.#password = password;
        this.#first_name = first_name;
        this.#last_name = last_name;
        this.#role = role;
    }

    get id() {
        return this.#id;
    };

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