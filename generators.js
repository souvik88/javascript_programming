// javascript generators

function* menuList() {
    yield 'chicken';
    yield 'rice';
    yield 'dessert';
}

const lunch = menuList();

console.log(lunch.next());
console.log(lunch.next());
console.log(lunch.next());
console.log(lunch.next());