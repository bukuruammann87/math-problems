function findPrimeFactors(n) {
  const factors = [];
  // Divide n by 2 to get odd prime factors first
  while (n % 2 === 0) {
    factors.push(2);
    n /= 2;
  }
  // Now check for odd numbers from 3 onwards
  for (let i = 3; i * i <= n; i += 2) {
    while (n % i === 0) {
      factors.push(i);
      n /= i;
    }
  }
  if (n > 1) {
    factors.push(n); // n is a prime number
  }
  return factors;
}

function isPrime(num) {
  if (num < 2 || num % 1 === 0) {
    return false;
  }
  for (let factor of findPrimeFactors(num)) {
    if (factor > num / factor) {
      break;
    }
    if (factor === num / factor) {
      // n is a prime number
      return true;
    }
  }
  return false;
}

// Example usage:
console.log(isPrime(13)); // Output: true, because 13 is a prime number.
