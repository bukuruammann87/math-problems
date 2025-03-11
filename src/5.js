const { getRandomInt } = require('crypto');

function solveMathProblem(problem) {
  // Generate a random integer between 1 and 100
  const num1 = getRandomInt(1, 100);

  // Generate a random operator (+, -, x, /)
  const op = ['+', '-', 'x', '/'][getRandomInt(0, 3)];

  // Generate a random integer between 1 and 100
  const num2 = getRandomInt(1, 100);

  // Evaluate the math problem
  const result = eval(`${num1} ${op} ${num2}`);

  return {
    input: `${num1} ${op} ${num2}`,
    output: result
  };
}

module.exports = solveMathProblem;
