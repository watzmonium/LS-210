const MAX_WIDTH = 76;

function logInBox(str) {
  let strLen = str.length
  let len = strLen > MAX_WIDTH ? MAX_WIDTH : strLen;
  let strs = [];
  let div = strLen > MAX_WIDTH ? strLen / MAX_WIDTH : 0;
  for (let i = 0; i <= div; i++) {
    strs.push(str.slice((i * MAX_WIDTH), (i * MAX_WIDTH) +MAX_WIDTH));
  }
  printTop(len);
  printEmpty(len);
  printText(strs);
  printEmpty(len);
  printTop(len);
}

function printTop(strLength) {
  console.log(`+-${'-'.repeat(strLength)}-+`);
}

function printEmpty(strLength) {
  console.log(`+ ${' '.repeat(strLength)} +`);
}

function printText(text) {
  text.forEach((str) => {
    if (text[0].length >= MAX_WIDTH && str.length < MAX_WIDTH) {
      console.log(`+ ${str.padEnd(MAX_WIDTH, ' ')} +`);
    } else 
    console.log(`+ ${str} +`);
  }); 
}

logInBox('hi');