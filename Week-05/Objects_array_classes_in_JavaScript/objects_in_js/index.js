// understanding the basic concept of object in javascript

const person = {
  firstName: "Samarth",
  lastName: "Goyal",
  age: 24,
  hobby: ["coding", "music"],
  getFullName: function () {
    return "Samarth Goyal";
  },
  address: {
    hno: 1,
    street: 1,
    countryCode: "IN",
    state: "UP",
  },
};

console.log(person);
// console.log(person.firstName)
console.log(person.getFullName());
console.log(person.address);
console.log(person.address.state);

// Object-2

const remote = {
  color: "black",
  brand: "XYZ",
  dimensions: {
    height: 1,
    width: 1,
  },
  turnOff: function () {},
  volumeUp: function () {},
};
