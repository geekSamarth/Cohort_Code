const username = document.getElementById("name");
const reviewDescription = document.getElementById("review-description");
const submitButton = document.getElementById("submit");
const review = document.getElementById("review-text");
const reviewUser = document.getElementById("user-name");
const reviewContainer = document.getElementsByClassName("");

function submitReview() {
  const userElement = username.value;
  const reviewElement = reviewDescription.value;
  console.log(userElement);
  console.log(reviewElement);

  const userReview = document.createElement("p");
  userReview.innerText = `"${userElement}`;
  const user = document.createElement("span");
  user.innerText = `~${user}`;
  
}

submitButton.addEventListener("click", submitReview);
