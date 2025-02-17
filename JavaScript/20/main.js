// ДЗ 20: Робота з функціями часу та сss custom property

// Напишіть функцію, яка приймає повідомлення та час у мілісекундах як аргументи, і виводить це повідомлення у консоль після
// зазначеного часу.

function showMessageInTime(message, time) {
  setTimeout(function () {
    console.log(message);
  }, time);
}

showMessageInTime("Hi!", 8000);

// Створіть кнопку яка при натисканні запускає таймер, який виводить збільшення лічильника кожну секунду. Коли лічильник досягне
// 10, автоматично зупиніть таймер.

let body = document.querySelector("body");
let button = document.createElement("button");
button.innerText = "Count to 10";
let text = document.createElement("p");
text.innerHTML = "Counter: ";

body.appendChild(button);
body.appendChild(text);

button.addEventListener("click", function () {
  let counter = 0;
  function count() {
    counter++;
    text.innerHTML = `Counter: ${counter}`;
    if (counter == 10) {
      clearInterval(intervalCounter);
    }
  }
  let intervalCounter = setInterval(count, 1000);
});

// Створіть HTML сторінку з кнопкою, яка змінює колір фону сторінки на випадковий колір який заданий в css зміних при кожному
// натисканні.

let changeColorBtn = document.createElement("button");
changeColorBtn.className = "change-color";
changeColorBtn.innerText = "Change background color";
body.appendChild(changeColorBtn);

function getRandomInt() {
  return Math.floor(Math.random() * Math.floor(255));
}

function getRandomColor() {
  let red = getRandomInt();
  let green = getRandomInt();
  let blue = getRandomInt();
  return `rgb(${red},${green},${blue})`;
}

changeColorBtn.addEventListener("click", function () {
  let root = document.documentElement;
  root.style.setProperty("--bg-color", getRandomColor());
});
