// this is rest operator
function a(name, age, ...args) {
    console.log(name, age, args);
    console.log(args);
}
a(11, 12, 13, 14, 15);


// this is spread operator
function id(name, age, hobby) {
    console.log(`My name is ${name}, my age is ${age}, and my 
                hobby is ${hobby}`);
}

let myID = ["Souvik", 34, "reading/coding"];

id(...myID);

/*
// Define a function with three parameters:
function myBio(firstName, lastName, company) { 
  console.log(`${firstName} ${lastName} runs ${company}`);
}

let names = ["Oluwatobi", "Sofela", "CodeSweetly"];
// Use spread to expand an array’s items into individual arguments:
myBio(...names);

// The invocation above will return:
// “Oluwatobi Sofela runs CodeSweetly”
*/