// operation that has to be performed
// read file hello.txt
// write the content of hello.txt file into the backup.txt
// delete the hello.txt file

const fs = require("fs");

function readFileWithPromise(filepath, encoding) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, encoding, function (err, content) {
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
    fs.writeFile(filepath, content, function (err) {
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
    fs.unlink(filepath, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

console.log("Starting of the program");

async function doTasks() {
  try {
    const content = await readFileWithPromise("./hello.txt", "utf-8");
    await writeFileWithPromise("./backup.txt", content);
    await unlinkFileWithPromise("./hello.txt");
  } catch (err) {
    console.log("Error while performing operations", err);
  } finally {
    console.log("Sab ho gaya ji, maje karo ab");
  }
}

doTasks().then(() => console.log("All operations done successfully"));

console.log("End of the program");
