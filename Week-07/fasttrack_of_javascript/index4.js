/*Ek online store mein, agar customer ka total bill amount 1000 se jyada hai, toh 10% discount milta hain. Nahi toh, full amount pay karna padta hai*/

function calculateTotalBill(amount) {
  // convert to number
  let totalAmount = Number(amount);
  if (totalAmount > 1000) {
    const discount = 0.1 * totalAmount;
    console.log(`Total amount payable is: ${totalAmount - discount}`);
  } else {
    console.log(`The total amount payable is: ${totalAmount}`);
  }
}

calculateTotalBill(1000);
calculateTotalBill(940);
calculateTotalBill(1150);

// check truthy and falsy value

function checkTruthyValue(vlaue) {
  if (vlaue) {
    console.log("truthy");
  } else {
    console.log("falsy");
  }
}

checkTruthyValue(1);
checkTruthyValue(0);
checkTruthyValue([]);
checkTruthyValue("");
checkTruthyValue("samarth");
checkTruthyValue(null);
checkTruthyValue([1, 2, 3]);
