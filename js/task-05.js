const inputText = document.querySelector("#name-input");
const name = document.querySelector("#name-output");

inputText.addEventListener("input", () => {
  if (inputText.value === "") {
    name.textContent = "Anonymous";
  } else {
    name.textContent = inputText.value;
  }
});
