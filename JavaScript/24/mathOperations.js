function summ(a, b) {
  let res = a + b;
  console.log(`Result ${a} + ${b} = ${res}`);
}

function minus(a, b) {
  let res = a - b;
  console.log(`Result ${a} - ${b} = ${res}`);
}

function multiply(a, b) {
  let res = a * b;
  console.log(`Result ${a} * ${b} = ${res}`);
}

function divide(a, b) {
  if (b == 0) {
    console.log("Cannot be divided by zero");
  } else {
    let res = a / b;
    console.log(`Result ${a} / ${b} = ${res}`);
  }
}

export { summ, minus, multiply, divide };
