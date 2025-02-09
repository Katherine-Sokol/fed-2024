// ДЗ 12: Робота з DOM

// Створіть HTML-сторінку з елементами header, section,  div, задайте елементам атрибути id, сlass.

// Виберіть ці елементи за допомогою
// getElementById
// getElementsByClassName
// getElementsByTagName

let elementId = document.getElementById("shopping-list");
let elementClass = document.getElementsByClassName("description");
let elementTag = document.getElementsByTagName("div");

console.log(elementId);
console.log(elementClass);
console.log(elementTag);

// Створіть список ul з 5 елементами li всередині.
// За допомогою querySelector виберіть:
// - перший елемент списку
// - останній елемент списку
// - 3 елемент списку

let firstElement = document.querySelector("li:first-child");
let lastElement = document.querySelector("li:last-child");
let thirdElement = document.querySelector("li:nth-child(3)");

console.log(firstElement);
console.log(lastElement);
console.log(thirdElement);

// За допомогою querySelectorAll
// - всі елементи li в списку
// - конвертуйте вибрані елменти в массив

let allElements = document.querySelectorAll("ul li");
let arrayElements = Array.from(allElements);
console.log(allElements);
console.log(arrayElements);

// Створіть на сторінці елемент який вибирається ціми селекторами

let listItems = document.querySelectorAll("ul.nav > li");
console.log(listItems);

let listItem = document.querySelectorAll("li:nth-child(2)");
console.log(listItem);
