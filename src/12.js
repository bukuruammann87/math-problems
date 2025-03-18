const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const problem = getRandomMathProblem();
  res.json({ problem });
});

function getRandomMathProblem() {
  // Generate a random math problem here
  return {
    operation: 'addition',
    numbers: [getRandomNumber(10), getRandomNumber(10)]
  };
}

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

app.listen(3000, () => console.log('Listening on port 3000'));
