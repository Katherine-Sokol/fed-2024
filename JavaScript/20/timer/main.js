window.onload = function () {
  let minutes = 25;

  let time = document.querySelector(".counter > p");
  time.innerHTML = `${minutes}:00`;
  let startBtn = document.querySelector(".start-btn");
  startBtn.addEventListener("click", startTimer);
  let resetBtn = document.querySelector(".reset-btn");

  function startTimer() {
    let deadlineTime = new Date(new Date().getTime() + minutes * 60 * 1000); // можно и так установить таймер на 5 минут
    let timer = setInterval(function () {
      let now = new Date().getTime(); // текущее время
      let remainingTime = deadlineTime - now; // находим различие между текущим моментом и временем дедлайна
      if (remainingTime <= 0) {
        clearInterval(timer);
      }
      let minuti = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
      let secundi = Math.floor((remainingTime % (1000 * 60)) / 1000);
      minuti = minuti < 10 ? "0" + minuti : minuti;
      secundi = secundi < 10 ? "0" + secundi : secundi;
      time.innerHTML = minuti + ":" + secundi;
    }, 1000);
    resetBtn.addEventListener("click", function () {
      clearInterval(timer);
      time.innerHTML = `${minutes}:00`;
    });
  }
};
