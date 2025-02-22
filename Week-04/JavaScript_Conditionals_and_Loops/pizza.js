// problem to find which pizza we should buy accroding to the number of guests we have

let numberOfGuests = 4;

let pizzaSize;

if (numberOfGuests <= 2) {
  pizzaSize = "Small";
} else if (numberOfGuests > 2 && numberOfGuests <= 5) {
  pizzaSize = "Medium";
} else {
  pizzaSize = "Large";
}
console.log(typeof pizzaSize)
console.log(pizzaSize);
