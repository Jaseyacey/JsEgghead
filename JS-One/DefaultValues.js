// Defining a function named greet that takes two optional parameters, greeting and name
function greet(greeting = "Whats up", name = "Jason") {
    // Logging a message to the console that concatenates the values of greeting and name
    console.log(greeting + ', ' + name);
}

// Calling the greet function without any arguments, which will use the default values of greeting and name
greet();
// Calling the greet function without any arguments, which will use the default new values of greeting and name
greet('This is a test', 'Jason')