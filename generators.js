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

// create a loop generator
// const cars = ["mercedes", "bmw", "audi", "jeep"];
// // creating a loop generator
// function* carLoop(arr) {
//     for(const car of arr) {
//         yield `I like this car: ${car}`;
//     }
// }
// const carGenerator = carLoop(cars);
// console.log(carGenerator.next());
// console.log(carGenerator.next());
// console.log(carGenerator.next());
// console.log(carGenerator.next().value);
/***********************************/

// catching errors with .throw() using generator
// function* test() {
//     try {
//         yield "test0";
//         yield "test1";
//         yield "test2";
//         yield "test3";
//     }
//     catch(err) {
//         console.log(`Error: ${err}`);
//     }
// }
// const testGenerator = test();
// console.log(testGenerator.next());
// console.log(testGenerator.throw('caught an error'));

/*************************/
/*** Blogs ***/

/*
JavaScript Generators 101



*/