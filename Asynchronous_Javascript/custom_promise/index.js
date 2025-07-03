// operation that has to be performed
// read file hello.txt
// write the content of hello.txt file into the backup.txt
// delete the hello.txt file

const fs = require("fs");

function readFileWithPromises(filepath, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, encoding, (err, content) => {
      if (err) {
        reject(err);
      } else {
        resolve(content);
      }
    });
  });
}

function writeFileWithPromise(filepath, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(filepath, content, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

function unlinkFileWithPromise(filepath) {
  return new Promise((resolve, reject) => {
    fs.unlink(filepath, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

console.log("Starting of the program");

readFileWithPromises("hello.txt", "utf-8")
  .then((content) => writeFileWithPromise("backup.txt", content))
  .then(() => unlinkFileWithPromise("hello.txt"))
  .catch((err) => console.log("Error while performing all allocated task"))
  .finally(() => console.log("All done sirji"));

console.log("End of the program");
