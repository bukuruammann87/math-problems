const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Create a new directory
fs.mkdirSync(path.join(__dirname, 'math-problems'));

// Create a new file in the directory
fs.writeFileSync(path.join(__dirname, 'math-problems', 'problem1.txt'), crypto.randomBytes(32).toString('hex'));
