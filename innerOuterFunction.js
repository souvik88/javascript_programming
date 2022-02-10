function outer(a) {
    console.log("outer function", a); // this is outer function
    a++; // value of a will be in incremented
    var b = 30;
    function inner() {
        console.log("inner function", a, b);
        return
    }
    inner();
    return a;
}

var func = outer(2);