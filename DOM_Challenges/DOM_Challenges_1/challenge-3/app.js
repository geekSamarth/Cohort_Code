const nameInput = document.getElementById("nameInput");
const jobInput = document.getElementById("jobInput");
const ageInput = document.getElementById("ageInput");
const bioInput = document.getElementById("bioInput");
const nameDisplay = document.getElementById("nameDisplay");
const jobDisplay = document.getElementById("jobDisplay");
const ageDisplay = document.getElementById("ageDisplay");
const bioDisplay = document.getElementById("bioDisplay");

nameInput.addEventListener("input", (event) => {
  nameDisplay.innerText = event.target.value || "Not Provided";
});
jobInput.addEventListener("input", (event) => {
  jobDisplay.innerText = event.target.value || "Not Provided";
});
ageInput.addEventListener("input", (event) => {
  ageDisplay.innerText = event.target.value || "Not Provided";
});
bioInput.addEventListener("input", (event) => {
  bioDisplay.innerText = event.target.value || "Not Provided";
});
