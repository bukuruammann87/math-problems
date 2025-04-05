// Node.js script to check if two numbers are coprime
function areCoprime(num1, num2) {
    if (num1 === 0 || num2 === 0) return false;
    for (let i = 2; i <= Math.min(num1, num2); i++) {
        if (num1 % i === 0 && num2 % i === 0) return false;
    }
    return true;
}

// Test the function with provided data points
console.log(areCoprime(15, 37)); // true
console.log(areCoprime(12, 987)); // false
