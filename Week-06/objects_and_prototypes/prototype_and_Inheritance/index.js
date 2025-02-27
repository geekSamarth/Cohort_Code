const object1 = {
  fName: "Samarth",
  lName: "Goyal",
  getFullName: function () {
    return `${this.fName} ${this.lName}`;
  },
};

const object2 = {
  fName: "John",
  lName: "Doe",
  getFullName: function () {
    return `${this.fName} ${this.lName}`;
  },
};
// console.log(object1);
// console.log(object2);
console.log(object1.getFullName());
console.log(object2.getFullName());
