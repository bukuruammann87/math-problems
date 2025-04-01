function findSum(arr) {
  let sum = 0;
  arr.forEach((element) => {
    if (typeof element === 'number' && !isNaN(element)) {
      sum += element;
    }
  });
  return Math.abs(sum);
}

let numbers = [1, 2.5, -3, 4.0];
console.log(findSum(numbers));
