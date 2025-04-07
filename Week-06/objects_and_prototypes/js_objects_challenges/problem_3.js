function hasDiscount(product) {
  if (typeof product !== "object") {
    return false;
  } else if (product.discount) {
    return true;
  } else {
    return false;
  }
}

const product1 = {
  name: "Laptop",
  price: 1000,
  discount: 10,
};

console.log(hasDiscount(product1));

const product2 = {
  name: "Macbook",
  price: 2000,
};

console.log(hasDiscount(product2));
const product3 = [1, 2, 3, 4];
console.log(hasDiscount(product3));
