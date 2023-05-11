(function findName() {
    const a = 'This is private'
    return 'hello'
})()

// () grouping operator  cannot access IIFE in global space
(() => 'PRIVATE')()