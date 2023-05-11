// Declaring variables firstName and lastName and assigning values to them
let firstName = 'Jason'
let lastName = 'Beedle'

// Creating an object named person with properties firstName, lastName and a method sayHi
let person = {
    firstName, // Shorthand property assignment, equivalent to firstName: firstName
    lastName, // Shorthand property assignment, equivalent to lastName: lastName
    sayHi() { // Shorthand method definition, equivalent to sayHi: function() {}
        console.log(`Hi ${firstName}`) // Using template literals to log a message to the console with the value of firstName
    }
}

// Calling the sayHi method of the person object, which logs a message to the console
person.sayHi()