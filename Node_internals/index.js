const fs = require("fs");
setTimeout(() => console.log("Set timeout"), 0);
setImmediate(() => console.log("Set Immediate"));
fs.readFile("sample.text", "utf-8", function (err, data) {
  setTimeout(() => console.log("Set timeout inside fs"), 0);
  setImmediate(() => console.log("Set Immediate inside fs"));
});
console.log("Hello");
