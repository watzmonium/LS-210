let rlSyncObj = require('readline-sync');

let currentAge = rlSyncObj.question('How old are you? ');

for (let i = 0; i < 5; i++) {
  let age = 10 * i;
  console.log(`In ${age} years you will be ${Number(currentAge) + age}.`);
}