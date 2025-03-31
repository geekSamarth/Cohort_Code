function BankAccount(accountNumber, holderName, balance) {
  (this.accountNumber = accountNumber),
    (this.holderName = holderName),
    (this.balance = balance);
}

// Adding different methods to the prototype of BankAccount as described in the challenge

BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  if (this.balance - amount > 0) {
    this.balance -= amount;
  }
};

BankAccount.prototype.transfer = function (amount, targetAccount) {
  console.log(this);
  if (this.balance - amount > 0) {
    targetAccount.balance = targetAccount.balance + amount;
    this.balance -= amount;
  }
};

const account1 = new BankAccount(4001, "Alice", 600);
const account2 = new BankAccount(4002, "Bob", 800);
account1.deposit(200);
console.log(account1.balance);
account1.withdraw(400);
console.log(account1.balance);
account1.transfer(200, account2);
console.log(account1.balance);
console.log(account2.balance);
