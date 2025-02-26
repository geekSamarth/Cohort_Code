// PROBLEM STATEMENT - You are developing a car rental service. Each car has a brand and model, but some cars don't have a color assigned yet. You need to add a color property dynamically when a customer selects a car.

// CHALLENGE - Write a function that takes a car object and a color string, then add the color property to the object.

// CONSTRAINTS:-
//                 - car should be a valid object with atleast brand and model properties
//                 - color should be a non-empty string, otherwise return 'Invalid color'.

function addCarColor(car, color) {
  // checking for the constraints given in the challenge

  //   First Approach

  if (
    "brand" in car &&
    "model" in car &&
    typeof color === "string" &&
    color.length !== 0
  ) {
    car.color = color;
    return car;
  } else {
    return "Invalid color";
  }

  //   Second Approach

  //   if (
  //     typeof car !== "object" ||
  //     typeof color !== "string" ||
  //     color.length === 0
  //   ) {
  //     return "Invalid color";
  //   } else {
  //     car.color = color;
  //     return car;
  //   }
}

const car1 = {
  brand: "Toyota",
  model: "Corolla",
};
const car2 = {
  brand: "Honda",
  model: "Civic",
};
console.log(addCarColor(car1, "red"));
console.log(addCarColor(car2, ""));
console.log(addCarColor(car2, null));
