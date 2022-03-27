var arr = [1, "souvik", NaN, 3, "kundu"];
var countString = arr.map(ele => typeof ele === "string" ? 1 : 0);
var sum = countString.reduce((prev, curr) => prev + curr);
console.log("arr is: ", arr);
console.log("array from map variable countString is: ", countString);
console.log("array from reduce variable sum is: ", sum);


var arr1 = [2, 4, "hello", 0, NaN, "world", 99, "hippo"];
var countString1 = arr1.map(ele => {
    return typeof ele === "string" ? 1 : 0
}).reduce((prev1, curr1) => prev1 + curr1);
console.log("arr1: ", arr1);
console.log("countString1: ", countString1);

