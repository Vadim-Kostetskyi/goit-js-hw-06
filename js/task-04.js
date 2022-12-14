const minusOneBtn = document.querySelector('button[data-action="decrement"]');
const pluseOneBtn = document.querySelector('button[data-action="increment"]');
let counterValue = document.querySelector("#value");
let asas = 0;

const pluseOne = () => {
  asas += 1;
  counterValue.innerHTML = asas;
};

const minusOne = () => {
  asas -= 1;
  counterValue.innerHTML = asas;
};
pluseOneBtn.addEventListener("click", pluseOne);
minusOneBtn.addEventListener("click", minusOne);
