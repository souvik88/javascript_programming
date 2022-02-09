/*
Task#

A demographist wants to find the total population within a demographic. 
This demographic is in a region with a temperature less than or equal to 10°C. 
However, with a limited programming background, 
the demographist has asked for your help!

Your task: is to find the sum of the population in a 
two-dimensional array of objects which reside in a region of 
temperature less than or equal to 10°C. Each object consists of the 
region information.

Problem statement:

You are given one variable named raw_array, assigned to a two-dimensional 
array consisting of objects. Each object has the following properties:

name: This is assigned to a string with the value of the city’s name 
in which the population resides. Example, {name: "Sydney"}

population: This is assigned to a number with the value of the quantity 
of the residing population. Example, {population: 1250000}

temp: This is assigned to a number with the value of the temperature 
(in °C) of the region. Example, {temp: 3.0}

currency: This is assigned to a string with the value of the currency 
code of the city in which the population resides. Example, {currency: "AUD"}
*/

// solution below

var raw_arr = [
    [
      {name: "NewYork", population: 8623000, temp: 6.0, currency: 'USD'}, 
      {name: "Boston", population: 685094, temp: 2.0, currency: 'USD'}, 
      {name: "Los Angeles", population: 4000000, temp: 13.0, currency: 'USD'}
    ],
    [
      {name: "San Francisco", population: 884363, temp: 12.0, currency: 'USD'}, 
      null, 
      {name: "Charlottesville", population: 48019, temp: 8.0, currency: 'USD'}
    ],
    [
      null, 
      {name: "Seattle", population: 724745, temp: 4.0, currency: 'USD'}, 
      null
    ],
  ]; // initialize the two-dimensional array of objects
  
  var ans = 0; // initialize ans to 0 (Sum of population)
  
  // Iterate raw_arr in the following loop
  for(var i = 0; i < raw_arr.length; i++){ 
    // Iterate the array at each index i of raw_arr
    for(var j = 0; j < raw_arr[i].length; j++){
      // For each element at row i and column j
      // Check the following conditions
      if(raw_arr[i][j] !== null){ // Check if not null
        if(raw_arr[i][j]['temp'] <= 10.0){ // Check if less or equal to 10
            ans += raw_arr[i][j]['population']; // if satisfied, add to ans
        }
      }
    }
  }
  
  console.log('final ans:', ans);

// raw_arr = raw_arr; // original data array
// ans = 0; // final answer
// for(var i = 0; i < raw_arr.length; i++){
//    for(var j =0; j < raw_arr[i].length; j++){
//        if(raw_arr[i][j] !== null){
//            if(raw_arr[i][j]['temp'] <= 10.0){
//               ans += raw_arr[i][j]['population'];
//             }
//         }
//     }
// }