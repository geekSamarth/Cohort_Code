// understanding the concept of memory in js and exploring the objects

const p1 = {
  name: "Samarth Goyal",
  age: 24,
  address: {
    street: 1,
    city: "Ghaziabad",
    state: "UP",
    country: "IN",
  },
};
const p2 = p1;
console.log(p2);
console.log(p1);

p2.name = "Sid";
p2.address.city = "Hathras";

console.log(p1);
console.log(p2);

// Note: If we change the value in p2 then values of p1 is also changes as p2 store the address of object p1 which cause the changes to be done at the address not on the object itself

const obj1 = {
  fName: "Samarth",
  lName: "Goyal",
  address: {
    street: 1,
    city: "Ghaziabad",
    state: "UP",
    country: "IN",
  },
};

const obj2 = {
  // fName: obj1.fName,
  // lName: obj1.lName,

  ...obj1, //spread operator
};
obj2.fName = "Siddhant";
obj2.address.city = "Agra";
console.log(obj1);
console.log(obj2);
