const person = {
    firstName: 'Bailey'
}

function getName() {
    return `${this.firstName} is my dogs name`
}

console.log(getName.call(person))