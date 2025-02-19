// ДЗ 22: Ajax та promise

// Завдання 1.
// Ланцюжок promise: Напишіть ланцюжок promise, де перший promise додає число до вхідного параметра, другий множить його, а
// третій віднімає 10 від отриманого числа. Кожна операція повинна бути виконана в окремому then.
// Використайте catch для вловлювання помилок.

let a = 4;
// let a = "adsv";
new Promise((resolve) => {
  if (isNaN(a)) {
    throw new Error("parameter is not a number");
  }
  console.log(a + a);
  resolve(a + a);
})
  .then((value) => {
    console.log(`${value * value}`);
    return value * value;
  })
  .then((value) => {
    console.log(`${value - 10}`);
    return value - 10;
  })
  .catch((error) => console.log(error));

// Завдання 2.
// Перетворення тексту: Створіть функцію, яка приймає рядок і повертає promise. promise має перетворювати рядок у верхній
// регістр після 2 секундної затримки. Використайте setTimeout для створення затримки. Після завершення, використайте then для
// виведення результату і catch для обробки помилок.

function updateStringToUpperCase(string) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(string.toUpperCase()), 2000);
  })
    .then((value) => console.log(value))
    .catch((error) => console.log(error));
}

updateStringToUpperCase("abc");

// Завдання 3.
// Напишіть функцію, яка приймає два числа як аргументи і повертає promise. promise має вирішуватися з повідомленням про те,
// яке з чисел більше, або відхилятися, якщо числа рівні, з повідомленням "Числа рівні".

function compareNumbers(firstNumber, secondNumber) {
  return new Promise(function (resolve, reject) {
    if (firstNumber === secondNumber) {
      reject("Числа рівні");
    } else if (firstNumber > secondNumber) {
      resolve(`${firstNumber} > ${secondNumber}`);
    } else {
      resolve(`${firstNumber} < ${secondNumber}`);
    }
  })
    .then((value) => console.log(value))
    .catch((error) => console.log(error));
}

compareNumbers(1, 2);
compareNumbers(2, 2);
compareNumbers(1, -2);
