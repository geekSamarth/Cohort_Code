// factory to print cahi on the console

function printChai() {
  console.log("Hello chai");
}

// factory for bringing brush

function bringBrush(itne) {
  console.log(`Hanji, le aaye ${itne} brush`);
}

bringBrush(5);
printChai();

// factory for adding two number

function addTwoNumber(a, b) {
  return a + b;
}
console.log(`Addition of two numbers is: ${addTwoNumber(5, 6)}`);

// factory for substracting two numbers

function substractTwoNumber(x, y) {
  return x - y;
}
console.log(`Substraction of two numbers is: ${substractTwoNumber(7, 8)}`);

// factory for multipliy of two numbers

function multiplyTwoNumber(p, q) {
  return p * q;
}
console.log(`Multiplication of two numbers is ${multiplyTwoNumber(4, 8)}`);

// factory for dividing two numbers

function divideTwoNumber(a, d) {
  return a / d;
}
console.log(`Division of two numbers is: ${divideTwoNumber(9, 3)}`);
