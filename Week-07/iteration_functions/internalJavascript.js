// asynchronous behaviour of javascript

// console.log("HI");
// setTimeout(() => {
//   console.log("run after 2 sec");
// }, 2 * 1000);
// console.log("BYE");

// starvation in javascript

console.log("HI");
setTimeout(() => {
  console.log("run after 2 sec");
}, 2 * 1000);
Promise.resolve().then(() => {
  console.log("Promise 1 resolved successfully");
  Promise.resolve().then(() => {
    console.log("Promise 2 resolved successfully");
    Promise.resolve().then(() => {
      console.log("Promise 3 resolved successfully");
      Promise.resolve().then(() => {
        console.log("Promise 4 resolved successfully");
      });
    });
  });
});
console.log("BYE");
