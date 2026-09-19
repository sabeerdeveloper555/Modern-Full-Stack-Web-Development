const taskInputEl = document.getElementById("taskInput");
const addTodoBtnEl = document.getElementById("addTodoBtn");
const todoListEl = document.getElementById("todoList");
const errorMessageEl = document.getElementById("errorMessage");

addTodoBtnEl.addEventListener("click", () => {
  const taskItem = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  taskItem.textContent = taskInputEl.value;
  if (taskInputEl.value === "") {
    errorMessageEl.textContent = "Please Add Task";
  } else {
    taskItem.appendChild(deleteBtn);
    todoListEl.appendChild(taskItem);
    taskInputEl.value = "";
    errorMessageEl.textContent = "";
  }
});

todoListEl.addEventListener("click", (event) => {
  if(event.target.tagName === "BUTTON"){
    event.target.parentElement.remove();
  }
})
