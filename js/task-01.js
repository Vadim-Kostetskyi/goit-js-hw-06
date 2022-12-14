const list = document.querySelectorAll("ul#categories>li");
let listNum = 0;
list.forEach(() => listNum++);
console.log("Number of categories: " + listNum);
const title = document.querySelectorAll("ul#categories>li>h2");
const list1 = list[0].querySelectorAll("ul>li");
const list2 = list[1].querySelectorAll("ul>li");
const list3 = list[2].querySelectorAll("ul>li");

// 1 спосіб

let listNum1 = 0;
let listNum2 = 0;
let listNum3 = 0;
list1.forEach((item) => listNum1++);
list2.forEach((item) => listNum2++);
list3.forEach((item) => listNum3++);
console.log("Category: " + title[0].innerHTML);
console.log("Elements: " + listNum1);
console.log("Category: " + title[1].innerHTML);
console.log("Elements: " + listNum2);
console.log("Category: " + title[2].innerHTML);
console.log("Elements: " + listNum3);

// 2 спосіб

// console.log("Category: " + title[0].innerHTML);
// console.log("Elements: " + list1.length);
// console.log("Category: " + title[1].innerHTML);
// console.log("Elements: " + list2.length);
// console.log("Category: " + title[2].innerHTML);
// console.log("Elements: " + list3.length);
