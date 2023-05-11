// Create an array called "person" with six elements
const person = ['one', 'two', 'three', 'four', 'five', 'six'];

// Use the slice method to create a new array called "copy" 
// that contains elements 4 and 5 from the "person" array
const copy = person.slice(4, 6);

// Log the "copy" array to the console
console.log('This will copy the array', copy);

// Create an object called "name" with a single property called "name"
const name = {
    name: 'Jason-Byron Beedle',
}

// Create an object called "filters" with two properties, each of which is a function
// that takes a string and applies a transformation to it
const filters = {
    'deslugify': x => x.replace('-', ' '),
    'uppercase': x => x.toUpperCase(),
}

// Create a string called "input" that contains a series of pipe-separated
// sections, with each section representing a filter to apply to the "name" property
const input = 'name | deslugify | uppercase';

// Split the "input" string into an array of individual sections by splitting on the "|" character
// and then use the "map" method to remove any leading or trailing whitespace from each section
const sections = input.split('|').map(x => x.trim());

// Look up the value of the "name" property on the "name" object and assign it to a variable called "ref"
const ref = name[sections[0]];

// Use the "reduce" method to apply each filter in turn to the "ref" value, starting with the value of "ref"
// and then passing the result of each filter to the next filter in the chain
const output = sections
    .slice(0)
    .reduce((prev, next) => {
        if (filters[next]) {
            return filters[next].call(null, prev);
        }
        return prev;
    }, ref);

// Log the final output value to the console
console.log(output);
