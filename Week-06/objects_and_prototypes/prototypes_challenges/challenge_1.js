function Animal(name) {
  // initialize the name variable
  this.name = name;
}

Animal.prototype.makeSound = function () {
  return "Some generic sound";
};

const cat = new Animal("Mick");
console.log(cat.makeSound());
