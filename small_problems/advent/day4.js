let fs = require('fs');
let filename = __dirname + '/day4data.txt'
let rawData = fs.readFileSync(filename, 'utf-8');

let pairs = rawData.split('\n').map((pair) => {
  return pair.split(',').map((range) => {
    let nums = range.split('-')
    return [Number(nums[0]), Number(nums[1])]
  });
});

//console.log(pairs);

let overlappingPairs = 0;
let numberOfPairs = pairs.length;
for (let i = 0; i < numberOfPairs; i++) {
  let minA = pairs[i][0][0];
  let minB = pairs[i][1][0];
  let maxA = pairs[i][0][1];
  let maxB = pairs[i][1][1];

  if (minA <= maxB && maxA >= minB) {
    overlappingPairs++;
  }
}

console.log(overlappingPairs);

// 1 - 5
// 5 - 7000

// 1 <= 6 AND 5 >= 4