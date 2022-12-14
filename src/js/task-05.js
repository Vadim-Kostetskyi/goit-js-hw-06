const inputText = document.querySelector("#name-input");
const name = document.querySelector("#name-output");

inputText.addEventListener("input", () => {
  if (inputText.value === "") {
    inputText.value = "Anonymous";
  } else {
    inputText.value = inputText.value;
  }
});
