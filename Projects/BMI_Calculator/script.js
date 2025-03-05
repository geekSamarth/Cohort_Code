const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const calculateBtn = document.getElementById("calculateBMI");
const result = document.getElementById("calculateBMI");

function calculateBMI(height, weight) {
  // do some basic validations
}

calculateBtn.addEventListener("click", () => {
  const heightValue = heightInput.value;
  console.log(heightValue);
  const weightValue = weightInput.value;
  console.log(weightValue);
  const userHeight = Number(heightValue);
  const userWeight = Number(weightValue);
  const bmi = (userWeight / Math.pow(userHeight, 2)).toFixed(1);

  if (result < 18.5) {
    result.innerText = `Your BMI is ${bmi} and your BMI category is Underweight ⬇️`;
  } else if (result >= 18.5 && result <= 24.9) {
    result.innerText = `Your BMI is ${bmi} and your BMI category is Normal ✅`;
  } else if (result >= 25 && result <= 29.9) {
    result.innerText = `Your BMI is ${bmi} and your BMI category is OverWeight ⬆️`;
  } else {
    result.innerText = `Your BMI is ${bmi} and your BMI category is Obese ❌`;
  }
});
