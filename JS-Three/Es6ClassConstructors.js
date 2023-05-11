// Define a class named Person that extends Object
class Person extends Object {
  // Define a constructor method that takes two parameters, name and age
  constructor(name, age) {
    // Call the constructor of the parent class Object
    super();
    // Set the instance variables name and age to the values passed in as parameters
    this.name = name;
    this.age = age;
  }
}

// Define a class named Employee that extends Person
class Employee extends Person {
  // Define a constructor method that takes three parameters: name, age, and role
  constructor(name, age, role) {
    // Call the constructor of the parent class Person with the name and age parameters
    super(name, age);
    // Set the instance variable role to the value passed in as a parameter
    this.role = role;
  }
}

// Create an instance of the Employee class with name "Jason", age 38, and role "Developer"
const thisIsMeImTheProblemItsMe = new Employee("Jason", 38, "Developer");

// Output the age property of the thisIsMeImTheProblemItsMe object to the console
console.log("WhoIsTheProblem", thisIsMeImTheProblemItsMe);
