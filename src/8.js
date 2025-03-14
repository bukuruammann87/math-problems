function getRandomNodeJSCode() {
  // Generate a random number between 1 and 10
  const randNum = Math.floor(Math.random() * 10) + 1;

  // Create an array of numbers from 1 to 10
  let numArray = [];
  for (let i = 1; i <= 10; i++) {
    numArray.push(i);
  }

  // Shuffle the array
  let shuffledArray = numArray.sort(() => Math.random() - 0.5);

  // Return a random number from the shuffled array
  return shuffledArray[randNum];
}
