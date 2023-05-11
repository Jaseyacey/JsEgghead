
// rest paramaters vs arguments keyword
function myFunc (...args) {
    console.log(args);
}

myFunc(1, 2, 3, 4, 5);

function Store() {
    var aisle = {
        fruit: [],
        vegetable: []
    }
    // Return an object that contains two properties: `add` and `aisle`
// Return an object that contains two properties: `add` and `aisle`
return {
    // Define a function called `add` that takes a category and a variable number of items and adds them to the corresponding category in the `aisle` object
    add: function(category, ...items) {
        // Log the items to the console
        console.log(items);
        // Iterate over the `items` array and add each item to the corresponding `category` array in the `aisle` object
        items.forEach(function(value, index, array) {
            aisle[category].push(value);
        });
    },
    // Include the `aisle` object as a property of the returned object
    aisle: aisle
    }
}
var myGroceryStore = new Store();

myGroceryStore.add('fruit', 'apples', 'oranges');
console.log(myGroceryStore.aisle);