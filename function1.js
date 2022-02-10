function sum(a, b){
    console.log("adding the values");
    return a + b;
}

var varA = 10;
var varB = 20;
var varSum = sum;
console.log(varSum(varA, varB));
