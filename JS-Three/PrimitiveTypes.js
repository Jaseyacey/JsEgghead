// all types in JS... 

console.log(typeof "Hello World") // string
console.log(typeof 1) // Number
console.log(typeof false) // boolean
console.log(typeof 42n) // bigint
console.log(typeof Symbol()) // symbol
console.log(typeof null) // object
console.log(typeof undefined) // undefined


let obj = {a : 1}
// same variable as the obj
function addTwo(obj) {
    obj.a = 2
}

addTwo(obj)

console.log(obj)

let num = 1

function addTwo(num) {
    num = num + 2
    console.log(num) // 3
}

addTwo(num)

// This is one because it is referencing the num above 
console.log(num) // 1