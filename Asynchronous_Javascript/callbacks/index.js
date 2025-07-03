// operation that has to be performed
// read file hello.txt
// write the content of hello.txt file into the backup.txt
// delete the hello.txt file

// --------------------- Legacy Code --------------------------------

// const fs = require("fs");

// console.log("Starting of the program");

// // const content = fs.readFileSync("./hello.txt", "utf-8"); //blocking code

// fs.readFile("./hello.txt", "utf-8", function (err, content) {
//   if (err) {
//     console.log("Error while reading Hello.txt file");
//   } else {
//     fs.writeFile("backup.txt", content, function (err) {
//       if (err) {
//         console.log("Error while writing backp.txt file");
//       } else {
//         fs.unlink("./hello.txt", function (err) {
//           if (err) {
//             console.log("Error while deleting the hello.txt file");
//           } else {
//             console.log("Hello.txt file deletion operation successful");
//           }
//         });
//       }
//     });
//   }
// });

// console.log("End of the program");

// ---------------------- Modern Code using promises ---------------------------

console.log("starting of the program");
const fs2 = require("fs/promises");

fs2
  .readFile("./hello.txt", "utf-8")
  .then((content) => fs2.writeFile("backup.txt", content))
  .then((e) => {
    fs2.unlink("./hello.txt");
    console.log("Hello.txt file deletion operation successfull");
  })
  .catch((err) => console.log("Error in reading hello.txt"));

console.log("ending of the program");
