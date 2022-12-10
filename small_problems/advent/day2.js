let fs = require('fs');
// X - lose, Y - draw, Z - win
const MATCH_MATRIX = {A: {X: 3, Y: 4, Z: 8}, B: {X: 1, Y: 5, Z: 9}, C: {X: 2, Y: 6, Z: 7}}

let rawData = fs.readFileSync('./day2data.txt', 'utf-8');

let matchData = rawData.split('\n');

let scores = matchData.map((match) => MATCH_MATRIX[match[0]][match[2]]);

let sum = 0;

for (let i = 0; i < scores.length; i++) {
  sum += scores[i];
}

console.log(sum);