// Polyfills for ForEach loop in js

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (userFn) {
    const originalArray = this; //current object ki taraf point karta he
    for (let i = 0; i < originalArray.length; i++) {
      userFn(originalArray[i], i);
    }
  };
}

const arr = [1, 2, 3, 4, 5, 6];

// Error: .forEach function does not exist on arr variable
// Real Signature ko samjho - No return, function input, value,index
// calls my function for every value

arr.myForEach(function (value, index) {
  console.log(`Value at Index ${index} is ${value}`);
});
