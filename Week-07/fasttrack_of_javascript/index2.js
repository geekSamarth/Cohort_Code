let chaiTypes = ["Masala Chai", "Ginger Chai", "Green Tea", "Lemon Tea"];

chaiTypes.push("Herbal Tea");
const data = chaiTypes.pop();
// console.log(chaiTypes)

let index = chaiTypes.indexOf("Green Tea");

if (index !== -1) {
  chaiTypes.splice(index, 2);
}
console.log(chaiTypes);

let moreChaiTypes = ["Oolang Tea", "Chamolina Tea"];

let newChaiTypes = [...chaiTypes, ...moreChaiTypes];

console.log(newChaiTypes);
