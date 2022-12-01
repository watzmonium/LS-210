let rlSyncObj = require('readline-sync')

let add = (a, b) => { return a + b; }

let query = () => { 
  let number = rlSyncObj.question('enter a number: ');
  return number;
}

num1 = Number(query());
num2 = Number(query());

console.log(`${num1} + ${num2} = ${add(num1, num2)}.`);