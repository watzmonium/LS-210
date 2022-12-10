// head and tail must always be touching!
// touching means next to up or down, or diagonal
// or same index

// if the head is not next to the tail the tail moves in the direction of the head
// the tail will move diagonally to catch up
// it takes TWO steps for the tail to follow diagonally if next to each other

// How many positions does the tail of the rope visit at least once?

let fs = require('fs');
let path = __dirname + '/day9data2.txt';
let rawData = fs.readFileSync(path, 'utf-8');
let commands = rawData.split('\n');

const populateMap = (rows, columns) => {
  let array = []
  for (let i = 0; i < rows; i++) {
    array[i] = [];
  }

  for (let i = 0; i < columns; i++) {
    for (let j = 0; j < columns; j++) {
      array[i][j] = {visited: false, H: false, T: false,};
    }
  }

  return array;
}
// AFTER the head is 1 space away, the tail will move only then
// if the head is diagonally 1 space away, the tail moves directly behind in the same cardinal direction
// if A
// 
const parseCommand = (commandArray) => {
  let distance = commandArray[1];
  let direction = commandArray[0]
  return;
  switch (direction) {
    case 'U':
      moveHead(distance, 0);
      moveTail(distance, 0);
      break;
    case 'D':
      break;
    case 'L':
      break;
    case 'R':
      break;
  }
}

// should check if the head is touching it, if not, move behind it in the direction moved
const moveTail()

const setLocation = (row, column, head, tail) => {
  map[row][column].visited = true;
  if (head !== null) {
    map[row][column].H = head;
  }
  if (tail !== null) {
    map[row][column].T = tail;
  }
}

const countVisited = () => {
  let sum = 0;

  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      if (map[i][j].visited === true) {
        sum += 1
      }
    }
  }
  return sum;
}

const ROWS = 100;
const COLUMNS = 100;
const STARTING_ROW = 50;
const STARTING_COLUMN = 50;
let map = populateMap(ROWS, COLUMNS);
let currentRowH = STARTING_ROW;
let currentColumnH = STARTING_COLUMN;
let currentRowT = STARTING_ROW;
let currentColumnT = STARTING_COLUMN;

setLocation(currentRowH, currentColumnH, true, true);

for (let i = 0; i < commands.length; i++) {
  parseCommand(commands[i].split(' '));
}

console.log(countVisited());


