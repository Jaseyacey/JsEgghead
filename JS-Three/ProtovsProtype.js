function functionHere() {}
functionHere.prototype.test = 'Hello world'

console.log(functionHere.prototype) 

const name = new functionHere()

console.log(name.test)

// using prototype inheritance everytime you use proto in your code
