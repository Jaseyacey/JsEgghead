const person = {
    firstName: 'Jason',
    getName: ()  => {
        console.log('FIRSTNAME', `${this.firstName}`)
    }
}

console.log(person.getName)

// lexical scope is the author function scope

