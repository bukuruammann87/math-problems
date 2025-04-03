function findMaxDifference(arr) {
  let maxDiff = arr[1] - arr[0];
  let minIndex = 0;

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] > maxDiff) {
      maxDiff = arr[i + 1] - arr[i];
      minIndex = i;
    }
  }

  return [maxDiff, minIndex];
}

// Example usage:
const inputArr = [-5, 2, 3, 4, 8, 9, 10, 11, 12, 15, 20, 25];
const result = findMaxDifference(inputArr);
console.log(result); // Output: [17, 6]
