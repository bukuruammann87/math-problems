// Create an array of 10 random numbers between 1 and 20
const numbers = Array(10).fill().map(() => Math.floor(Math.random() * 20) + 1);

// Calculate the sum of the numbers in the array
let total = numbers.reduce((acc, curr) => acc + curr, 0);

// Print the result
console.log(`The sum of the random numbers is ${total}`);
