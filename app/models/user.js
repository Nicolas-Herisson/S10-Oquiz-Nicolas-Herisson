class User {
    #id;
    #email;
    #password;
    #first_name;
    #last_name;
    #role;

    constructor(id, email, password, first_name, last_name, role) {
        this.#id = id;
        this.#email = email;
        this.#password = password;
        this.#first_name = first_name;
        this.#last_name = last_name;
        this.#role = role;
    };

    getId() {
        return this.#id;
    };

    getEmail() {
        return this.#email;
    };

    getPassword() {
        return this.#password;
    };

    getFirstName() {
        return this.#first_name;
    };

    getLastName() {
        return this.#last_name;
    };

    getRole() {
        return this.#role;
    };

    setEmail(email) {
        this.#email = email;
    };

    setPassword(password) {
        this.#password = password;
    };

    setFirstName(first_name) {
        this.#first_name = first_name;
    };

    setLastName(last_name) {
        this.#last_name = last_name;
    };

    setRole(role) {
        this.#role = role;
    };
}