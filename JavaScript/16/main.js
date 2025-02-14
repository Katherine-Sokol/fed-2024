// ДЗ 16: Робота з подіями

// Завдання 'onMouseOver' і 'onMouseOut':
// Створіть область на сторінці (наприклад, div), яка змінює свій фоновий колір, коли користувач наводить на неї курсор миші, та
// повертає початковий колір, коли курсор покидає цю область.

let container = document.querySelector(".container");
container.addEventListener("mouseover", function () {
  this.style.background = "yellow";
});
container.addEventListener("mouseout", function () {
  this.style.background = "aqua";
});

// Завдання 'onContextMenu':
// Створіть елемент текстовий блок, на який при правому кліку миші замість звичайного контекстного меню браузера з'являється
// власне створене контекстне меню. Це меню може містити опції, як-от "вирівняти по центру", "вирівняти по правому центру",
// "вирівняти по лівому краю", "Приховати елемент".

let contextMenu = document.querySelectorAll(".context-menu");
let contextMenuOpen = document.querySelector(".context-menu-open");
for (let i = 0; i < contextMenu.length; i++) {
  contextMenu[i].addEventListener("contextmenu", function (e) {
    e.preventDefault();
    contextMenuOpen.style.left = e.clientX + "px";
    contextMenuOpen.style.top = e.clientY + "px";
    contextMenuOpen.style.display = "block";
  });
}
window.addEventListener("click", function () {
  contextMenuOpen.style.display = "none";
});

contextMenuOpen.addEventListener("click", function (e) {
  let contextMenu = document.querySelector(".context-menu");
  if (e.target.innerText == "вирівняти по центру") {
    contextMenu.style.textAlign = "center";
    contextMenu.style.alignItems = "center";
  } else if (e.target.innerText == "вирівняти по правому центру") {
    contextMenu.style.textAlign = "right";
    contextMenu.style.alignItems = "center";
  } else if (e.target.innerText == "вирівняти по лівому краю") {
    contextMenu.style.textAlign = "left";
    contextMenu.style.alignItems = "left";
  } else if (e.target.innerText == "Приховати елемент") {
    contextMenu.style.display = "none";
  }
});

// Завдання 'onMouseOver' і 'onMouseOut':
// Розмістіть зображення на сторінці,та додайте події де при наведенні курсору на зображення воно збільшується або підсвічується.
// Коли курсор миші покидає зображення, воно повертається до свого початкового розміру або стилю.

let image = document.querySelector(".image");
image.addEventListener("mouseover", function () {
  this.style.boxShadow = "0px 0px 20px 10px red";
  this.style.transform = "scale(1.1)";
  this.style.transition = "transform 1s, box-shadow 1s";
});
image.addEventListener("mouseout", function () {
  this.style.boxShadow = "none";
  this.style.transform = "none";
});

// Завдання 'keyup':
// Створіть ігрове поле, де користувач може переміщати об'єкт (наприклад, квадрат або коло) за допомогою клавіш стрілок. Рух
// об'єкта повинен зупинятися, коли клавіша відпущена

let x = 0;
let y = 0;
let gameArea = document.querySelector(".game");
let square = document.querySelector(".square");

document.addEventListener("keydown", function (e) {
  switch (e.key) {
    case "ArrowUp":
      e.preventDefault();
      y = Math.max(0, y - 10);
      break;
    case "ArrowDown":
      e.preventDefault();
      y = Math.min(gameArea.clientHeight - square.clientHeight, y + 10);
      break;
    case "ArrowLeft":
      x = Math.max(0, x - 10);
      break;
    case "ArrowRight":
      x = Math.min(gameArea.clientWidth - square.clientWidth, x + 10);
      break;
  }
  square.style.top = `${y}px`;
  square.style.left = `${x}px`;
});

// Комбіноване завдання 'keydown' і 'keyup' для створення інтерактивного меню:
// Коли користувач натискає певну клавішу М, з'являється  меню ul елемент в якому 3 li, і зробити можливість  переміщатися по
// пунктах меню, використовуючи клавіші вгору/вниз змінюючи бекграунд. При натиску клавіші С меню зникає.

let menu = document.querySelector(".menu");
let [...items] = Array.from(menu.children);

document.addEventListener("keyup", function (e) {
  if (e.key == "m") {
    menu.style.display = "block";
    console.log(items);
    let count = -1;
    document.addEventListener("keydown", function (e) {
      if (e.key == "ArrowUp") {
        count--;
        if (count < 0) count = items.length - 1;
      }
      if (e.key == "ArrowDown") {
        count++;
        if (count > items.length - 1) count = 0;
      }
      console.log(count);
      items.forEach((item) => item.classList.remove("active"));
      items[count].classList.add("active");
    });
  }
});

document.addEventListener("keyup", function (e) {
  if (e.key == "c") {
    menu.style.display = "none";
  }
});

// Додаткове завдання 'onMouseDown' і 'onMouseUp':
// Реалізуйте просту гру "Перетягування": створіть об'єкт, який можна перетягувати в межах певної області, використовуючи події
// натискання та відпускання кнопки миші.

let ball = document.querySelector(".ball");

ball.addEventListener("mousedown", function (event) {
  let shiftX = event.clientX - ball.getBoundingClientRect().left;
  let shiftY = event.clientY - ball.getBoundingClientRect().top;

  ball.style.position = "absolute";
  ball.style.zIndex = 1000;
  document.body.append(ball);

  moveAt(event.pageX, event.pageY);

  function moveAt(pageX, pageY) {
    ball.style.left = pageX - shiftX + "px";
    ball.style.top = pageY - shiftY + "px";
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  document.addEventListener("mousemove", onMouseMove);

  ball.addEventListener("mouseup", function () {
    document.removeEventListener("mousemove", onMouseMove);
    ball.onmouseup = null;
  });
});

ball.ondragstart = function () {
  return false;
};
