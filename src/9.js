const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

function generateProblemAndSolution() {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const operator = ['+', '-', '*', '/'][getRandomInt(0, 3)];

  let problem;
  let solution;

  switch (operator) {
    case '+':
      problem = `${num1} + ${num2}`;
      solution = num1 + num2;
      break;
    case '-':
      problem = `${num1} - ${num2}`;
      solution = num1 - num2;
      break;
    case '*':
      problem = `${num1} * ${num2}`;
      solution = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        return generateProblemAndSolution();
      } else {
        problem = `${num1} / ${num2}`;
        solution = num1 / num2;
        break;
      }
  }

  return { problem, solution };
}
