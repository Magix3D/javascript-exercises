const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(numbers) {
  let sum = 0
	numbers.forEach(
    item =>
    sum += item
  );
  return sum
};

const multiply = function(numbers) {
  return numbers.reduce((total, current) => total * current)
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
  let sum = 1
	for(let i = num; i > 0; i--) {
    sum *= i
  }
  return sum
};

console.log(factorial(4))

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
