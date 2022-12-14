const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listAll = document.querySelector("#ingredients");
const ingredientsElements = (array) => {
  const liElement = document.createElement("li");
  liElement.classList.add("item");
  document.createElement("p");
  liElement.textContent = array;
  listAll.append(liElement);

  return liElement;
};
[...ingredients.map(ingredientsElements)];
