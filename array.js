// declare
// iterator
// len
// access
let arr1 = []
let arr2 = new Array()
let arr3 = new Array(4)

let arr4 = [1,2,3,4,5]

console.log("arr1: " + arr1)
console.log("arr2: " + arr2)
console.log("arr3: " + arr3)
console.log("arr4: " + arr4)

console.log("arr4: ")
arr4.forEach(e => {
    console.log(e)
})

let arr4Len = arr4.length
console.log("arr4 length: " + arr4Len)

console.log("arr4[1]: " + arr4[1])

console.log("index of arr4: " + arr4.indexOf(2))

arr4.push("332")
console.log("index of arr4: " + arr4.indexOf("332"))

let a = arr4.pop() 
console.log("arr4: " + arr4)
console.log("arr4: " + a)
