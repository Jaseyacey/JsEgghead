// Declare a constant variable 'salutation' and assign it the string value 'Hello'
const salutation = 'Hello';

// Declare a constant variable 'greeting' and assign it the string value of 'Hello, World!'
const greeting = `${salutation}, World!`;

// Output the value of the 'greeting' variable to the console
console.log(greeting);

// Declare a function called 'tag' that takes in two parameters:
// 1. An array of string literals
// 2. An array of interpolated values (using the spread operator to handle any number of values)
function tag (strings, ...values) {
    // If the first value in the 'values' array is less than 20 (i.e. it's before 8pm)
    if(values[0] < 20) {
        // Set the second value in the 'values' array to the string value 'awake'
        values[1] = 'awake';
    }
    // Return a string that combines the string literals and interpolated values
    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`;
}

// Output the result of calling the 'tag' function with a string literal and an empty interpolated value
// The string literal will include the current hour of the day as the first interpolated value, which will be used in the function to determine 
// whether the second interpolated value should be 'awake' or an empty string
console.log(tag`It's ${new Date().getHours()} I'm ${''}`);
