// Define a generator function that logs a message and yields "Hello World"
function* greet() {
    console.log(`You called 'next()'`);
    yield "Hello World"
}

// Create an instance of the generator and assign it to the variable 'greeter'
let greeter = greet()

// Log the 'greeter' object to the console
console.log(greeter)

// Assign the 'next' method of the 'greeter' object to the 'next' variable
let next = greeter.next

// Log the 'next' method to the console
console.log(next);

// Call the 'next' method of the 'greeter' object, which will cause the generator
// to execute up to the next yield statement and return an object with a 'value'
// property set to "Hello World" and a 'done' property set to 'false'
let done = greeter.next()

// Log the object returned by the 'next' method to the console
console.log(done)
