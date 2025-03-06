const person1 = {
  personName: "Samarth",
  greet() {
    console.log(this);
    console.log(`Hello, ${this.personName}`);
  },
};

const person2 = {
  personName: "Sid",
};

person1.greet();
person1.greet.call(person2);
person1.greet.call({ personName: "John" });
