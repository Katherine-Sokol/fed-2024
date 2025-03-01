// ДЗ 24: Async await та експорт файлів

// Завдання 1: Отримання даних користувача з JSONPlaceholder
// Створіть функцію, яка використовує async/await для отримання даних про конкретного користувача за id JSONPlaceholder.
// Виведіть ім'я та електронну адресу користувача.
// підказка: запит за іd чи іншими параметрами `https://jsonplaceholder.typicode.com/users/${userId}`

async function showUserInfo(userId) {
  await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((response) => response.json())
    .then((user) =>
      console.log(`${userId} User's name: ${user.name}, email: ${user.email}`)
    )
    .catch((error) => console.log("Error: ", error));
}

showUserInfo(10);
showUserInfo(1);
showUserInfo(5);

// Завдання 2: Виведення інформації про фільм з SWAPI
// Використайте async/await для запиту інформації про конкретний фільм з SWAPI. Виведіть назву фільму та дату виходу.

async function showFilmInfo(filmId) {
  await fetch(`https://swapi.dev/api/films/${filmId}`)
    .then((response) => response.json())
    .then((film) =>
      console.log(
        `${filmId} Film's title: ${film.title}, release date: ${film.release_date}`
      )
    )
    .catch((error) => console.log("Error: ", error));
}

showFilmInfo(2);
showFilmInfo(4);

// Завдання 3: Отримання і виведення інформації про планету з SWAPI
// Створіть функцію, яка використовує async/await для запиту інформації про конкретну планету з SWAPI. Виведіть назву планети
// та клімат.

async function showPlanetInfo(planetId) {
  await fetch(`https://swapi.dev/api/planets/${planetId}`)
    .then((response) => response.json())
    .then((planet) =>
      console.log(
        `${planetId} Planet's name: ${planet.name}, climate: ${planet.climate}`
      )
    )
    .catch((error) => console.log("Error: ", error));
}

showPlanetInfo(19);

// Завдання 4: Розділення коду на модулі
// Створіть файл mathOperations.js, в якому будуть оголошені функції для основних математичних операцій (додавання, віднімання,
// множення, ділення). Експортуйте ці функції за допомогою named export.
// Створіть файл index.js, в якому ви імпортуєте та використовуєте ці функції для виконання математичних операцій.

// Завдання 5: Імпорт утиліти для роботи з текстом
// Створіть файл stringUtilities.js, де будуть функції для роботи з рядками, наприклад, функція для перетворення рядка в
// uppercase і функція для обернення рядка. Експортуйте ці функції. В index.js імпортуйте та використовуйте ці функції.
