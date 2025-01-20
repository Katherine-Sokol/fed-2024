// ДЗ 6: Масиви і функції

// 1. Калькулятор
// Створіть функції для кожної математичної операції (функція суми створена на уроці). Використовуючи switch напишіть програму
// яка отримує знак математичної операції (+, -, /, *) та 2 значення і запускає функцію для цієї математичної операції з 2
// цифровими значеннями

function sumTwoNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtractTwoNumbers(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiplyTwoNumbers(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function divideTwoNumbers(firstNumber, secondNumber) {
  if (secondNumber === 0) {
    alert("На нуль ділити не можна!");
  }
  return firstNumber / secondNumber;
}

function calculate(operation, firstNumber, secondNumber) {
  switch (operation) {
    case "+":
      console.log(sumTwoNumbers(firstNumber, secondNumber));
      break;
    case "-":
      console.log(subtractTwoNumbers(firstNumber, secondNumber));
      break;
    case "*":
      console.log(multiplyTwoNumbers(firstNumber, secondNumber));
      break;
    case "/":
      console.log(divideTwoNumbers(firstNumber, secondNumber));
      break;
  }
}
calculate("+", 2, 5);
calculate("-", 1, 15);
calculate("*", 12, 2);
calculate("/", 4, 0);

// 2. Параметри та колбеки:
// Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), і викликає
// цю функцію для кожного елемента масиву.

function wellcomUser(users, hiFunction) {
  for (let i = 0; i < users.length; i++) {
    hiFunction(users[i]);
  }
}

function hiUser(user) {
  console.log(`Вітаю ${user}`);
}

let users = ["Tom", "Alice", "Monica"];
wellcomUser(users, hiUser);

// 3. Стрілкові функції:
// Перепишіть попередню функцію в стрілкову

let wellcomUserfunction = (users, hiFunction) => {
  for (let i = 0; i < users.length; i++) {
    hiFunction(users[i]);
  }
};

let hiUserFunction = (user) => {
  console.log(`Вітаю ${user}`);
};

let userNames = ["Kate", "Sam", "Alex"];
wellcomUserfunction(userNames, hiUserFunction);

// 4. Параметри за замовчуванням:
// Створіть функцію, яка приймає параметр зі значенням за замовчуванням і виводить його.

function showParam(param = "something") {
  console.log(param);
}

showParam("text");
showParam();

// 5. Задача з колбеком:
// Створіть функцію, яка приймає стрінг значення і функцію-колбек, і викликає цю функцію-колбек, передаючи їй стрінг значення

let someFunction = (string, callback) => {
  callback(string);
};

function testFunction(text) {
  console.log(text);
}

someFunction("test", testFunction);

// 6. Перепишіть стрілкову функцію в звичайну
// const multiplyValues = (a, b, c) => a * b * c;

function multiplyValues(a, b, c) {
  return a * b * c;
}
