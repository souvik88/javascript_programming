/* traversing an array using for loop */
var arr = [10, 25, 7, 100, 20]; // initialise arr
// iterate array from start to end
for(var i = 0; i < arr.length; i++){
  console.log("for loop", arr[i]);
}
console.log("indexing complete");

/* traversing an array using while loop */
var arr1 = [10, 25, 7, 100, 20]; // initialise arr
// iterate array from start to end
var j = 0;
while(j < arr1.length){
  console.log("while loop", arr1[j]);
  j++;
}
console.log("indexing complete");

/* iterate only odd indices  */
var arr3 = [10, 25, 7, 100, 20]; // initialise arr
// iterate array from start to end
for(var k = 1; k < arr.length; k+=2){
  console.log("iterating only odd indices", arr3[k]);
}
console.log("indexing complete");

