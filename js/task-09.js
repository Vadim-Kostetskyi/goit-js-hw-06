const button = document.querySelector(".change-color");
const colorChange = document.querySelector(".color");
const page = document.querySelector("body");
console.log(page);

const changeColor = (elem) => {
  let color = getRandomHexColor();
  colorChange.textContent = color;
  page.style.backgroundColor = color;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

button.addEventListener("click", changeColor);
