// ДЗ 8: Об'єкти і цикли

// Завдання 1.
// Перепишіть цей код використовуючи let const~
// // Замість var
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// // Замість var
// var message = 'test';
// function example() {
//     if (true) {
//         var message = 'Hello, world!';
//         console.log(message);
//     }
//     console.log(message); // Виведе 'Hello, world!'
// }

const message = "test";
function example() {
  if (true) {
    const message = "Hello, world!";
    console.log(message);
  }
  console.log(message);
}

example();

// Завдання 2.
// Використовуючи for in  виведіть значення з об'єктку в console.log
const person = {
  name: "John",
  age: 25,
  occupation: "Developer",
};

for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(`${key} : ${person[key]}`);
  }
}

// Завдання 3.
// Використовуючи for of  та for in  виведіть занчення з об'єктів які знаходяться в масиві
const students = [
  { name: "Alice", age: 20, grade: "A" },
  { name: "Bob", age: 22, grade: "B" },
  { name: "Charlie", age: 21, grade: "C" },
];

for (const value of students) {
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      console.log(`${key} : ${value[key]}`);
    }
  }
}
