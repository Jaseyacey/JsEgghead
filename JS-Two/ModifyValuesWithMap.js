const items = [1, 2, 3, 4, 5]

const mapped = items.map(function(item) {
    return item * 2
})

console.log(mapped)

const ChangeToNumber = ["1", "2", "3", "4", "5", "6", ]

const mappedToNumber = ChangeToNumber.map(function(item) {
    return Number(item)
})

console.log(mappedToNumber)

const NoWhiteSpace = [" White ", "Space ", "all over the place   ", "  here too"]

const mappedNoWhiteSpace = NoWhiteSpace.map(x => x.trim());

console.log(mappedNoWhiteSpace)


const addingToTheArray = ["Jason", "Bailey", "Beedle"]

const mappedAddingToTheArray = addingToTheArray.map(function (name) {
    return {
        firstName: name
    }
})


console.log(mappedAddingToTheArray)