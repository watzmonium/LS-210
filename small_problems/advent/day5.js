let crates = [
  ['Q', 'M', 'G', 'C', 'L'],
  ['R', 'D', 'L', 'C', 'T', 'F', 'H', 'G'],
  ['V', 'J', 'F', 'N', 'M', 'T', 'W', 'R'],
  ['J', 'F', 'D', 'V', 'Q', 'P'],
  ['N', 'F', 'M', 'S', 'L', 'B', 'T'],
  ['R', 'N', 'V', 'H', 'C', 'D', 'P'],
  ['H', 'C', 'T'],
  ['G', 'S', 'J', 'V', 'Z', 'N', 'H', 'P'],
  ['z', 'F', 'H', 'G',]
];

let fs = require('fs');

let path = __dirname + '/day5data.txt';

let rawData = fs.readFileSync(path, 'utf-8');

let commands = rawData.split('\n');

let inputs = commands.map((command) => {
  return command.match(/\d+/g).map((number) => Number(number));
});

let inputLength = inputs.length;

for (let i = 0; i < inputLength; i++) {
  let numberToMove = inputs[i][0];
  let sourceStack = inputs[i][1] - 1;
  let destinationStack = inputs[i][2] - 1;

  let crateStack = crates[sourceStack].slice((crates[sourceStack].length - numberToMove))
  crates[sourceStack].length = crates[sourceStack].length - numberToMove;
  crates[destinationStack] = crates[destinationStack].concat(crateStack);
  // for (let j = 0; j < numberToMove; j++) {
  //   let crate = crates[sourceStack].pop();
  //   crates[destinationStack].push(crate);
  // }
}
let answer = ''
for (let i = 0; i < crates.length; i++) {
  answer += crates[i][crates[i].length - 1];
}

console.log(answer);