function convertToUpperCase(string) {
  let result = string.toUpperCase();
  console.log(`Converted string ${string} is ${result}`);
}

function convertToReversedString(string) {
  let result = string.split("").reverse().join("");
  console.log(`Reversed string ${string} is ${result}`);
}

export { convertToUpperCase, convertToReversedString };
