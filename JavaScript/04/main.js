// ДЗ 4: Оператори if else

// 1. Порівняння трьох чисел:
// Запитайте у користувача ввести три числа (ввести через prompt)
// Виведіть у консоль повідомлення про те, яке з введених чисел є найбільшим.

let value1 = Number(prompt("Введіть будь-яке число:"));
let value2 = Number(prompt("Введіть будь-яке число:"));
let value3 = Number(prompt("Введіть будь-яке число:"));

let result = value1 > value2 ? value1 : value2;
result = result > value3 ? result : value3;

console.log(
  `Найбільше із введенних чисел(${value1}/${value2}/${value3}): ${result}`
);

// 2. Визначення сезону:
// Запитайте у користувача ввести номер місяця (від 1 до 12).
// Виведіть у консоль повідомлення про те, якому сезону належить введений місяць.

let month = Number(prompt("Введіть номер місяця(від 1 до 12):"));

if (month == 1 || month == 2 || month == 12) {
  console.log(`Місяць № ${month} належить зимі.`);
} else if (month >= 3 && month <= 5) {
  console.log(`Місяць № ${month} належить весні.`);
} else if (month >= 6 && month <= 8) {
  console.log(`Місяць № ${month} належить літу.`);
} else if (month >= 9 && month <= 11) {
  console.log(`Місяць № ${month} належить осені.`);
} else {
  console.log(`Місяця № ${month} не існує.`);
}

// 3. Визначення розміру числа:
// Запитайте у користувача ввести число.
// Виведіть у консоль повідомлення про те, чи введене число є додатнім, від'ємним чи нулем.

let value = Number(prompt("Введіть будь-яке число:"));

if (value < 0) {
  console.log(`Введене число ${value} є від'ємним.`);
} else if (value > 0) {
  console.log(`Введене число ${value} є додатнім.`);
} else if (value == 0) {
  console.log(`Введене число ${value} є нулем.`);
} else {
  console.log(`Введене значення ${value} не є числом.`);
}

// 4. Перевірка величини кута:
// Запитайте у користувача ввести величину кута в градусах.
// Виведіть у консоль повідомлення про те, чи є величина кута гострою чи тупою ( це більше і менеше 90 градусів відповідно), використовуючи тернарний оператор.

let angle = Number(
  prompt("Введіть величину кута в градусах(не менше 0 та не більше 180):")
);

angle > 90
  ? console.log(`Кут в ${angle} градусів є тупим.`)
  : console.log(`Кут в ${angle} градусів є гострим.`);

// 5. Оцінка студента:
// Запитайте у користувача ввести свою оцінку за тест (від 0 до 100).
// Визначте, яку оцінку отримає студент (A, B, C, D або F) за таких умов:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// менше 60: F
// Збільште оцінку студента на одиницю, використовуючи постфіксний інкремент.
// Виведіть у консоль повідомлення про оцінку до і після інкремента та визначте за допомогою тернарного оператора, чи студент зарахований чи ні (прохідний бал 60).

let mark = Number(prompt("Введіть номер місяця(від 0 до 100):"));

if (mark <= 100 && mark >= 90) {
  console.log(`Кількість балів: ${mark}. Оцінка: A`);
} else if (mark < 90 && mark >= 80) {
  console.log(`Кількість балів: ${mark}. Оцінка: B`);
} else if (mark < 80 && mark >= 70) {
  console.log(`Кількість балів: ${mark}. Оцінка: C`);
} else if (mark < 70 && mark >= 60) {
  console.log(`Кількість балів: ${mark}. Оцінка: D`);
} else {
  console.log(`Кількість балів: ${mark}. Оцінка: F`);
}

console.log(`Кількість балів після збільшення на бал: ${++mark}.`);

mark >= 60
  ? console.log("Студент зарахований.")
  : console.log("Студент не зарахований.");
