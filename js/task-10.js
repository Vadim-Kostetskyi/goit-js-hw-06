const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");
const div = document.querySelector("#controls");
const input = div.firstElementChild;
// console.log(input.value);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const box = document.createElement("div");
  box.style.height = "30px";
  box.style.width = "30px";
  box.style.backgroundColor = "red";
  boxes.append(box);
}
createBtn.addEventListener("click", createBoxes);
