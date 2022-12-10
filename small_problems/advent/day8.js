let fs = require('fs');
let path = __dirname + '/day8data.txt'
let rawData = fs.readFileSync(path, 'utf-8');

let lines = rawData.split('\n');
let boxLines = lines.map((line) => line.split('').map((char) => Number(char)));
let stringTrees = JSON.stringify(boxLines);
let seenTrees = JSON.parse(stringTrees);
// go across the edges 1 at a time
// look down each row
// keep track of the highest number seen
// if the number is greater than the lowest number, 
// check if it's a number. if so, change it to an X
// and add one to the tree count. if the number is ever 

// add the edges
let rowLength = boxLines[0].length;
let columnLength = boxLines.length;
let bestTreeSeen = 0;
// let numberOfTrees = 0;

// check the top
// for (let i = 1; i < rowLength - 1; i++) {
//   let highest = boxLines[0][i];
//   seenTrees[0][i] = 'X';
//   numberOfTrees++;
//   for (let columnTree = 1; columnTree < columnLength - 1; columnTree++) {
//     let currentTree = boxLines[columnTree][i];
//     if (currentTree > highest && seenTrees[columnTree][i] !== 'X' ) {
//       seenTrees[columnTree][i] = 'X';
//       numberOfTrees++;
//     }
//     if (currentTree > highest) {
//       highest = currentTree;
//     }
//   }
// }

// // check the bottom
// for (let i = 1; i < rowLength - 1; i++) {
//   let highest = boxLines[columnLength - 1][i];
//   seenTrees[columnLength - 1][i] = 'X';
//   numberOfTrees++;
//   for (let columnTree = columnLength - 2; columnTree > 0; columnTree--) {
//     let currentTree = boxLines[columnTree][i];
//     if (currentTree > highest && seenTrees[columnTree][i] !== 'X' ) {
//       seenTrees[columnTree][i] = 'X';
//       numberOfTrees++;
//     }
//     if (currentTree > highest) {
//       highest = currentTree;
//     }
//   }
// }

// check the left
// for (let i = 1; i < columnLength - 1; i++) {
//   let highest = boxLines[i][0];
//   seenTrees[i][0] = 'X';
//   numberOfTrees++;
//   for (let rowTree = 1; rowTree < rowLength - 1; rowTree++) {
//     let currentTree = boxLines[i][rowTree];
//     if (currentTree > highest && seenTrees[i][rowTree] !== 'X' ) {
//       seenTrees[i][rowTree] = 'X';
//       numberOfTrees++;
//     }
//     if (currentTree > highest) {
//       highest = currentTree;
//     }
//   }
// }

// // check the right
// for (let i = 1; i < columnLength - 1; i++) {
//   let highest = boxLines[i][rowLength - 1];
//   seenTrees[i][rowLength - 1] = 'X';
//   numberOfTrees++;
//   for (let rowTree = rowLength - 2; rowTree > 0; rowTree--) {
//     let currentTree = boxLines[i][rowTree];
//     if (currentTree > highest && seenTrees[i][rowTree] !== 'X' ) {
//       seenTrees[i][rowTree] = 'X';
//       numberOfTrees++;
//     }
//     if (currentTree > highest) {
//       highest = currentTree;
//     }
//   }
// }

function checkUp(y, x) {
  if (y === 0) return 0;
  let sum = 0;
  let highest = boxLines[y][x];

  for (let i = y - 1; i >= 0; i--) {
    let a = boxLines[i][x];
    if (a >= highest) {
      sum++;
      return sum;
    }
    else {
      sum++;
    }
  }
  return sum;
}

function checkDown(y, x) {
  if (y === columnLength - 1) return 0;
  let sum = 0;
  let highest = boxLines[y][x];

  for (let i = y + 1; i < columnLength; i++) {
    let a = boxLines[i][x];
    if (a >= highest) {
      sum++;
      return sum;
    }
    else {
      sum++;
    }
  }
  return sum;
}


function checkRight(y, x) {
  if (x === rowLength - 1) return 0;
  let sum = 0;
  let highest = boxLines[y][x];

  for (let i = x + 1; i < rowLength; i++) {
    let a = boxLines[y][i];
    if (a >= highest) {
      sum++;
      return sum;
    }
    else {
      sum++;
    }
  }
  return sum;
}

function checkLeft(y, x) {
  if (x === 0) return 0;
  let sum = 0;
  let highest = boxLines[y][x];
  // go tree by tree, if the height is lower than the main tree
  // add a tree. if you run into a tree of equal or greater height, return
  for (let i = x - 1; i >= 0; i--) {
    let a = boxLines[y][i];
    if (a >= highest) {
      sum++;
      return sum;
    }
    else {
      sum++;
    }
  }
  return sum;
}

for (let xCoord = 0; xCoord < rowLength; xCoord++) {
  for (let yCoord = 0; yCoord < columnLength; yCoord++) {
    let down = checkDown(yCoord, xCoord);
    let up = checkUp(yCoord, xCoord);
    let left = checkLeft(yCoord, xCoord);
    let right = checkRight(yCoord, xCoord);
    let currentTree = up * down * left * right;
    if (currentTree > bestTreeSeen) {
      console.log(xCoord, yCoord)
      console.log(currentTree)
      bestTreeSeen = currentTree;
    }
  }
}

console.log(bestTreeSeen);
// console.log(numberOfTrees + 4);

// 3012013313330300240021511
// 2103130314110301402454525
// 2012233312224322213054434
// 2100030344131333454211531
// 0022322000243212411050511

// 3012013313330300240021511
// 2X0XXX031X11030XX0XXXX5X5
// 2012XXX31222X3XX21X0XX4X4
// 2X000X0XXX131XXX4XXX1XXX1
// 0022X22000243212411050511