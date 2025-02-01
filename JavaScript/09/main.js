// ДЗ 9: ООП

// Завдання 1. Створення класу та об'єкта:
// Створіть клас Person з властивостями name та age.
// Створіть об'єкт з цього класу з ім'ям "John" та віком 30.

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Завдання 2. Методи класу:
  // Розширте клас Person, додайте метод sayHello, який виводить повідомлення з привітанням та ім'ям особи.

  sayHello() {
    console.log(`Hello, ${this._name}!`);
  }
}

let somePerson = new Person("John", 30);
console.log(somePerson);
somePerson.sayHello();

// Завдання 3. Наслідування:
// Створіть клас Student, який наслідує від класу Person.
// Додайте властивість studentId до класу Student.
// Додайте метод study, який виводить повідомлення про вивчення студентом.

class Student extends Person {
  constructor(name, age, studentId) {
    super(name, age);
    this._studentId = studentId;
  }

  study() {
    console.log(`${this._name} is a student with ID ${this._studentId}`);
  }
}

let someStudent = new Student(somePerson._name, somePerson._age, 1);
someStudent.study();
