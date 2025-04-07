const obj = {
  firstname: "Samarth",
  lastname: "Goyal",
  age: 24,
};

let count = 0;
for (let keys in obj) {
  count += 1;
  console.log(keys);
}

console.log("no of properties in obj", count);
