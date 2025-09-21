// script.js
const list = document.getElementById("ListContainer");
const taskInput = document.getElementById("input");
const addBtn = document.getElementById("addBtn");

function createListItem(text){
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const delBtn = document.createElement("button");
  delBtn.type = "button";
  delBtn.textContent = "Delete";
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(delBtn);
  return li;
}

function add(){
  const value = taskInput.value.trim();
  if (!value) return;
  const li = createListItem(value);
  list.appendChild(li);
  taskInput.value = "";
  taskInput.focus();
}

/* Add by clicking Add button */
addBtn.addEventListener("click", add);

/* Add by pressing Enter in input */
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    add();
  }
});
