// using for loop in reverse, my example!
var arr2 = ['tommy', 'sam', 'car', 2, 4, 5];
for(var k = arr2.length - 1; k >= 0; k--) {
  console.log(`My "for" loop in reverse example: ${arr2[k]}`);
}
console.log("indexing complete");

// using for loop in reverse (odd), my example!
var arr3 = ['tommy', 'sam', 'car', 2, 4, 5];
for(var l = arr3.length - 1; l >= 0; l-=2) {
  console.log(`My "for" loop in reverse (odd) example: ${arr3[l]}`);
}
console.log("indexing complete");

// using while lopp in reverse, my example!
var arr4 = ['bus', 'train', 3, 8, 10, 'rocket'];
var m = arr4.length - 1;
while(m >= 0) {
  console.log(`My "while" loop in reverse example: ${arr4[m]}`);
  m--;
}
console.log("indexing complete");


// using while loop in reverse (odd), my example!
var arr5 = ['bus', 'train', 3, 8, 10, 'rocket'];
var n = arr5.length - 1;
while(n >= 0) {
  console.log(`My "while" loop in reverse (odd) example: ${arr5[n]}`);
  n-=2;
}
console.log("indexing complete");