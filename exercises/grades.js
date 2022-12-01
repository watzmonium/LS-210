let rlSyncObj = require('readline-sync');

function calculateGrade (scoreArr) {
  let rawScore = (scoreArr.reduce((acc, grade) => acc + grade) / scoreArr.length);
  if (rawScore >= 90) {
    return 'A';
  } else if (rawScore >= 70) {
    return 'B';
  } else if (rawScore >= 50) {
    return 'C';
  } else {
    return 'F';
  }
}

let numberOfScores = rlSyncObj.question('How many scores do you want to enter? ');
let scores = []
for (let i = 0; i < numberOfScores; i++) {
  scores.push(Number(rlSyncObj.question(`Enter score ${i + 1}: `)));
}
console.log(scores)
console.log(calculateGrade(scores));