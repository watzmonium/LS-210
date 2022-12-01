function substring(string, start, end) {
  let len = string.length;
  // checks valid starts
  if (start < 0 || isNaN(start)) {
    start = 0;
  } else if (start > len) {
    start = len;
  }

  // checks valid ends
  if (end == undefined || end > len) {
    end = len;
  } else if (end < 0 || isNaN(end)) {
    end = 0;
  }

  if (start > end) {
    let temp = end;
    end = start;
    start = temp;
  } else if (start === end) {
    return '';
  }

  let newString = '';
  for (let i = start; i < end; i++) {
    newString += string[i];
  }

  return newString;
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"