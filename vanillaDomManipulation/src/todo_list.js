let todos;

if (localStorage.getItem("todos")) {
  todos = JSON.parse(localStorage.getItem("todos"));
} else {
  todos = [];
}

const ul = document.querySelector(".todos");
const form = document.querySelector(".add-todo-form");

function addTodo(event) {
  event.preventDefault();
  const currentTodoValue = document.getElementsByName("add-todo")[0].value;
  const todo = {
    value: currentTodoValue,
    done: false,
  };
  todos.push(todo);
  document.getElementsByName("add-todo")[0].value = "";
  const JSONArray = JSON.stringify(todos);
  localStorage.setItem("todos", JSONArray);
  populateListItem(todo, todos.length - 1);
}

function populateListItem(item, idx) {
  const label = document.createElement("label");
  const input = document.createElement("input");
  const li = document.createElement("li");
  const span = document.createElement("span");

  span.innerHTML = item.value;
  input.type = "checkbox";
  input.setAttribute("data-id", idx);

  if (item.done) {
    input.checked = true;
  }

  label.append(input);
  label.append(span);
  li.append(label);
  document.querySelector(".todos").append(li);
}

function populateList(arr) {
  arr.forEach((todo, idx) => {
    populateListItem(todo, idx);
  });
}

function toggleCheck(event) {
  const input = event.target.parentElement.childNodes[0];
  todos[input.dataset.id].done = !todos[input.dataset.id].done;
  const JSONArray = JSON.stringify(todos);
  localStorage.setItem("todos", JSONArray);
}

// add event listener to after DOM loaded
document.addEventListener("DOMContentLoaded", () => {
  const checkies = Array.from(document.querySelectorAll(".todos"));

  for (let i = 0; i < checkies.length; i++) {
    checkies[i].addEventListener("click", toggleCheck);
  }
});

document.querySelector(".add-todo-form").addEventListener("submit", addTodo);
populateList(todos);
