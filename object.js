var Person = {
    name: "Name",
    age: 20,
    getPersonInfo: function() {
        console.log("name is: " + this.name)
        console.log("age is: " + this.age)
    }
}

Person.getPersonInfo()

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
}

let m = new  Person('minh', 20)
console.log("Name: " + m.getName(), ", Age: " + m.getAge())
