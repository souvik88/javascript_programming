/*
Copying Objects
When we assign object1 to object2 with assignment operator "=", 
object2 will store the reference of object1. Therefore, when we 
make changes to object1, the same will reflect in object2, and vice versa.
*/

let laptop1 = {
  brand: "hp",
};

let laptop2 = laptop1;
laptop1.brand = "lenovo"; // change the brand of laptop1
console.log(`laptop2 brand is ${laptop2.brand}`);
laptop1.color = "gray"; // change the color of laptop1
console.log(`laptop2 color is ${laptop2.color}`);
laptop2.brand = "mac"; // change the brand name of laptop2
console.log(`laptop2 brand is ${laptop2.brand}`);
console.log(`laptop1 brand is ${laptop1.brand}`);
laptop2.color = 'silver'; // change the color of laptop2
console.log(`laptop2 color is ${laptop2.color}`);
console.log(`laptop1 color is ${laptop1.color}`); // silver reflects in laptop1