let rlSyncObj = require('readline-sync');

function checkPassword(guess) {
  return guess === password;
}

let password = 'password';
let tries = 0;

while (tries < 3) {
  let answer = rlSyncObj.question('What is the password: ');
  if (checkPassword(answer)) break;
  tries++;
}

if (tries < 3) {
  console.log('You have successfully logged in');
}
else {
  console.log('Access denied');
}