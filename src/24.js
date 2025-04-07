// Define a function to find the maximum value in an array of numbers
function findMax(numbers) {
  if (numbers.length === 0) return null;

  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
}

// Example usage:
const numbersArray = [3, 7, 2, 9, 5, 1, 8, 6, 4];

console.log(findMax(numbersArray)); // Output: 9
