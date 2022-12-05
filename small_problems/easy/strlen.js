let rlSyncObj = require('readline-sync');

let phrase = rlSyncObj.question("Please enter a phrase: ");

let noSpacePhrase = phrase.replace(/\s/g, '');

console.log(`There are ${phrase.length} characters in ${phrase}`);

console.log(`There are ${noSpacePhrase.length} characters in ${phrase} without spaces`) 