const chaiTypes = ["masala tea", "ginger tea", "green tea"];

const chaiRecipe = {
  name: "ChaiCode",
  ingredients: {
    type: "Assam Tea",
    origin: "Assam",
    sugar: "brown sugar",
    spices: ["masala", "ginger"],
  },
  instructions: "Boil water, add tea leaves, add sugar and spices.",
};

// console.log(chaiRecipe)
console.log(chaiRecipe.ingredients.spices);

const newChai = {
  ...chaiRecipe,
  instructions:
    "Boil water, add tea leaevs, add sugar and spices with some love",
};

console.log(newChai);

const { name, ingredients } = chaiRecipe; //destructuring object variable
const [firstValue, secondValue, thirdValue] = chaiTypes; // destructuring array value

console.log(name);
console.log(ingredients);
console.log(firstValue);
console.log(secondValue);
console.log(thirdValue);
