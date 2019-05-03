let Person = require("./Person.js")
let minh = new Person("Minh", 20)
let hoang = new Person("Hoang", 22)

console.log(minh.getName())
console.log(minh.getAge())

minh.name = "Minh2"
console.log(minh.getName())
console.log(minh.getAge())
console.log(minh.name)
