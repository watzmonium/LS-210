let rlSync = require('readline-sync');

let inputNumber = 0;

while (inputNumber <= 0 || isNaN(inputNumber)) {
  inputNumber = Number(rlSync.question('Please enter an integer greater than 0: '));
}
console.log(inputNumber);

let choice = rlSync.question('Enter "s" to compute sum, or "p" to computer the product. ');
let sum;

switch (choice) {
  case 's':
    sum = rollingSum(Number(inputNumber))
    console.log(`The sum of the integers between 1 and ${inputNumber} is ${sum}`);
    break;
  case 'p':
    sum = rollingProduct(Number(inputNumber))
    console.log(`The product of the integers between 1 and ${inputNumber} is ${sum}`);
    break;
  default:
    console.log('Invalid choice');
}

function rollingSum(number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
}

function rollingProduct(number) {
  let sum = 1;
  for (let i = 1; i <= number; i++) {
    sum *= i;
  }
  return sum;
}