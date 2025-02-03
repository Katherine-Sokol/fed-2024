// ДЗ 10: Камінь, ножиці, бумага

const options = ["камінь", "ножиці", "папір"];

let choice = prompt("Введіть свій вибір: камінь, ножиці чи папір.")
  .trim()
  .toLowerCase();

if (!options.includes(choice)) {
  alert("Ви не обрали жоден з варіантів");
}

let random = options[Math.floor(Math.random() * options.length)];

function chooseWinner(firstChoice, secondChoice) {
  if (firstChoice === secondChoice) {
    alert(`${firstChoice} <-> ${secondChoice} = Нічия!`);
  } else if (
    (firstChoice === "камінь" && secondChoice === "ножиці") ||
    (firstChoice === "ножиці" && secondChoice === "папір") ||
    (firstChoice === "папір" && secondChoice === "камінь")
  ) {
    alert(`${firstChoice} <-> ${secondChoice} = Ви виграли!`);
  } else {
    alert(`${firstChoice} <-> ${secondChoice} = Ви програли!`);
  }
}

chooseWinner(choice, random);
