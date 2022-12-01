function substr(string, start, length) {
  let newStr = '';
  let len = string.length;
  start = (start < 0) ? (len + start) : start;
  if (length + start > len) {
    length = len - start;
  }
  for (let i = start; i <= (start + (length - 1)); i++) {
    newStr += string[i];
  }
  console.log(`${newStr}!`);
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""