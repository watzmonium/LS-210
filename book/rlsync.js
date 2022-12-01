// returns the library as an object!
let rlSync = require('readline-sync');

// call a method on the library object
let name = rlSync.question("What's your name?\n");

console.log(`Hello ${name}!`);