function sum(numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sum([1, 2, 3])); // Output: 6
