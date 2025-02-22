// Problem: Create an array containing different types of teas

const teas = [
  "Green tea",
  "Black tea",
  "oolang tea",
  "White tea",
  "Herbal tea",
];

// Problem: Add 'Chamomile Tea" to the existing list of teas

teas.push("Chamomile Tea");
console.log(teas);

// Problem: Remove "Oolang Tea" from the list of the teas

const index = teas.indexOf("oolang tea");
if (index > -1) {
  teas.splice(index, 1);
  console.log(teas);
}

// Problem: Filter the list to only include teas that are caffeinated

const caffeinatedTeas = teas.filter((tea) => tea !== "Herbal tea");
console.log(caffeinatedTeas);

// Problem: Sort the list of teas in alphabetical order
caffeinatedTeas.sort();
console.log(caffeinatedTeas);

// Problem: Use a for loop to print each type of tea in the array

for (let i = 0; i < caffeinatedTeas.length; i++) {
  console.log(caffeinatedTeas[i]);
}

// Problem: Use a for loop to count how many teas are caffeinated(excluding "Herbal Tea").

let count = 0;
for (let i = 0; i < teas.length; i++) {
  if (teas[i] !== "Herbal tea") {
    count++;
  }
}
console.log(count);

// Problem: Use a for loop to create a new array with all tea names in uppercase

const uppercaseTeas = [];
for (let i = 0; i < teas.length; i++) {
  uppercaseTeas.push(teas[i].toUpperCase());
}
console.log(uppercaseTeas);

// Problem: Use a for loop to find the tea name with the most charaters.

let longestTea = "";
for (let i = 0; i < teas.length; i++) {
  if (teas[i].length > longestTea.length) {
    longestTea = teas[i];
  }
}
console.log(longestTea);

// Problem: Use a for loop to reverse the order of teas in the array.

const reversedArray = [];
for (let i = teas.length - 1; i >= 0; i--) {
  reversedArray.push(teas[i]);
}
console.log(reversedArray);
