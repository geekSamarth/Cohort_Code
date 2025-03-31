function Employee(name, position, salary) {
  (this.name = name), (this.position = position), (this.salary = salary);
}

// adding all methods being instructed in the challenge to the prototype of Employee function

Employee.prototype.applyBonus = function (percent) {
  this.salary = this.salary + this.salary * (percent / 100);
};
const emp = new Employee("Alice", "Manager", 50000);
emp.applyBonus(10);
console.log(emp.salary);
