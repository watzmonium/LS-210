let fs = require('fs');

let rawData = fs.readFileSync('./day1data.txt', 'utf-8');
let elves = rawData.split('\n\n');
let processedData = elves.map((subs) => subs.split('\n'));

processedData = processedData.map((subArray) => {
  return subArray.reduce((sum, stringNum) => Number(sum) + Number(stringNum), 0)
});

processedData.sort((a, b) => b - a);
console.log(processedData[0]);
let sum = processedData[0] + processedData[1] + processedData[2];

console.log(sum);