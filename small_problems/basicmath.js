let rlSyncObj = require('readline-sync');

let num1 = Number(rlSyncObj.question('Please enter first number: '));

let num2 = Number(rlSyncObj.question('Please enter second number: '));

console.log(`==> ${num1} + ${num2} = ${num1 + num2}`);
console.log(`==> ${num1} - ${num2} = ${num1 - num2}`);
console.log(`==> ${num1} * ${num2} = ${num1 * num2}`);
console.log(`==> ${num1} / ${num2} = ${parseInt(num1 / num2)}`);
console.log(`==> ${num1} % ${num2} = ${parseInt(num1 % num2)}`);
console.log(`==> ${num1} ** ${num2} = ${num1 ** num2}`);