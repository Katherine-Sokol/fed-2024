// ДЗ 6: Методи масивів

// push:
// Завдання 1. Створіть порожній масив та використайте метод push, щоб додати до нього кілька елементів (наприклад, чисел чи рядків).

console.log("===push===");

let numbers = [];
numbers.push(12);
numbers.push(1);
numbers.push(34);
numbers.push(10);

console.log(numbers);

// Завдання 2. Створіть функцію, яка приймає масив і елемент, і використовує push для додавання цього елемента до масиву.

function addElementToArray(array, element) {
  array.push(element);
}

addElementToArray(numbers, 41);
console.log(numbers);

// pop:
// Завдання 1. Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.

console.log("===pop===");

let users = ["Maria", "Tom", "Sam", "Adam", "Kate"];
console.log(users);

users.pop();
console.log(users);

// Завдання 2. Напишіть функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.

function removeElementFromArray(array) {
  array.pop();
}

removeElementFromArray(users);
console.log(users);

// unshift:
// Завдання 1. Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.

console.log("===unshift===");

let animals = ["cat", "dog", "cow", "lion"];
console.log(animals);

animals.unshift("tiger");
console.log(animals);

// Завдання 2. Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.

function addFirstElementToArray(array, element) {
  array.unshift(element);
}

addFirstElementToArray(animals, "elephant");
console.log(animals);

// shift:
// Завдання 1. Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.

console.log("===shift===");

let list = ["butter", "bread", "water"];
console.log(list);

list.shift();
console.log(list);

// Завдання 2. Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.

function removeFirstElementFromArray(array) {
  array.shift();
}

removeFirstElementFromArray(list);
console.log(list);

// fill:
// Завдання 1. Створіть масив певного розміру і використайте метод fill, щоб заповнити його певним значенням.
console.log("===fill===");

let array = new Array(10);
array.fill("a");
console.log(array);

// Завдання 2. Напишіть функцію, яка приймає масив, значення та індекси, і використовує fill для заповнення масиву зазначеними
// значеннями на зазначених позиціях.

function fillArray(array, element, firstIndex, lastIndex) {
  array.fill(element, firstIndex, lastIndex);
}

fillArray(array, "b", 3, 4);
console.log(array);

// splice:
// Завдання 1. Створіть масив і використайте метод splice, щоб видалити кілька елементів з середини масиву.

console.log("===splice===");

let cities = ["London", "Paris", "Kharkiv", "New York", "Lviv", "Kyiv"];
console.log(cities);

cities.splice(1, 3);
console.log(cities);

// Завдання 2. Напишіть функцію, яка приймає масив, індекс та кількість елементів, і використовує splice для видалення елементів з
// масиву.

function deleteElementsFromArray(array, index, count) {
  array.splice(index, count);
}

deleteElementsFromArray(cities, 0, 1);
console.log(cities);

// reverse:
// Завдання 1. Створіть масив і використайте метод reverse, щоб перевернути змінений порядок його елементів.

console.log("===reverse===");

let countries = ["UK", "USA", "Canada", "Italy", "Ukraine", "China"];
console.log(countries);

countries.reverse();
console.log(countries);

// Завдання 2. Напишіть функцію, яка приймає масив і використовує reverse для зміни порядку його елементів.

function reverseArray(array) {
  array.reverse();
}

reverseArray(countries);
console.log(countries);

// concat:
// Завдання 1. Створіть два масиви і використайте метод concat, щоб об'єднати їх в один новий масив.

console.log("===concat===");

let firstArray = [1, 2, 3, 4, 5];
let secondArray = [12, 7, 30];
console.log(firstArray);
console.log(secondArray);

let thirdArray = firstArray.concat(secondArray);
console.log(thirdArray);

// Завдання 2. Напишіть функцію, яка приймає два масиви і використовує concat для об'єднання їх в новий масив.

function concatArrays(firstArray, secondArray) {
  return firstArray.concat(secondArray);
}

let newArray = concatArrays([1, 2, 3], ["a", "b", "c"]);
console.log(newArray);

// includes:
// Завдання 1. Створіть масив і використайте метод includes, щоб перевірити, чи масив містить певний елемент.

console.log("===includes===");

let letters = ["a", "b", "c"];
console.log(letters);

console.log(`Does array include element "a"? ${letters.includes("a")}`);
console.log(`Does array include element "d"? ${letters.includes("d")}`);

// Завдання 2. Напишіть функцію, яка приймає масив і елемент, і використовує includes для перевірки наявності цього елемента в
// масиві.

function checkElement(array, element) {
  return array.includes(element);
}

console.log(`Does array include element "a"? ${checkElement(letters, "a")}`);

// filter:
// Завдання 1. Створіть масив чисел і використайте метод filter, щоб створити новий масив, що містить лише парні числа.

console.log("===filter===");

let numbersArray = [7, 6, 15, 22, 17, 345, 59, 114, 71, 88, 95];
console.log(numbersArray);

let evenNumbers = numbersArray.filter((a) => {
  if (a % 2 === 0) return a;
});
console.log(evenNumbers);

// Завдання 2. Напишіть функцію, яка приймає масив і функцію-умову, і використовує filter для створення нового масиву, що містить
// елементи, які задовольняють умову.

function filterArray(array, filterFunction) {
  return array.filter(filterFunction);
}

let oddNumbers = filterArray(numbersArray, (a) => {
  if (a % 2 !== 0) return a;
});
console.log(oddNumbers);

// map:
// Завдання 1. Створіть масив чисел і використайте метод map, щоб створити новий масив, який містить квадрати кожного числа.

console.log("===map===");

let simpleNumbers = [1, 3, 5, 4, 8, 9];
console.log(simpleNumbers);

let multipliedNumbers = simpleNumbers.map((a) => a * a);
console.log(multipliedNumbers);

// Завдання 2. Напишіть функцію, яка приймає масив і функцію-перетворювач, і використовує map для створення нового масиву, в якому
// кожен елемент отримує стрінг до значення.

function mapArray(array, mapFunction) {
  return array.map(mapFunction);
}

let stringArray = mapArray(simpleNumbers, (value) => `Value ${value}`);
console.log(stringArray);
