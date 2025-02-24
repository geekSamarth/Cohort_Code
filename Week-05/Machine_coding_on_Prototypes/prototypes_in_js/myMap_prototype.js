// Polyfills for Map function in js
// Signature: .map
// Return? - New Array, Each element Iterate, userFn

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFn) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      const value = userFn(this[i], i);
      result.push(value);
    }

    return result;
  };
}

const arr = [1, 2, 3, 4, 5, 6];

const n = arr.myMap((e, index) => e * 2);
console.log(n);
