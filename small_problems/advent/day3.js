function mapLetter(letter) {
  if (letter.match(/[a-z]/)) {
    return letter.charCodeAt(0) - 96;
  } else {
    return letter.charCodeAt(0) - 38;
  }
}


let fs = require('fs');
let filename = __dirname + '/day3data.txt'
let rawData = fs.readFileSync(filename, 'utf-8');

let sacks = rawData.split('\n');


// let commonItems = sacks.map((sack) => {
//   let stringLength = sack.length;
//   let s1 = sack.slice(0, stringLength / 2);
//   let s2 = sack.slice(stringLength / 2, stringLength);

//   for (let i = 0; i < stringLength / 2; i++) {
//     for (let j = 0; j < stringLength / 2; j++) {
//       if (s1[i] === s2[j]) return s1[i];
//     }
//   }
//   return null;
// });

let commonItemsTrio = [];
let numberOfSacks = sacks.length;
for (let i = 0; i < numberOfSacks; i += 3) {
  let sack2 = sacks[i + 1];
  let sack3 = sacks[i + 2];
  for (let j = 0; j < sacks[i].length; j++) {
    let regex = sacks[i][j];
    if (sack2.match(regex)) {
      if (sack3.match(regex)) {
        commonItemsTrio.push(regex);
        break;
      }
    }
  }
}
console.log(commonItemsTrio.length);

let itemNumbers = commonItemsTrio.map((letter) => mapLetter(letter));
// console.log(itemNumbers);
let sum = itemNumbers.reduce((sum, number) => sum + number, 0);

console.log(sum);