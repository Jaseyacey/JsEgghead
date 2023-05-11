var myMap = new Map();

// API
/*
set()
get()
size
clear()
has()
*/

// Setting values
myMap.set('foo', 'bar');

// Getting values
// This will return false because the key 'fasdasdoo' does not exist
console.log('should be false;', myMap.has( 'fasdasdoo'));

// This will return true because the key 'foo' does exist
console.log('should be true;',myMap.has('foo'));

// This will return the value of the key 'bar'
console.log('should be bar;',myMap.get('foo'));

// This will return the size of the map, which is 1
console.log('should be 1;',myMap.size);

//This will clear the map
myMap.clear();


// This will return the size of the map, which is 0 after being cleared
console.log('should be 0;',myMap.size);

// This will return false because the key 'foo' does not exist after being cleared
console.log('should be false;',myMap.has('foo'));