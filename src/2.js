const { random } = require("node-math");

function getRandomMathProblem() {
  const problemType = Math.floor(Math.random() * 3);
  switch (problemType) {
    case 0: // addition
      return `What is ${random(1, 10)} + ${random(1, 10)}?`;
    case 1: // subtraction
      const num = random(1, 10);
      return `What is ${num} - ${random(1, num)}?`;
    case 2: // multiplication
      return `What is ${random(1, 10)} x ${random(1, 10)}?`;
    default:
      return null;
  }
}
