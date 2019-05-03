// +, concat, trim
// split
// indexOf
// replace

let ten_bien = 1;
console.log("ten_bien", ten_bien);
console.log("Hello world");
let str1 = "Hello Tony";
let str2 = " Hehe ";
let s = str1 + str2;
console.log("s: " + s);

s = str2.concat(str1)
console.log("s: " + s);

s = str2.concat(str1)
console.log(`trim():  + ${s.trim()}`);
console.log("trim(): " + s.trim());

let sp1 = s.split(" ")
console.log("split: " + sp1)


let sp2 = s.split("o")
console.log("split: " + sp2)


let sp3 = s.split("")
console.log("split: " + sp3)


console.log("indexOf: " + s.indexOf(str1))
console.log("indexOf: " + s.indexOf(str2))
console.log("indexOf: " + s.indexOf("d"))

console.log("replace: " + s.replace("e", "o"))