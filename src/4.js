const getRandomMathProblem = () => {
  const operators = ['+', '-', '*', '/'];
  const numbers = [10, 20, 30, 40, 50];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const num1 = numbers[Math.floor(Math.random() * numbers.length)];
  const num2 = numbers[Math.floor(Math.random() * numbers.length)];
  return `${num1} ${operator} ${num2}`;
};
