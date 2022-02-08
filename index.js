const hide = (id) => {
  document.getElementById(id).style.display = "none";
};
const unhide = (id) => {
  document.getElementById(id).style.display = "flex";
};

hide("input-tag");
hide("submit-button");
hide("clear-all");

const add = () => {
  unhide("input-tag");
  unhide("submit-button");
  unhide("clear-all");
};

let add_button = document.getElementById("add-button");
add_button.onclick = () => {
  add();
};

let input = document.getElementById("input-tag");
let task_li = document.getElementById("task-list");

const add_task = (inputField, list) => {
  if (inputField.value.length > 0) {
    let value = inputField.value;
    let entry = document.createElement("li");
    entry.className = "task-item";
    entry.appendChild(document.createTextNode(value));
    list.appendChild(entry);

    inputField.value = "";
  }
};

let sub_button = document.getElementById("submit-button");
sub_button.onclick = () => {
  add_task(input, task_li);
};

const clear_task = (list) => {
  list.innerHTML = "";
};
let clear_button = document.getElementById("clear-all");
clear_button.onclick = () => {
  clear_task(task_li);
};

const remove_task = (list) => {
  let items = list.getElementsByTagName("li");
  for (let i = 0; i < items.length; i++) {
    items[i].onclick = () => {
      items[i].parentNode.removeChild(items[i]);
    };
  }
};
