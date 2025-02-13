// ДЗ 15: Робота з подіями

// 1. onclick
// Задача: Створіть кнопку та елемент Р з текстом, при кліку на кнопку текст змінює колір. Можете використати функцію яка генерує
// різний колір.

let body = document.querySelector("body");
let btn = document.createElement("button");
btn.innerText = "Button";
btn.style.padding = "20px";
btn.style.fontSize = "40px";
body.appendChild(btn);

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(255));
}

function getRandomColor() {
  let red = getRandomInt();
  let green = getRandomInt();
  let blue = getRandomInt();
  return `rgb(${red},${green},${blue})`;
}

btn.onclick = function () {
  btn.style.color = getRandomColor();
};

// 2. ondblclick
// Задача: Створіть елемент який при подвійному кліку збільшує свій розмір в 2 рази ( змінюємо width i height).

let width = btn.offsetWidth;
let height = btn.offsetHeight;

btn.ondblclick = function () {
  btn.style.width = `${width * 2}px`;
  btn.style.height = `${height * 2}px`;
};

// 3. addEventListener і removeEventListener
// Створити кнопку і текстовий елемент в якому розмістіть лічільник: 0, при кліку на кнопку в текстовому значенні повино
// збільшуватись значення на 1. Коли значення лічильника перевищує 10, кнопка перестає реагувати на кліки.

let clickBnt = document.createElement("button");
clickBnt.innerText = 0;
clickBnt.style.padding = "20px";
clickBnt.style.fontSize = "40px";
clickBnt.style.marginLeft = "20px";
body.appendChild(clickBnt);

let count = 0;
function increaseValue() {
  count++;
  clickBnt.innerText = count;
  if (count == 10) {
    clickBnt.removeEventListener("click", increaseValue);
  }
}

clickBnt.addEventListener("click", increaseValue);

// 4. Створіть веб-сторінку з кнопкою та 10 елементами (наприклад, div). Підключіть обробник події onclick до кожного елементу.
// Коли користувач натисне на елемент,цей елемент має бути видалений зі сторінки.

let container = document.createElement("container");
container.style.display = "flex";

let button = document.createElement("button");
button.innerText = "Click";
button.style.padding = "20px";
button.style.fontSize = "40px";
container.appendChild(button);

for (let i = 0; i < 10; i++) {
  let div = document.createElement("div");
  div.style.width = "40px";
  div.style.height = "40px";
  div.style.border = "2px solid black";
  container.appendChild(div);
}
body.appendChild(container);

container.addEventListener("click", function (event) {
  container.removeChild(event.target);
});

// 5.event.target
// Створіть блок з классом blockContainer з 3 кнопками,  в кожної з яких унікальний клас button.first, button.second, button.third.
// Додайте обробник кліка на blockContainer і при кліку на кнопку виводьте alert в якому повідомляйте яка кнопка отримала клік.

let blockContainer = document.createElement("div");
blockContainer.classList.add("blockContainer");
body.appendChild(blockContainer);

let firstButton = document.createElement("button");
firstButton.classList.add("first");
blockContainer.appendChild(firstButton);

let secondButton = document.createElement("button");
secondButton.classList.add("second");
blockContainer.appendChild(secondButton);

let thirdButton = document.createElement("button");
thirdButton.classList.add("third");
blockContainer.appendChild(thirdButton);

let [...buttons] = document.querySelectorAll(".blockContainer > button");
for (const element of buttons) {
  element.style.padding = "20px";
  element.innerText = element.className;
}

blockContainer.addEventListener("click", function (event) {
  alert(`The ${event.target.className} button is pressed!`);
});
