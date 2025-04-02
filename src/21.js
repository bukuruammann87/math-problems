function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let num = getRandomInt(0, 5);
console.log(num);
