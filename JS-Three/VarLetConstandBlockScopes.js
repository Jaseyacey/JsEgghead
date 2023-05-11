// LET KEYWORD
let firstNameLet = 'Jason'
{
    let firstName = 'Bailey'
    console.log('LET IN OBJ', firstName) 
}
console.log('LET', firstNameLet)

// VAR KEYWORD
var firstNameVar = 'Jason'
{
    var firstName = 'Bailey'
    console.log('VAR IN OBJ', firstName) 
}

console.log('VAR', firstNameVar)

// CONST KEYWORD
const firstNameConst = 'Jason'
{
        const firstName = 'Bailey'
        console.log('CONST IN OBJ', firstName) 
}

console.log('CONST', firstNameConst)

const person = {
    firstName: 'Bailey',
    getName() {
       return `${this.firstName} is my dog`
    } 
}

console.log(person.getName())

