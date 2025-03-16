// NodeJS Code to Generate Random Math Problems

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const problem1 = generateMathProblem(1);
  const problem2 = generateMathProblem(2);
  const problem3 = generateMathProblem(3);

  res.json({
    problems: [problem1, problem2, problem3],
  });
});

function generateMathProblem(id) {
  // Generate random math problem based on difficulty level
  let operator;
  switch (id % 3) {
    case 0:
      operator = '+';
      break;
    case 1:
      operator = '-';
      break;
    case 2:
      operator = '*';
      break;
  }

  let number1 = Math.floor(Math.random() * 10) + 1;
  let number2 = Math.floor(Math.random() * 10) + 1;

  return {
    id,
    problem: `${number1} ${operator} ${number2}`,
    answer: eval(`${number1}${operator}${number2}`),
  };
}

app.listen(3000, () => console.log('Server started on port 3000'));
