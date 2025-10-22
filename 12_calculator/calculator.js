
// 1. `add()`: take two numbers and return their sum
// 2. `subtract()`: take two numbers and return the result after subtracting the second from the first
// 3. `sum()`: take an array of numbers and add all the numbers together
// 4. `multiply()`: take an array of numbers and multiply all the numbers together
// 5. `power()`: take two numbers (base and exponent) and return the result of raising the base to that exponent
// 6. `factorial()`: given a single number, find its [factorial](https://en.wikipedia.org/wiki/Factorial)

const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0);
};

const multiply = function(arr) {
  return arr.reduce((acc, cur) => acc * cur, 1);
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
  if (a == 0 || a == 1) {
    return 1;
  }
  return a * factorial(a - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
