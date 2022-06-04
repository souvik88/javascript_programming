// javascript generators

// simple javascript generator
// function* menuList() {
//     yield 'chicken';
//     yield 'rice';
//     yield 'dessert';
// }

// const lunch = menuList();

// console.log(lunch.next());
// console.log(lunch.next());
// console.log(lunch.next());
// console.log(lunch.next());
/*******************************/

// looping over an array with a generator
const cars = ["mercedes", "bmw", "audi", "jeep"];
// creating a loop generator
function* carLoop(arr) {
    for(const car of arr) {
        yield `I like this car: ${car}`;
    }
}
const carGenerator = carLoop(cars);
console.log(carGenerator.next());
console.log(carGenerator.next());
console.log(carGenerator.next());
console.log(carGenerator.next().value);