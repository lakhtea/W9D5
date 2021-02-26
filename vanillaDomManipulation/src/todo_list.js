const todos = [];

const ul = document.querySelector(".todos");
const form = document.querySelector(".add-todo-form");

function addTodo() {
  const currentTodoValue = document.getElementsByName("add-todo").value();
  const todo = {
    value: currentTodoValue,
    done: false,
  };
  todos.push(todo);
  document.getElementsByName("add-todo").value() = "";
}

function populateList(arr) {
  arr.forEach((todo) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = todo.value;
  });
}
