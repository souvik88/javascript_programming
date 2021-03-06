/*
    This is multidimensional array / nested loop
    Learn how to iterate in a multidimensional array / nested loop
*/

// create a multidimensional array variable called *car*
let car = [
    ['bmw', 'mercedes', 'toyota'],
    ['suzuki', 'porche', 'lamborgini'],
    ['audi', 'subaru', 'ford']
];
// now it iterates through the multidimensional array and prints the values on screen respectively
for(var i=0; i < car.length; i++) {
    for(var j=0; j < car[i].length; j++) { // *j* is an iterator 
        console.log(car[i][j]);
    }
    console.log("the row ends here"); // every time a row ends and moves to the next row, it prints "row ends here"
}
console.log("indexing complete");