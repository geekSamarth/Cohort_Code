// understanding the concept of arrays in js

let fruits = ["banana", "apple", "orange", "cherry"];
let intFruits = new Array("kivi", "avacado", "dragon fruit");

console.log(fruits);
console.log(intFruits);
console.log(typeof fruits);
console.log(typeof intFruits);

// perfroming some basic array methods

fruits.push("Mango");
fruits.pop();

// updating the value of index-0 element of the array
fruits[2] = "Guava";
fruits.unshift("Pineapple");

console.log(fruits);
