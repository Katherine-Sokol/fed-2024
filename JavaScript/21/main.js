// ДЗ 21: Json та робота зі сховищами

// Створіть веб-сторінку з текстовим полем і кнопкою. При натисканні на кнопку, збережіть введення користувача у sessionStorage.
// Додайте ще одну кнопку, яка при натисканні відображатиме збережені дані у веб-сторінці.

let createBtn = document.querySelector(".create-btn");
let text = document.querySelector(".input-text");
let showBtn = document.querySelector(".show-btn");
createBtn.addEventListener("click", function (e) {
  e.preventDefault();
  window.sessionStorage.setItem(`Item`, text.value);
  text.value = "";
});

showBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let result = document.createElement("p");
  result.innerText = window.sessionStorage.getItem(`Item`);
  document.querySelector("body").appendChild(result);
});

// Створіть просту форму з декількома налаштуваннями (наприклад, кольором фону сторінки), і збережіть вибір користувача у
// localStorage. При наступному відкритті сторінки, застосуйте ці налаштування.

let saveBtn = document.querySelector(".save-btn");
let [...radioButtons] = document.querySelectorAll('input[name="color"]');
saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  for (radioButton of radioButtons) {
    if (radioButton.checked) {
      window.localStorage.setItem("bg-color", radioButton.value);
      break;
    }
  }
});

function getBackgroundColor() {
  let color = window.localStorage.getItem("bg-color");
  console.log(color);
  document.querySelector("body").style.backgroundColor = color;
}

getBackgroundColor();

// Реалізуйте простий список завдань (to-do list), де можна додавати і видаляти пункти. Зберігайте список у localStorage, щоб
// після перезавантаження сторінки завдання залишалися доступні.

let form = document.querySelector(".form");
let task = document.querySelector(".text-input");
let button = document.querySelector(".create-note");
console.log(task.value);
let [...noteList] = [];

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
    updateLocalStorage(noteList);
  };

  return note;
}

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (task.value === "") {
    alert("Поле не може бути пустим!");
  } else {
    let note = createNote(task.value);
    document.querySelector("body").appendChild(note);
    updateLocalStorage(noteList);
    task.value = "";
  }
});

let [...notes] = JSON.parse(window.localStorage.getItem("todo-list"));
for (const note of notes) {
  document.querySelector("body").appendChild(createNote(note));
}

function updateLocalStorage(noteList) {
  let notes = document.querySelectorAll(".text-note");
  noteList = [];
  for (const element of notes) {
    noteList.push(element.innerText);
  }
  console.log(noteList);
  window.localStorage.setItem("todo-list", JSON.stringify(noteList));
}

// Створіть об'єкт JavaScript, який включає різні типи даних (наприклад, рядки, числа, масиви, об'єкти). Використовуйте
// JSON.stringify для конвертації об'єкта у формат JSON. Потім збережіть цей JSON у файл. Ви можете зробити це в редакторі коду,
// зберігши дані у файл із розширенням .json.

let user = {
  name: "Mark",
  age: 32,
  mail: "mark@mail.com",
  children: [
    {
      name: "Alice",
      age: 2,
    },
    {
      name: "Kate",
      age: 5,
    },
  ],
};

let userJSON = JSON.stringify(user);
console.log(userJSON);
