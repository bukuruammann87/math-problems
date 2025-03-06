const { getRandomInt } = require('crypto');

function generateMathProblem() {
  const number1 = getRandomInt(10);
  const number2 = getRandomInt(10);
  const operator = ['+', '-', '*', '/'][getRandomInt(4)];
  let problem;
  switch (operator) {
    case '+':
      problem = `${number1} + ${number2}`;
      break;
    case '-':
      problem = `${number1} - ${number2}`;
      break;
    case '*':
      problem = `${number1} * ${number2}`;
      break;
    case '/':
      problem = `${number1} / ${number2}`;
      break;
  }
  return {
    problem,
    solution: getRandomInt(10),
  };
}
