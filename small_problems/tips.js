let rlSync = require('readline-sync');

let bill = Number(rlSync.question('What is the bill? '));
let tipPercent = Number(rlSync.question('What is the tip % ? '));

let tip = (bill * (tipPercent / 100)).toFixed(2);
let total = (Number(bill) + Number(tip)).toFixed(2);

console.log(`The tip is $${tip}`);
console.log(`The total is $${total}`);