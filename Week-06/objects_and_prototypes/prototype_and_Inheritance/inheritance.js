class A {
  funInsideA() {}
}

class B extends A {
  funInsideB() {}
}

const p = new B();
console.log(p);
