// to calculate the grade according to the marks
//  90>= - A
// >= 80 and <90 - B
// >= 70 and <80 - C
// >= 60 and <70 - D
//  F

function calculateGrade(marks) {
  if (marks >= 90) {
    return "A";
  } else if (marks >= 80 && marks < 90) {
    return "B";
  } else if (marks >= 70 && marks < 80) {
    return "C";
  } else if (marks >= 60 && marks < 70) {
    return "D";
  } else {
    return "F";
  }
}

console.log(`Grade of the student is ${calculateGrade(97)} !`);
console.log(`Grade of the student is ${calculateGrade(90)} !`);
console.log(`Grade of the student is ${calculateGrade(84)} !`);
console.log(`Grade of the student is ${calculateGrade(76)} !`);
console.log(`Grade of the student is ${calculateGrade(67)} !`);
console.log(`Grade of the student is ${calculateGrade(54)} !`);
