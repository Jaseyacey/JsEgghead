// Initializing two arrays with some values
let first = [1, 2, 3]
let second = [4, 5, 6]

// Defining a function that takes three arguments and logs their sum to the console
function addThreeThings(a, b, c) {
    let result = a + b + c
    console.log(result)
}

// Calling the addThreeThings function with the spread operator to pass in the elements of the first array as arguments
addThreeThings(...first)

// Calling the addThreeThings function again with the spread operator to pass in the elements of the second array as arguments
addThreeThings(...second)