const items = [1, 2, 3, 34, 5, ]

const result = items.every(x => {
    console.log('CALLED WITH', x)
    return x < 5
});

console.log(result)
// CALLED WITH 1
// CALLED WITH 2
// CALLED WITH 3
// CALLED WITH 34
// false

const itemsWithStrings = ["1", 2, "3", 34, "5", ]

const resultOfStringCheck = itemsWithStrings.every(x => typeof x === 'string')

console.log(resultOfStringCheck)
// false

const fields = [
    {
        field: 'email',
        value: 'jas@jas.com',
        errors: []
    },
    {
        field: 'name',
        value: 'Jason',
        errors: ['No name provided']
    }
]

const isValid = fields.every(x => x.errors.length === 0)
console.log('ANY ERRORS', isValid)
// ANY ERRORS false

const videos = [
    {
        field: 'This is a video length',
        length: 310,
        viewed: 310,
    },
    {
        field: 'This is a video length too did you watch it all?',
        length: 420,
        viewed: 310,
    }
]

const isComplete = videos.every(x => x.viewed === x.length)
console.log('Are the videos complete? ', isComplete)
// Are the videos complete? false