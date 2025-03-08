// Proxy in js

const user = {
  name: "Samarth",
  password: 123,
};

const proxyUser = new Proxy(user, {
  // get the info of proxied object
  get(target, prop) {
    console.log(prop);
    if (prop === "password") {
      throw new Error("Access Denied");
    }
    return target[prop];
  },
  // setting the value of proxied object
  set(target, prop, value) {
    target[prop] = value;
  },
});

console.log(proxyUser.name);
