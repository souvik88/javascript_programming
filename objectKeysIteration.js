var obj = {'one': 1, 'two': 2, 'three': 3}; // initialize an object

var keys = Object.keys(obj); // Create an array of keys of obj
console.log(typeof keys[1], keys[1]);
console.log(typeof obj[keys[2]]);
console.log(obj['two']);
console.log(keys);
for(var i = 0; i < keys.length; i++){
    console.log("key:",keys[i], "value:",obj[keys[i]]); // print key and value
}

/*
var obj = {'one': 1, 'two': 2, 'three': 3}; // initialise an object
var keys = Object.keys(obj); // Create an array of keys of obj

for(var i = 0; i < keys.length; i++){
    console.log("key:",keys[i], "value:",obj[keys[i]]); // print key and value
}

var obj = {'one': 1, 'two': 2, 'three': 3}; // initialize an object
var keys = Object.keys(obj); // Create an array of keys of obj

This will create an array of [ 'one', 'two', 'three' ] in variable keys

Will variable keys have access to the values of variable obj: 1, 2, and 3? If yes, does it  mean variable keys is keeping a reference of values stored in variable obj?

No, keys is a new array containing strings that are your object's keys, but you can still use a list item containing the key to access the value in the object:

console.log( obj[keys[0]] ); // 1


keys[0] access the first item in the array which would be "one" and since obj["one"] is 1 so prints 1 to the console

*/