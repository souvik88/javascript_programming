// function as the returned object

function foo() {
    function printHelloWorld() {
        console.log('hello world');
    }
    return printHelloWorld;
}

var hiya = foo();
console.log('one');
console.log('two');
hiya();