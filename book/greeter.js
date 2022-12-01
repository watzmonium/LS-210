let rlSyncObj = require('readline-sync');

function ask_name(place = '') {
  let name = rlSyncObj.question(`What is your ${place}name? `);
  return name;
}

firstName = ask_name('first ');
lastName = ask_name('last ');

console.log(`Hello, ${firstName} ${lastName}.`)