class Person {
    constructor(name, age) {
        this._name = name
        this.age = age
    }

    get name() {
        return this._name
    }
    set name(name) {
        this._name = name
    }

    getName() {
        return this._name
    }
    getAge() {
        return this.age
    }
}

module.exports = Person
