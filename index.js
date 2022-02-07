const hide = (id) => {
  document.getElementById(id).style.display = "none";
};
const unhide = (id) => {
  document.getElementById(id).style.display = "flex";
};

hide("input-tag");
hide("submit-button");

const add = () => {
  unhide("input-tag");
  unhide("submit-button");
};

let add_button = document.getElementById("add-button");
add_button.onclick = () => {
  add();
};

let input = document.getElementById("input-tag");
let task_li = document.getElementById("task-list");

const add_task = (inputField, list) => {
  let value = inputField.value;
  let entry = document.createElement("li");
  entry.id = "task-item";
  entry.appendChild(document.createTextNode(value));
  list.appendChild(entry);

  inputField.value = "";
};

let sub_button = document.getElementById("submit-button");
sub_button.onclick = () => {
  add_task(input, task_li);
};
