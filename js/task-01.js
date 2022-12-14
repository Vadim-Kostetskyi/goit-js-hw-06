const list = document.querySelector("#categories");
const listIrem = list.children;

console.log("Number of categories: " + listIrem.length);

for (const element of listIrem) {
  console.log("Category: " + element.querySelector("h2").textContent);
  console.log("Elements: " + element.querySelector("ul").children.length);
}
