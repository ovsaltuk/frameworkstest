import { TODO_LIST } from "./data.js";

const todoListContainer = document.getElementById("todoList");
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoText");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addTodo(todoInput.value.trim());
  todoInput.value = "";
  renderTodoList();
});

function renderTodoList() {
  todoListContainer.innerHTML = "";
  TODO_LIST.forEach((todo) => {
    const li = document.createElement("li");
    const text = document.createElement("span");
    const delButton = document.createElement("button");

    text.textContent = todo.text;
    delButton.textContent = "delete todo";
    delButton.addEventListener("click", function (e) {
      e.preventDefault();
      TODO_LIST.splice(TODO_LIST.findIndex(el => el.id === todo.id),1);
      renderTodoList();
    });

    li.appendChild(text);
    li.appendChild(delButton);

    todoListContainer.appendChild(li);
  });
}

function addTodo(text) {
  TODO_LIST.push({
    id: Date.now(),
    text: text,
    isComplited: false,
    createdAt: new Date().toISOString(),
  });

  renderTodoList();
}

function init() {
  renderTodoList(todoListContainer, TODO_LIST);
}

init();
