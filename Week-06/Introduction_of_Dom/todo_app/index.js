const addBtn = document.getElementById("add-btn");
const todoInput = document.getElementById("todo-input");
const todoItems = document.getElementById("todo-items");

addBtn.addEventListener("click", () => {
  const value = todoInput.value;
  // console.log('user entered',value);
  const li = document.createElement("li");
  li.innerText = value;
  todoInput.value = "";
  const delButton = document.createElement("button");
  delButton.innerText = "X";
  li.appendChild(delButton);
  delButton.addEventListener("click", function () {
    li.remove();
  });
  todoItems.appendChild(li);
});

