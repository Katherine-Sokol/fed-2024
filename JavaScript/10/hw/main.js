// ДЗ 10: Робота з Math та String

// Завдання 1. Завдання для Math.min та Math.max:
// Створіть функцію, яка приймає два числа як аргументи і повертає менше з них.
// Створіть функцію, яка приймає два числа як аргументи і повертає більше з них.

function findMin(firstNumber, secondNumber) {
  return Math.min(firstNumber, secondNumber);
}

function findMax(firstNumber, secondNumber) {
  return Math.max(firstNumber, secondNumber);
}

console.log(findMin(10, -15));
console.log(findMin(10, 15));
console.log(findMax(10, -15));
console.log(findMax(10, 15));

// Завдання 2. Завдання для Math.pow:
// Створіть функцію, яка підносить число до заданого ступеня.
// Виведіть результат у консоль.

function findPow(number, pow) {
  return Math.pow(number, pow);
}

console.log(findPow(10, 2));
console.log(findPow(2, 4));

// Завдання 3. Завдання для Math.floor та Math.ceil:
// Створіть функцію, яка приймає випадкове дробове число та використовує Math.floor для округлення вниз.
// Створіть функцію, яка приймає випадкове дробове число та використовує Math.ceil для округлення вгору.

function findFloor(number) {
  return Math.floor(number);
}

function findCeil(number) {
  return Math.ceil(number);
}

console.log(findFloor(2.4));
console.log(findCeil(2.4));

// Завдання 4. Завдання для Date.getYear:
// Створіть функцію, яка повертає рік народження користувача коли користувач вводить свій вік
// Виведіть результат у консоль.

function findBirthDate(ages) {
  return new Date().getFullYear() - ages;
}

console.log(findBirthDate(16));

// Завдання 5. Завдання для Date.toLocaleString:
// Створіть об'єкт Date для поточної дати та часу.
// Використайте метод toLocaleString(), щоб отримати поточну дату та час у зручному для читання форматі.
// Виведіть результат у консоль.

let currentDate = new Date().toLocaleString();
console.log(currentDate);

// Завдання 6. Завдання для String.split та toUpperCase:
// Створіть рядок, який містить слова, розділені пробілами.
// Використайте метод split, щоб розбити рядок на масив слів.
// Виведіть отриманий масив у консоль у верхньому регістрі.

let someString = "абетка король волонтер архітектор вогонь сонце ніч";
let array = someString.toUpperCase().split(" ");
console.log(array);
