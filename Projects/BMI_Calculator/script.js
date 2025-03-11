const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const calculateBtn = document.getElementById("calculateBMI");
const result = document.getElementById("result");

function calculate() {
  const weight = weightInput.value;
  const height = heightInput.value;
  // checking for simple validations
  if (weight === "" || height === "") {
    alert("Please insert value for weight or height");
  } else {
    const res = (weight / Math.pow(height, 2)).toFixed(2);
    if (res < 18.5) {
      result.textContent = `BMI is: ${res} and category is: Underweight`;
    } else if (res >= 18.5 && res <= 24.9) {
      result.textContent = `BMI is: ${res} and category is: Normal`;
    } else if (res >= 25 && res <= 29.9) {
      result.textContent = `BMI is: ${res} and category is: Overweight ⬆️`;
    } else {
      result.textContent = `BMI is: ${res} and category is: Obese ❎`;
    }
  }
}

calculateBtn.addEventListener("click", calculate);
