const NUMBER_OF_NUMBERS = 5;
const NUMBER_WORDS = ['1st', '2nd', '3rd', '4th', '5th'];
let rlSync = require('readline-sync');
let numbers = [];

for (let i = 0; i < NUMBER_OF_NUMBERS; i++) {
  numbers[i] = rlSync.question(`Enter the ${NUMBER_WORDS[i]} number: `);
}

let searchNumber = rlSync.question(`Enter the last number: `);

let found = numbers.some((number) => number === searchNumber);


console.log(`The number ${searchNumber} does${found ? '' : ' not'} appear in [${numbers.join(', ')}].`);
