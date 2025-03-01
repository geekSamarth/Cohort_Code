let salesData = [
  { product: "laptop", price: 1200 },
  { product: "Smartphone", price: 800 },
  { product: "Headphones", price: 150 },
  { product: "Keyboard", price: 80 },
];

let initialValue = 0;
let totalSales = salesData.reduce(
  (acc, sale) => acc + sale.price,
  initialValue
);
console.log(totalSales);

// Another data set

let inventory = [
  { name: "Widget A", stock: 30 },
  { name: "Widget B", stock: 120 },
  { name: "Widget C", stock: 45 },
  { name: "Widget D", stock: 70 },
];

let lowStock = inventory.filter((item) => item.stock < 50);

console.log(lowStock);

// Another data set

let userActivity = [
  { user: "Alice", activityCount: 45 },
  { user: "Bob", activityCount: 72 },
  { user: "Charlie", activityCount: 33 },
];
// find most active user among them using reduce

let mostActiveUser = userActivity.reduce((maxUser, user) =>
  user.activityCount > maxUser.activityCount ? user : maxUser
);

console.log(mostActiveUser);
