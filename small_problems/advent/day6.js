let fs = require('fs');

let path = __dirname + '/day6data.txt';

let rawData = fs.readFileSync(path, 'utf-8');
// let rawData = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb'
console.log(rawData.length);
let answer = 13;
for (let i = 0; i < rawData.length; i++) {
  answer++;
  let test = rawData.slice(i, i + 14);
  console.log(test);
  let testObject = {};
  for (let j = 0; j < 14; j++) {
    if (!testObject[test[j]]) {
      testObject[test[j]] = 0;
    }
    testObject[test[j]]++;
  }
  if (Object.keys(testObject).length === 14) {
    console.log(answer);
    break;
  }
}
// 19
// mjqjpqmgbljsphdztnvjfqwrcgsmlb