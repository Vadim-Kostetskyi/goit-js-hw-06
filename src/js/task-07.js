const inputChenge = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");
console.log(textEl);
inputChenge.addEventListener("input", () => {
  textEl.style.fontSize = inputChenge.value + "px";
});
