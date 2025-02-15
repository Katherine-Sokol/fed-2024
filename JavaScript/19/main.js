// ДЗ 19: Регулярні вирази

// 1. Знаходження всіх великих літер в тексті і збереження їх в масив
let textStr =
  "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";

let [...capitalLetters] = textStr.match(/[A-Z]/g);
console.log(capitalLetters);

// 2. Вибір числових значень зі строки
let operation = "5 плюс 7 = 3";

let [...numbers] = operation.match(/\d/g);
console.log(numbers);

// 3. Знаходження слів із певною кількістю символів:
// Напишіть регулярний вираз для знаходження слів у тексті, що складаються рівно з 5 букв, можна взяти текст з textStr з першого
// завдання

let [...words] = textStr.match(/\b[a-zA-Z]{5}\b/g);
console.log(words);
