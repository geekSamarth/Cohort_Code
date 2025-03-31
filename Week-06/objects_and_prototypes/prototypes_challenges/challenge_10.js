function Product(name, price, stock) {
  (this.name = name), (this.price = price), (this.stock = stock);
}

// Adding all methods to the prototype of the Product as instructed in the challenge

Product.prototype.applyDiscount = function (percent) {
  // reduces the price of the product by the given percentage
  // the final price should be rounded to the nearest integer using Math.round
  // Example: If a product costs $1000 and a 10% discount is applied, the new price should be $900

  this.price = Math.round(this.price - this.price * (percent / 100));
};

Product.prototype.purchase = function (quantity) {
  // If the requested quantity is available in stock, reduce the stock accordigly
  // If not enough stock is available, return "Not enough stock"
  // Example: If 5 items are in stock and the user buys 3, the new stock should be 2

  if (quantity > this.stock || this.stock == 0) {
    return "Not enough stock";
  } else {
    this.stock -= quantity;
  }
};
const P1 = new Product("Rice", 400, 12);
P1.applyDiscount(22);
console.log(P1.price);
P1.purchase(11);
console.log(P1.stock);
