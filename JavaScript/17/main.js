// ДЗ 17: Робота з формами

// Завдання 1: Конвертер валют
// Мета: Створити простий конвертер валют, який перетворює введені користувачем гроші з однієї валюти в іншу.
// Інструкції:
// Створіть два поля введення: одне для суми, друге для курсу обміну.
// Додайте кнопку, яка виконає конвертацію при її натисканні.
// При натисканні кнопки, зчитайте значення з обох полів і виконайте конвертацію.
// Виведіть результат конвертації на сторінку.

let currencyForm = document.querySelector(".currency-form");
let count = document.querySelector(".count");
let exchange = document.querySelector(".exchange");
let calculateBtn = document.querySelector(".calculate");
let output = document.querySelector(".output");

function calculate(count, exchange) {
  return parseFloat(count) * parseFloat(exchange);
}

calculateBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (isNaN(count.value) || isNaN(exchange.value)) {
    alert(`Введіть числове значення (наприклад, 35.67).`);
    count.value = "";
    exchange.value = "";
  } else {
    output.innerText = `Результат: ${calculate(
      count.value,
      exchange.value
    )} y.o.`;
    count.value = "";
    exchange.value = "";
  }
});

// Завдання 2: Динамічний список задач
// Мета: Створити додаток для управління списком задач, де користувач може додавати та видаляти задачі.
// Інструкції:
// Створіть поле введення для введення назви задачі.
// Додайте кнопку для додавання задачі до списку.
// Кожна додана задача повинна з'являтися на сторінці у вигляді списку.
// Додайте можливість видалення задачі зі списку.

function createNote(textNote) {
  let note = document.createElement("div");
  note.classList.add("note");
  let text = document.createElement("p");
  text.classList.add("text-note");
  text.innerText = textNote;
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Видалити";
  note.appendChild(text);
  note.appendChild(deleteButton);

  deleteButton.onclick = function () {
    note.remove();
  };

  return note;
}

let form = document.querySelector(".form");
let task = document.querySelector(".text-input");
let button = document.querySelector(".create-note");
console.log(task.value);

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (task.value === "") {
    alert("Поле не може бути пустим!");
  } else {
    let note = createNote(task.value);
    console.log(note);
    document.querySelector("body").appendChild(note);
    task.value = "";
  }
});
