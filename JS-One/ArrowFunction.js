// Declaring a variable named createGreeting and assigning it an anonymous function expression with two parameters, message and name, 
// which concatenates the values of message and name and returns the result
var createGreeting = function(message, name) {
    return message + name;
}

// Declaring a variable named arrowGreeting and assigning it an arrow function with two parameters, message and name, 
// which concatenates the values of message and name and returns the result
var arrowGreeting = (message, name) => {
    return message + name;
}

// Using arrow function syntax to declare a constant named createGreeting with two parameters, message and name, 
// which concatenates the values of message and name and returns the result. 
// Since there is only one expression in the function body, it is implicitly returned.
const createGreeting = (message, name) => message + name;

// Using arrow function syntax to declare a constant named arrowGreeting with one parameter, message, which returns the string "Hello, World!"
const arrowGreeting = message => "Hello, World!";
