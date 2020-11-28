const listElement = document.querySelector("#main #content ul");
const inputElement = document.querySelector("#main #footer input");
const buttonElement = document.querySelector("#main #footer button");

let todos = JSON.parse(localStorage.getItem("list_todos")) || [];

function renderTodos() {
  listElement.innerHTML = "";

  for (todo of todos) {
    let todoElement = document.createElement("li");
    let todoText = document.createTextNode(todo);

    let linkElement = document.createElement("a");

    linkElement.setAttribute("href", "#");

    let pos = todos.indexOf(todo);
    linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");
    let linkText = document.createTextNode("Excluir");

    linkElement.appendChild(linkText);

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  let todoText = inputElement.value;
  if (todoText) {
    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
    saveToStorage();
  } else {
    alert("Por favor! Adicione algum objetivo.");
  }
}

buttonElement.onclick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("list_todos", JSON.stringify(todos));
}
