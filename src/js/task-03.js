const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const listAll = document.querySelector(".gallery");

const galeryEl = images
  .map(({ url, alt }) => {
    return `<li><img src=${url} alt=${alt}></li>`;
  })
  .join("");
listAll.insertAdjacentHTML("afterbegin", galeryEl);

// const imagesElement = images.map((el) => el.url);
// const imagesElementAlt = images.map((el) => el.alt);
// console.log(imagesElement);
// const ingredientsElements = (array, i) => {
//   const liElement = document.createElement("li");
//   const imgElement = document.createElement("img");
//   const altElement = document.createElement("alt");
//   listAll.append(liElement);
//   imgElement.append(altElement);
//   liElement.append(imgElement);
//   imgElement.src = imagesElement[i];
//   imgElement.alt = imagesElementAlt[i];
//   console.log(imagesElement[i]);
//   return liElement;
// };
