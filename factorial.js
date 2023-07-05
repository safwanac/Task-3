function factorial(number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorial(number - 1);
  }
}

const number = 5;
const result = factorial(number);
console.log(`The factorial of ${number} is: ${result}`);
