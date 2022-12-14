const input = document.querySelector("#validation-input");
const max = document.querySelector('input[data-length="6"]');

input.addEventListener("blur", () => {
  if (input.value.length !== +max.dataset.length) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
});
