let fs = require('fs');

let path = __dirname + '/day7data.txt';

let rawData = fs.readFileSync(path, 'utf-8');

let commands = rawData.split('\n');

let directories = {};

let currentDirectoryTree = [];
let directoryObject = directories;

for (let i = 0; i < commands.length; i++) {
  if (commands[i].startsWith('$')) {
    if (commands[i].startsWith('$ ls')) {
      continue;
    } else {
      currentDirectory = parseCd(commands[i]);
      if (currentDirectory == '..') {
        currentDirectoryTree.pop();
      } else if (currentDirectory !== '/') {
        currentDirectoryTree.push(currentDirectory);
      } else {
        currentDirectoryTree = [];
      }
    }
  } else if (commands[i].startsWith('dir')) {
    let dirName = commands[i].slice(4);
    accessDirectories(dirName);
  } else {
    directoryObject = getDirectory();
    pushFiles(commands[i], directoryObject, currentDirectoryTree[currentDirectoryTree.length - 1]);
  }
}

let totalSum = [];
let directoryKeys = Object.keys(directories);

for (let i = 0; i < directoryKeys.length; i++) {
  let tempSum = directories[directoryKeys[i]].size;
  if (typeof(directories[directoryKeys[i]]) === 'object') {
    parseSum(directories[directoryKeys[i]]);
  }
}

console.log(totalSum);

function parseSum(object) {
  let thisObjKeys = Object.keys(object);
  let sum = 0;
  for (let i = 0; i < thisObjKeys.length; i++) {
    if (typeof(object[thisObjKeys[i]]) === 'object') {
      sum += parseSum(object[thisObjKeys[i]]);
    }
  }
  sum += object.size;

  // 2143088
  if (sum >= 2143088 && sum <= 3200000) {
    totalSum.push(sum)
  }
  // if (!object.size === 0) {
  //   totalSum += sum;
  // }

  return sum;
}

function parseCd(command) {
  let path = command.split(' ');
  return path[path.length - 1];
}

function accessDirectories(directoryName) {
  let directory = getDirectory();
  
  if (!directory[directoryName]) {
    directory[directoryName] = {size: 0};
  }
}

function getDirectory() {
  let directory = directories;
  if (currentDirectoryTree == 0) {
    directory = directories;
  } else {
    for (let i = 0; i < currentDirectoryTree.length; i++) {
      directory = directory[currentDirectoryTree[i]];
    }
  }
  
  return directory;
}

function pushFiles(file, dir) {
  let pieces = file.split(' ');
  dir.size += Number(pieces[0]);

  if (!dir[pieces[1]]) {
    dir[pieces[1]] = Number(pieces[0]);
  }
}