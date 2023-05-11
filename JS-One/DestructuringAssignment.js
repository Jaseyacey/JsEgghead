// Define an object with two properties
const Information = {
    name: "Jason",
    age: 30,
}

// Extract the values of the "name" and "age" properties from the object using destructuring
const { name, age } = Information;

// Log the values of "name" and "age" to the console
console.log(name);
console.log(age);

// Define an array of numbers
var [first, second] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Extract the value of the second element of the array using destructuring
console.log(second);

// Define an array of objects
var people = [
    {
        name: "Jason",
        age: 30
    },
    {
        name: "John",
        age: 25
    },
    {
        name: "Jane",
        age: 20
    }
]

// Iterate over the array using the "forEach" method and extract the "name" and "age" properties of each object
people.forEach(({ name, age }) => {
    // Log the "name" and "age" values to the console
    console.log(name, age);
})
