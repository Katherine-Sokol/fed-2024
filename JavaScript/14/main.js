// ДЗ 14: Маніпуляція атрибутами елементів

// 1. Створіть сторінку та підключіть до неї js

// 2. За допомогою js  створіть на сторінці елемент header  та задайте padding 50px та background-color жовтого кольору і
// властивість text-align center

let body = document.querySelector("body");

let header = document.createElement("header");
header.innerHTML = "Header";
header.style.padding = "50px";
header.style.backgroundColor = "yellow";
header.style.textAlign = "center";

body.appendChild(header);

// 3. Створіть в хедері А теги з значенням з обєкта name  встановленим значенням в href з url.
const menuData = [
  { name: "Головна", url: "/" },
  { name: "Про нас", url: "/about" },
  { name: "Послуги", url: "/services" },
  // Додайте ще пункти меню за потреби
];

function addLink(element) {
  let link = document.createElement("a");
  link.innerHTML = element.name;
  link.setAttribute("href", element.url);
  return link;
}

for (const element of menuData) {
  header.appendChild(addLink(element));
}

// 4. Додайте тегам А що створені в header  атрибут target з властивістю _blank

let links = document.querySelectorAll("header > a");
for (const element of links) {
  element.setAttribute("target", "_blank");
}

// 5. Створіть блок за допомогою js задайте блоку стиль display flex та в середині цього блоку створіть 50 div блоків з правилом
// border-radius, width 50px height 50px та background-color

let divElement = document.createElement("div");
divElement.style.display = "flex";
divElement.style.flexWrap = "wrap";
for (let i = 0; i < 50; i++) {
  let div = document.createElement("div");
  div.style.borderRadius = "50px";
  div.style.width = "50px";
  div.style.height = "50px";
  div.style.backgroundColor = "red";
  divElement.appendChild(div);
}
header.after(divElement);

// 6. Додайте всім стврореним 50 div елементам класс circle-elemt

let divArray = Array.from(divElement.children);

for (const element of divArray) {
  element.className = "circle-elemt";
}

// Додаткове завдання: спробуйте зробити  завдання 5 так щоб в кожного div елемента був унікальний бекграунд

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(255));
}

function getRandomColor() {
  let red = getRandomInt();
  let green = getRandomInt();
  let blue = getRandomInt();
  return `rgb(${red},${green},${blue})`;
}

for (const element of divArray) {
  element.style.backgroundColor = getRandomColor();
}
