const user = {
  name: "Samarth",
  age: 24,
  password: "123",
  address: {
    city: "Noida",
    state: "UP",
    country: "India",
  },
};

const proxiedUser = new Proxy(user, {
  get(target, prop) {
    return target[prop];
  },
  set(target, prop, value) {
    console.log(prop);
    if (prop === "password") {
      throw new Error("Access Denied!");
    }
    target[prop] = value;
    // target[prop] = value;
    return true;
  },
});
// console.log(user);
// console.log(proxiedUser);
// proxiedUser.name = "Krishna";
// console.log(user);
// console.log(proxiedUser);
// proxiedUser.password = "1234";
proxiedUser.address.city = "Delhi";
console.log(user);
console.log(proxiedUser);
