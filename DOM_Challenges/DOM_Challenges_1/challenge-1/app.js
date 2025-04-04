const toggleButton = document.getElementById("toggleButton");
const statusText = document.getElementById("status");
const bulb = document.getElementById("bulb");

function toggleBulb() {
  body.classList.toggle("dark-mode");
  bulb.classList.toggle("off");
  if (body.classList.contains("dark-mode")) {
    (toggleButton.innerText = "Turn Off"),
      (statusText.innerText = "Status: On");
  } else {
    (toggleButton.innerText = "Turn On"),
      (statusText.innerText = "Status: Off");
  }
}

toggleButton.addEventListener("click", toggleBulb);
