const [input, addBtn, ul, empty] = [
  document.querySelector("input"),
  document.querySelector(".add-btn"),
  document.querySelector("ul"),
  document.querySelector(".empty_list"),
];

const addDeleteBtn = () => {
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";
  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);
    empty.style.display = !ul.children.length ? "block" : "none";
  });
  return deleteBtn;
};

addBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (text) {
    const li = document.createElement("li");
    li.appendChild(document.createElement("p")).textContent = text;
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);
    input.value = "";
    empty.style.display = !ul.children.length ? "block" : "none";
  }
});

empty.style.display = !ul.children.length ? "block" : "none";



