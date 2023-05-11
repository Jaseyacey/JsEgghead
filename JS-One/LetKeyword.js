// Declaring a variable named message and assigning the value "hi"
var message = "hi"  

// Creating a new block with braces
{
    // Declaring a variable named message within the block and assigning the value "bye"
    var message = "bye"
}

// Logging the value of message to the console, which is "bye" because the previous variable declaration also affected the outer scope
console.log('VAR', message) // bye

// Declaring a variable named greeting with the value "hi" using let, which is block-scoped
let greeting = "hi"

// Creating a new block with braces
{
    // Declaring a variable named greeting within the block with the value "bye", which only affects this block
    let greeting = "bye"
}

// Logging the value of greeting to the console, which is "hi" because the previous variable declaration within the block does not affect the outer scope due to let being block-scoped
console.log('LET', greeting) // hi

// Declaring an empty array named fs
var fs = [];

// Using a for loop with var to push a function that logs the current value of i to the fs array
for (var i = 0; i < 10; i++) {
    fs.push(function() {
        console.log('FOR LOOP WITH VAR', i)
    })
}

// Calling the functions within the fs array using forEach, which logs 10 because the final value of i in the for loop was 10 and var is function-scoped, so all the functions within fs reference the same variable i
fs.forEach(function(f) {
    f()
})

// Using a for loop with let to push a function that logs the current value of i to the fs array
for (let i = 0; i < 10; i++) {
    fs.push(function() {
        console.log('FOR LOOP WITH LET', i)
    })
}

// Calling the functions within the fs array using forEach, which logs the values of i from 0 to 9 because let is block-scoped and each iteration of the for loop creates a new variable i within its own block
fs.forEach(function(f) {
    f()
})
// Declaring a variable named message and assigning the value "hi"
var message = "hi"  

// Creating a new block with braces
{
    // Declaring a variable named message within the block and assigning the value "bye"
    var message = "bye"
}

// Logging the value of message to the console, which is "bye" because the previous variable declaration also affected the outer scope
console.log('VAR', message) // bye

// Declaring a variable named greeting with the value "hi" using let, which is block-scoped
let greeting = "hi"

// Creating a new block with braces
{
    // Declaring a variable named greeting within the block with the value "bye", which only affects this block
    let greeting = "bye"
}

// Logging the value of greeting to the console, which is "hi" because the previous variable declaration within the block does not affect the outer scope due to let being block-scoped
console.log('LET', greeting) // hi

// Declaring an empty array named fs
var fs = [];

// Using a for loop with var to push a function that logs the current value of i to the fs array
for (var i = 0; i < 10; i++) {
    fs.push(function() {
        console.log('FOR LOOP WITH VAR', i)
    })
}

// Calling the functions within the fs array using forEach, which logs 10 because the final value of i in the for loop was 10 and var is function-scoped, so all the functions within fs reference the same variable i
fs.forEach(function(f) {
    f()
})

// Using a for loop with let to push a function that logs the current value of i to the fs array
for (let i = 0; i < 10; i++) {
    fs.push(function() {
        console.log('FOR LOOP WITH LET', i)
    })
}

// Calling the functions within the fs array using forEach, which logs the values of i from 0 to 9 because let is block-scoped and each iteration of the for loop creates a new variable i within its own block
fs.forEach(function(f) {
    f()
})
