const { random } = require('mathjs');
const maxNumber = 100;
const minNumber = 1;

function getRandomNumber() {
  return Math.floor(random(minNumber, maxNumber)) + 1;
}

module.exports = { getRandomNumber };
