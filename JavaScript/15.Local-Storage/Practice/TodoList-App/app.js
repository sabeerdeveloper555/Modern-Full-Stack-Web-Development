let addBtn = document.querySelector("#addTodoBtn");
let todoInput = document.querySelector("#todoInput");
let todoList = localStorage.getItem("todo")
  ? JSON.parse(localStorage.getItem("todo"))
  : [];

let todoListUl = document.querySelector("#todoList");

addBtn.addEventListener("click", () => {
  let obj = {
    title: todoInput.value,
    isStatus: true,
  };

  todoList.push(obj);
  localStorage.setItem("todo", JSON.stringify(todoList));

  showTodo();
});

let showTodo = () => {
  let todoList = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
  let list = "";
  todoList.forEach((item, index) => {
    list += `<li><span onclick="taskMark(${index})" style="text-decoration:${item.isStatus ? "" : "line-through"}">${index + 1}. ${item.title}</span> <button onclick="deleTodo(${index})" aria-label="Delete ${item.title}" title="Delete task"><i class="fa-solid fa-trash" aria-hidden="true"></i></button></li>`;
  });
  todoListUl.innerHTML = list;
};

let taskMark = (currentIndex) => {
  console.log(todoList);
  todoList[currentIndex].isStatus = !todoList[currentIndex].isStatus;
  localStorage.setItem("todo", JSON.stringify(todoList));
  showTodo();
};

let deleTodo = (currentIndex) => {
  todoList.splice(currentIndex, 1);
  localStorage.setItem("todo", JSON.stringify(todoList));
  showTodo();
};

showTodo();
