const taskInputEl = document.getElementById("taskInput");
const addTodoBtnEl = document.getElementById("addTodoBtn");
const todoListEl = document.getElementById("todoList");
const errorMessageEl = document.getElementById("errorMessage");
let todos = [];

addTodoBtnEl.addEventListener("click", () => {
  if (taskInputEl.value === "") {
    errorMessageEl.textContent = "Please Add Task";
  } else {
    todos.push(taskInputEl.value);
    renderTodo(taskInputEl.value);
    errorMessageEl.textContent = "";
    taskInputEl.value = "";
    localStorage.setItem("todos", JSON.stringify(todos));
    // console.log(todos);
  }
});

todoListEl.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    // event.target.parentElement.remove();             
    const taskItem = event.target.parentElement;
    console.log(taskItem);
    const taskText = taskItem.firstChild.textContent;
    todos = todos.filter((todo) => {
      return todo !== taskText;
    });
    localStorage.setItem("todos", JSON.stringify(todos));
    taskItem.remove();
  }
});

const savedTodos = localStorage.getItem("todos");
if (savedTodos) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  todos.forEach((todo) => {
    renderTodo(todo);
  });
}

function renderTodo(todo) {
  const taskItem = document.createElement("li");
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  taskItem.textContent = todo;
  taskItem.appendChild(deleteBtn);
  todoListEl.appendChild(taskItem);
}

taskInputEl.addEventListener("keydown", (event) => {
  if(event.key === "Enter"){
    addTodoBtnEl.click();
  }
});