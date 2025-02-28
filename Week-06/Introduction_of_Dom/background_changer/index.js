// ---------------------------LOGIC-1------------------------------------------

// function changeBackgroundBlack() {
//   document.body.style.backgroundColor = "black";
// }
// function changeBackgroundWhite() {
//   document.body.style.backgroundColor = "white";
// }
// const blackBtn = document.getElementById("black-btn");
// const whiteBtn = document.getElementById("white-btn");

// blackBtn.addEventListener("click", changeBackgroundBlack);
// whiteBtn.addEventListener("click", changeBackgroundWhite);

// -------------------------LOGIC-2-------------------------------------------

// function changeBackground(color) {
//   document.body.style.backgroundColor = color;
// }

// const blackBtn = document.getElementById("black-btn");
// const whiteBtn = document.getElementById("white-btn");

// ------------------------LOGIC-3-----------------------------(lATEST ONE)------

function changeBackground(color) {
  document.body.style.backgroundColor = color;
}
const themeBtn = document.getElementById("theme-button");
themeBtn.addEventListener("click", () => {
  const currentBackgroundColor = document.body.style.backgroundColor;
  if (!currentBackgroundColor || currentBackgroundColor == "white") {
    changeBackground("black");
    themeBtn.innerText = "Light Mode";
  } else {
    changeBackground("white");
    themeBtn.innerText = "Dark Mode";
  }
});
