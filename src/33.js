function multiply(x, y) {
  if (!Number.isInteger(x) || !Number.isInteger(y)) throw new Error('Both inputs must be integers.');
  
  const result = x * y;
  return `The product of ${x} and ${y} is ${result}`;
}
