class Person {
  constructor(fName, lName) {
    this.fName = fName;
    this.lName = lName;
    console.log(this.getFullName()); //
  }
  getFullName() {
    return `${this.fName} ${this.lName}`;
  }
}

// Syntax Sugar (syntactical sugar)

const p1 = new Person("Samarth", "Goyal");
const p2 = new Person("John", "Doe");

// console.log(p1.getFullName());
// console.log(p2.getFullName());
