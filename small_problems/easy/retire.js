let rlSync = require('readline-sync');

let age = rlSync.question('What is your age? ');
let retirementAge = rlSync.question('What age would you like to retire? ');

let currentDate = new Date();
let year = currentDate.getFullYear();
let remaining = retirementAge - age;

console.log(`It's ${year}. You will retire in ${year + remaining}`);
console.log(`You only have ${remaining} years left to go!`);