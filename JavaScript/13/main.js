// ДЗ 13: Маніпуляція DOM елементами

//   <ul id="tree">
//        <li>Елемент 1
//            <ul>
//                <li>Під-елемент 1.1</li>
//                <li>Під-елемент 1.2
//                    <ul>
//                        <li>Під-під-елемент 1.2.1</li>
//                        <li>Під-під-елемент 1.2.2</li>
//                    </ul>
//                </li>
//                <li>Під-елемент 1.3</li>
//            </ul>
//        </li>
//        <li>Елемент 2
//            <ul>
//                <li>Під-елемент 2.1</li>
//                <li>Під-елемент 2.2</li>
//            </ul>
//        </li>
//        <li>Елемент 3</li>
//    </ul>

//  1. Створіть сторінку в яку розмістіть список що розміщений вище, підключіть js файл до сторінки і виконайте такі завдання:
//     - виберіть всі елементи першого рівня вкладення і виведіть в консоль їх кількість;
//     - виведіть в консоль кількість елементів 2 рівня вкладення.

let list = document.querySelector("#tree");
let listElements = list.children;
console.log(
  `Кількість елементів першого рівня вкладення: ${listElements.length}`
);

let count = 0;
for (let i = 0; i < listElements.length; i++) {
  count += listElements[i].children.length;
}
console.log(`Кількість елементів першого рівня вкладення: ${count}`);

//     <table>
//         <thead>
//             <tr>
//                 <th>
//                     title
//                 </th>
//                 <th>
//                     year
//                 </th>
//                 <th>
//                     rating
//                 </th>
//             </tr>
//         </thead>
//     </table>

// 2. Пройдіть по масиву і зробіть заповнення таблиці даними з масива

const booksArray = [
  {
    title: "Пригоди Аліси в Країні Див",
    year: 1865,
    rating: 4.5,
  },
  {
    title: "1984",
    year: 1949,
    rating: 4.8,
  },
  {
    title: "Гаррі Поттер і філософський камінь",
    year: 1997,
    rating: 4.7,
  },
];

for (const element of booksArray) {
  let bookElement = document.querySelector("table");
  let book = document.createElement("tr");
  book.innerHTML =
    "<td>" +
    element.title +
    "</td>" +
    "<td>" +
    element.year +
    "</td>" +
    "<td>" +
    element.rating +
    "</td>";

  bookElement.appendChild(book);
}

// 3.  Створіть HTML-сторінку з контейнером, в який будуть додаватися елементи за допомогою JavaScript.
const elementsArray = [
  { tag: "p", text: "Елемент 1" },
  { tag: "div", text: "Елемент 2" },
  { tag: "span", text: "Елемент 3" },
];

// Створіть функцію, яка приймає об'єкт і створює новий елемент з використанням document.createElement, встановлює текст елемента
// та повертає його в контейнер.
// Пройдіть циклом по масиву і для кожного об'єкту застосуйте створену функцію.

function createElement(object) {
  let element = document.createElement(object.tag);
  element.innerHTML = object.text;
  return element;
}

let container = document.querySelector("container");
for (const element of elementsArray) {
  container.appendChild(createElement(element));
}

// 4. Створіть блок контейнер та перебераючи масив створіть елемент Р в залежності від usePrepend розмість його перед контейнером
// або за контейнером
const elementArray = [
  { text: "Елемент 1", usePrepend: true },
  { text: "Елемент 2", usePrepend: false },
  { text: "Елемент 3", usePrepend: true },
];

let containerElement = document.querySelector(".container");
for (const element of elementArray) {
  let text = document.createElement("p");
  text.innerHTML = element.text;
  if (element.usePrepend == true) {
    containerElement.before(text);
  } else {
    containerElement.after(text);
  }
}
