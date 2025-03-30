function ShoppingCart() {
  this.items = [];
}

ShoppingCart.prototype.addItem = function (price) {
  this.items.push(price);
};

ShoppingCart.prototype.getTotalPrice = function () {
  let totalPrice = 0;
  for (let i = 0; i < this.items.length; i++) {
    totalPrice += this.items[i];
  }
  return totalPrice;
};

const cart = new ShoppingCart();
const prices = [10, 20, 30, 40, 50];
for (let price of prices) {
  cart.addItem(price);
}
console.log(cart.items);
console.log("total Price of items in the cart", cart.getTotalPrice());
