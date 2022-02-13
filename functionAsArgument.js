// passing function as an argument

// function test0() {
//     console.log('testing2');
// }
// function test1(test2) {
//     console.log('testing0');
//     console.log('testing1');
//     test2();
//     console.log('testing3');
//     console.log('testing4');
// }
// test1(test0);

// passing an anonymous function as an argument

function test1(test2) {
    console.log('testing0');
    console.log('testing1');
    test2();
    console.log('testing3');
    console.log('testing4');
}
test1(function() {
    console.log("hello world");
});