/*
    Objects are an unordered collection of data, the data item is a value 
    reference by a key / property name.

    To access the value, we use the property name (key) to refer to the data 
    item.
*/

// object methods
// Object.values method gives an array of values for a certain object
// example below

var places = {         // initializing object
    'americas': 'usa',
    'europe': 'uk',
    'asia': 'japan'
};

console.log(Object.values(places));

// output
/*
[ 'usa', 'uk', 'japan' ]
*/