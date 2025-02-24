// ДЗ 23: Fetch та надсилання запитів

// Використовуйте fetch для отримання списку всіх користувачів з JSONPlaceholder (/users ендпойнт).

window.onload = function () {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())

    // Виведіть імена та електронні адреси користувачів у консоль або на веб-сторінку.

    .then((json) => console.log(json))
    .catch((error) => console.log("Error: ", error));

  // Виведення детальної інформації про одного користувача.
  // Зробіть запит до /users/1 (або будь-якого іншого ID), щоб отримати деталі про конкретного користувача.

  fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())

    // Виведіть отриману інформацію в форматованому вигляді, включаючи ім'я, нікнейм та електронну адресу.

    .then((user) =>
      console.log(
        `User's name: ${user.name}, username: ${user.username}, email: ${user.email}`
      )
    )
    .catch((error) => console.log("Error: ", error));

  // Отримання та відображення постів конкретного користувача
  // Використовуйте /posts?userId=1 для отримання постів певного користувача.

  fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
    .then((response) => response.json())

    // Виберіть та виведіть заголовки цих постів.
    .then((posts) =>
      posts.forEach((element) => {
        console.log(element.title);
      })
    )
    .catch((error) => console.log("Error: ", error));

  // Зробити сторінку з кнопкою, при натиску на кнопку робиться запит до http swapi.dev/api/planets/1/ та виводиться картка з
  // даними з запиту, дані з масиву які мають лінк треба вивести в тег А і додати лінк в атрибут href

  let btn = document.querySelector("#show-btn");

  function checkLinkInArray(array, index) {
    if (array[index].includes("https://")) {
      array.splice(index, 1, `<a href="${array[index]}"> ${array[index]} </a>`);
    }
  }

  function checkLink(object, key) {
    if (object[key].includes("https://")) {
      object[key] = `<a href="${object[key]}"> ${object[key]} </a>`;
    }
  }

  btn.addEventListener("click", function () {
    let card = document.createElement("div");
    card.className = "card";
    card.style.width = "24rem";
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);
    document.querySelector("body").appendChild(card);

    fetch("https://swapi.dev/api/planets/1/")
      .then((response) => response.json())
      .then((planet) => {
        for (const key in planet) {
          let text = document.createElement("p");
          text.className = "card-text";
          if (Object.prototype.hasOwnProperty.call(planet, key)) {
            if (Array.isArray(planet[key])) {
              text.innerHTML = `${key}:`;
              cardBody.appendChild(text);
              let list = document.createElement("ul");
              for (let i = 0; i < planet[key].length; i++) {
                checkLinkInArray(planet[key], i);
                let li = document.createElement("li");
                li.innerHTML = `${planet[key][i]}`;
                list.appendChild(li);
              }
              cardBody.appendChild(list);
            } else {
              checkLink(planet, key);
              text.innerHTML = `${key}: ${planet[key]}`;
              cardBody.appendChild(text);
            }
          }
        }
      })
      .catch((error) => {
        console.log(error);
        cardBody.innerHTML = "Сталася помилка при завантаженні";
      });
  });
};
