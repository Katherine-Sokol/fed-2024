// ДЗ 25: Сanvas та SVG

// 1. Створіть канвас і за допомогою JavaScript малюйте на ньому 3 прямокутники  які пересікаються. Використовуйте метод
// fillRect для цього.

const canvas1 = document.querySelector("#first-canvas");
const ctx1 = canvas1.getContext("2d");
ctx1.fillStyle = "black";
ctx1.fillRect(10, 10, 200, 100);
ctx1.fillStyle = "yellow";
ctx1.fillRect(60, 60, 200, 100);
ctx1.fillStyle = "blue";
ctx1.fillRect(110, 110, 200, 100);

// 2. Залиття канвасу градієнтом
// Створіть функцію, яка отримує 2 кольори та заливає весь канвас лінійним або  градієнтом. Використовуйте createLinearGradient
// для створення градієнту:

function fillCanvas(firstColor, secondColor) {
  const canvas2 = document.querySelector("#second-canvas");
  const ctx2 = canvas2.getContext("2d");
  let gradient = ctx2.createLinearGradient(0, 0, canvas2.width, canvas2.height);
  gradient.addColorStop(0, firstColor);
  gradient.addColorStop(1, secondColor);
  ctx2.fillStyle = gradient;
  ctx2.fillRect(0, 0, canvas2.width, canvas2.height);
}

fillCanvas("white", "green");

// 3. Малювання простої лінії
// Створіть функцію, яка малює пряму лінію з однієї точки канвасу до іншої. Використовуйте методи moveTo для встановлення
// початкової точки лінії та lineTo для визначення кінцевої точки. Не забудьте викликати stroke(), щоб намалювати лінію.

function createLine() {
  ctx1.beginPath();
  const x = (e) => {
    e.clientX - rect.left;
  };
  const y = (e) => {
    e.clientY - rect.left;
  };
  ctx1.moveTo(x, y);
  canvas1.addEventListener("click", function (e) {
    const rect = canvas1.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ctx1.lineTo(x, y);
    ctx1.stroke();
  });
}

createLine();

// 4. Динамічне створення SVG-лінії
// Створіть функцію на JavaScript, яка додає на сторінку SVG-елемент з лінією, параметри якої (початкова та кінцева точки,
// колір, товщина) передаються як аргументи функції.

let svgContainer = document.createElement("div");
document.querySelector("body").appendChild(svgContainer);
const svgNS = "http://www.w3.org/2000/svg";

function drawLine(
  startPointX,
  startPointY,
  endPointX,
  endPointY,
  color,
  width
) {
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", Math.abs(endPointX - startPointX) + 20);
  svg.setAttribute("height", Math.abs(endPointY - startPointY) + 20);

  const line = document.createElementNS(svgNS, "line");
  line.setAttribute("x1", startPointX);
  line.setAttribute("x2", endPointX);
  line.setAttribute("y1", startPointY);
  line.setAttribute("y2", endPointY);
  line.setAttribute("stroke", color);
  line.setAttribute("stroke-width", width);

  svg.appendChild(line);
  svgContainer.appendChild(svg);
}

drawLine(10, 50, 130, 10, "red", 5);

// 5. Створення SVG прямокутника з JavaScript
// Створіть функцію, що динамічно додає на сторінку SVG прямокутник з заданими користувачем параметрами (ширина, висота, колір
// заливки, колір обведення та товщина лінії обведення).

function drawSvgRect(width, height, fillingColor, borderColor, borderWidth) {
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", width + borderWidth * 2);
  svg.setAttribute("height", height + borderWidth * 2);

  const rect = document.createElementNS(svgNS, "rect");
  rect.setAttribute("x", borderWidth);
  rect.setAttribute("y", borderWidth);
  rect.setAttribute("width", width);
  rect.setAttribute("height", height);
  rect.setAttribute("fill", fillingColor);
  rect.setAttribute("stroke", borderColor);
  rect.setAttribute("stroke-width", borderWidth);

  svg.appendChild(rect);
  svgContainer.appendChild(svg);
}

drawSvgRect(100, 200, "yellow", "black", 3);
