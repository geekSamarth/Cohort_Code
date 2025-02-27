//  ----------------------CHALLENGE-1--------------------------

// the code represented below is basically adding a method in the prototype of function which basically print the name as give context to the name of the function.

Function.prototype.describe = function () {
  console.log(`Function name is ${this.name}`);
};

function masalaChai() {}
function gingerChai() {}

function greet(name) {
  return `Hello ${name}`;
}
greet.describe(); //output => print the name of the function which is calling that describe function.
masalaChai.describe();
gingerChai.describe();

// -------------------CHALLENGE-2-------------------------------

// function declaration
function add(a, b) {
  return a + b;
}

//function expression
const substract = function (a, b) {
  return a - b;
};

// arrow function
const multiply = (a, b) => a * b;

// -------------------Challenge-3---------------------------

// FIRST CLASS FUNCTION / high order function as it is taking function as parameter and return function as well.
function applyOperation(a, b, operation) {
  return operation(a, b);
}

const result = applyOperation(5, 4, (x, y) => x / y);
console.log(result);
