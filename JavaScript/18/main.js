// ДЗ 18: Обробка даних форм

// Форма з вибором улюбленого кольору:
// Створіть форму з декількома радіокнопками, кожна з яких представляє різний колір (наприклад, червоний, зелений, синій).
// Використовуйте подію onchange для кожної радіокнопки, щоб змінювати колір фону сторінки відповідно до вибору користувача.

let body = document.querySelector("body");
let colorForm = document.querySelector(".color-form");
let [...radioButtons] = document.querySelectorAll('input[name="color"]');
colorForm.addEventListener("change", () => {
  for (radioButton of radioButtons) {
    if (radioButton.checked) {
      body.style.backgroundColor = radioButton.value;
      break;
    }
  }
});

// Форма для вибору хобі з чекбоксами:
// Створіть чекбокси для різних хобі (наприклад, читання, спорт, музика).
// Встановіть обробник події onchange для кожного чекбоксу, щоб відображати список вибраних хобі у текстовому елементі під формою.

let resultBtn = document.querySelector(".showResult");
let resutltBox = document.querySelector(".resultBox");
let [...checkboxes] = document.querySelectorAll('input[name="hobby"]');

let checkedValues = [];
resultBtn.onclick = function () {
  resutltBox.innerHTML = "";
  checkedValues = [];
  checkboxes.forEach((item) => {
    if (item.checked) {
      checkedValues.push(item.value);
    }
  });
  resutltBox.innerText = `Chosen hobbies: ${checkedValues.toString()}`;
};

// Форма з вибором країни із випадаючого списку:
// Створіть випадаючий список з назвами країн.
// Використовуйте подію onchange для випадаючого списку, щоб виводити інформацію про вибрану країну, таку як столиця або населення,
// в іншому елементі на сторінці.

let selectEl = document.querySelector("#countries");
let result = document.querySelector(".result");
selectEl.addEventListener("change", function () {
  switch (this.value) {
    case "Ukraine":
      result.innerText = `The capital of Ukraine is Kyiv. The population - 37 millions.`;
      break;
    case "UK":
      result.innerText = `The capital of UK is London. The population - 68 millions.`;
      break;
    case "USA":
      result.innerText = `The capital of USA is Washington. The population - 335 millions.`;
      break;
  }
});

// Форма для оцінювання якості обслуговування:
// Створіть групу радіокнопок для оцінки від 1 до 5.
// Додайте обробник події onchange для виявлення вибору користувача, а потім виведіть відповідне повідомлення (наприклад, "Дякуємо
// за вашу оцінку!").

let ratingForm = document.querySelector(".rating-form");
let [...radios] = document.querySelectorAll('input[name="rate"]');
ratingForm.addEventListener("change", () => {
  for (radio of radios) {
    if (radio.checked) {
      console.log(`Result is ${radio.value}`);
      alert(`Дякуємо за вашу оцінку!`);
      break;
    }
  }
});

// Додаткове завдання:
// Створіть форму замовлення піци де в селекті є назва, за допомогою радіобатонів вибирається розмір, а за допогою чекбоксів
// додаткова начинка.
// При зміні в формі треба рахувати ціну.
// Кожний розмір +50 до ціни кожна додаткова вибрана начинка +25 до ціни.

let pizzaType = document.querySelector("#types");
let pizzaSize = document.querySelector(".pizza-size");
let [...sizes] = document.querySelectorAll('input[name="size"]');
let [...fillings] = document.querySelectorAll('input[name="filling"]');
let orderBtn = document.querySelector(".order");
let price = 0;
let sizeOverpay = 0;
let fillingOverpay = 0;

pizzaType.addEventListener("change", function () {
  switch (this.value) {
    case "Cheesy":
      price = 100;
      break;
    case "Neapolitan":
      price = 112;
      break;
    case "Margherita":
      price = 55;
      break;
  }
  console.log(price);
});

pizzaSize.addEventListener("change", function () {
  for (size of sizes) {
    if (size.checked) {
      switch (size.value) {
        case "medium":
          sizeOverpay = 50;
          break;
        case "large":
          sizeOverpay = 100;
          break;
      }
      break;
    }
  }
  console.log(sizeOverpay);
});

orderBtn.addEventListener("click", function (e) {
  e.preventDefault();
  for (const filling of fillings) {
    if (filling.checked) {
      fillingOverpay += 25;
    }
  }
  console.log(fillingOverpay);
  price = price + sizeOverpay + fillingOverpay;
  alert(`Thank You for your order! Total price is ${price}.`);
  price = 0;
  sizeOverpay = 0;
  fillingOverpay = 0;
  for (size of sizes) {
    size.checked = false;
  }
});
