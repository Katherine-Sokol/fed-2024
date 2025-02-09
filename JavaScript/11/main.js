// ДЗ 11: ES6 синтаксис

// Завдання 1. Тема: Spread
// Напишіть програму, яка об'єднує два масиви в один, використовуючи оператор Spread, і виводить новий масив.

let firstArray = [1, 2, 3, 4, 5];
let secondArray = ["a", "b", "c"];

function spreadArray(firstArr, secondArr) {
  let array = [...firstArr, ...secondArr];
  console.log(array);
}

spreadArray(firstArray, secondArray);

// Завдання 2. Тема: Rest
// Створіть функцію, яка приймає перший аргумент як рядок, а решту аргументів зберігає в масиві за допомогою оператора Rest.
// Функція повинна вивести рядок і масив.
// Напишіть функцію, яка приймає будь-яку кількість числових аргументів та обчислює їх середнє значення за допомогою оператора Rest.

function restFunction(string, ...args) {
  console.log(string, args);
}

restFunction("abc", 1, 2, 5, "a", "b");

function findAverage(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total / args.length;
}

console.log(findAverage(1, 2, 5, 10, 12, 20));

// Завдання 3. Тема: TypeOf
// Створіть функцію, яка приймає аргумент будь-якого типу та виводить повідомлення про його тип за допомогою оператора typeof.
// Напишіть програму, яка перевіряє тип змінної та виводить повідомлення "Це число", "Це рядок" або "Це інший тип", використовуючи
// оператор typeof.

function checkType(value) {
  switch (typeof value) {
    case "string":
      console.log("Це рядок");
      break;
    case "number":
      console.log("Це число");
      break;
    default:
      console.log("Це інший тип");
      break;
  }
}

checkType("something");
checkType(12);
checkType("12");
checkType(true);
