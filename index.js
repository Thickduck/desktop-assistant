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

let sub_button = document.getElementById("add-button");
sub_button.onclick = () => {
  add();
};
