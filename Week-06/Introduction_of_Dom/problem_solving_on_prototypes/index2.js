// the function below is basically returning another function which has access to the count variable as it lies in the scope of that function also it is a child function which has access to the variable of parent function.

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter()); //output => 1

//  ------------CHALLENGE-2---------------------

(function () {
  console.log("Samarth");
})();
