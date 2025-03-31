function BankAccount(balance) {
  this.balance = balance;
  this.transactions = [];
}

// Adding different methods being described in the challenge to the prototype of the BankAccount function

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
  this.transactions.push(`Deposited ${amount}`);
};

BankAccount.prototype.withdraw = function (amount) {
  if (this.balance > amount) {
    this.balance -= amount;
    this.transactions.push(`Withdrew ${amount}`);
  } else {
    this.transactions.push(`Insufficient balance`);
  }
};

BankAccount.prototype.getTransactionHistory = function () {
  return this.transactions;
};

let balance = 200;
// let operation = "deposit";
let operation = "withdraw";
const account = new BankAccount(200);
let amount = 250;
if (operation == "deposit") {
  account.deposit(amount);
} else if (operation == "withdraw") {
  account.withdraw(amount);
}
console.log(account.getTransactionHistory());
console.log(account.balance);
