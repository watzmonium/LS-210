let rlSync = require('readline-sync');

function randomArray(maxLength) {
  return Math.floor(Math.random(maxLength));
}

let madLibs = {verbs: [], nouns: [], adjectives: [], adverbs: [],}

madLibs.nouns.push(rlSync.question('Enter a noun: '));
madLibs.verbs.push(rlSync.question('Enter a verb: '));
madLibs.adjectives.push(rlSync.question('Enter an adjective: '));
madLibs.adverbs.push(rlSync.question('Enter an adverb: '));

let noun = madLibs.nouns[randomArray(madLibs.nouns.length - 1)];
let verb = madLibs.verbs[randomArray(madLibs.verbs.length - 1)];
let adjective = madLibs.adjectives[randomArray(madLibs.adjectives.length - 1)];
let adverb = madLibs.adverbs[randomArray(madLibs.adverbs.length - 1)];

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);