// PROBLEM STATEMENT - Imagine you are building an online school management system. Each student has a profile containing their name, age and grade. You need to store this information in an object format so that it can be accessed easily when required.

// CHALLENGE - Write a function that takes name, age and grade as parameters and returns a student object containing these properties

// CONSTRAINTS -
//                 - name should be string
//                 - age should be a positive interger greater than 5
//                 - grade should be a string like "10th" ,"12th", etc.
//                 - return "Invalid input for wrong inputs."

function createStudentProfile(name, age, grade) {
  // checking for the condition of given constraints

  if (
    typeof name !== "string" ||
    typeof age !== "number" ||
    typeof grade !== "string" ||
    age <= 5 ||
    grade === "" ||
    name === ""
  ) {
    return "Invalid input";
  } else {
    return { name, age, grade };
  }
}

console.log(createStudentProfile("Samarth", 24, "12th"));
console.log(createStudentProfile("", 24, "12th"));
console.log(createStudentProfile("Sid", 5, "12th"));
