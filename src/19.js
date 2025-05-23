function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function getRandomPrime() {
  let prime = Math.floor(Math.random() * 100);
  while (!isPrime(prime)) {
    prime = Math.floor(Math.random() * 100);
  }
  return prime;
}
