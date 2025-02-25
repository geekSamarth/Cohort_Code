// Polyfill for filter() method in js

// Signature: Return new array | input: userFn
// agar user the function true return karta hei then current value ko new array mein add kr leta hein

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (userFn(this[i])) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

const arr = [1, 2, 3, 4, 5, 6];
const filteredArray = arr.myFilter((e) => e % 3 == 0);
console.log(filteredArray);
