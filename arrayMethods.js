var arr = [10, 20, 30, 40, 50]; // initialise an array and assign to arr
arr.forEach((val, ind, array) => { // arrow function to print arguments
    console.log("Value:", val, " Index:", ind, " arr:",array); // print values
    });
console.log(arr); // print array assigned to arr