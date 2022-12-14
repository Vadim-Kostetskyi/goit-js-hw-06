const inputText = document.querySelector("#name-input");
const name = document.querySelector("#name-output");

inputText.value = "Anonymous";

inputText.addEventListener("input", () => {
  if (inputText.value === "") {
    inputText.value = "Anonymous";
    name.textContent = inputText.value;
  } else {
    name.textContent = inputText.value;
  }
});
