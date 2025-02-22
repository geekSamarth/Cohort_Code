const object1 = {
  fName: "Samarth",
  lName: "Goyal",
  address: {
    street: 1,
    city: 1,
  },
};

const object1StringForm = JSON.stringify(object1);
console.log(object1StringForm);

const object2 = JSON.parse(object1StringForm);

console.log(object1);
console.log(object2);

object2.address.city = 2; //change the value of address of object2 have no impact on object1 as it do deep copy of the object rather than shallow copy

console.log(object1);
console.log(object2);
