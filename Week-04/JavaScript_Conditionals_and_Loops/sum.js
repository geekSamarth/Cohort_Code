//  to calculate the sum of all elements of array

let myArray = [1, 4, 2, 3, 5, 6];

function sumFactory(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  return sum;
}
console.log(`Sum of all elements of array is: ${sumFactory(myArray)}`);
