function trim(str) {
  let len = str.length;
  let trimmed = '';
  let trailing = false;
  for (let i = 0; i < len; i++) {
    if (trailing) {
      if (str[i] === ' ') {
        for (let j = i + 1; j < len; j++) {
          if (str[j] !== ' ') {
            trimmed += ' ';
            trailing = true;
            continue;
          }
          else {
            trailing = false;
          }
        }
      }
      else {
        trimmed += str[i];
      }

    } else {
      if (str[i] === ' ') continue;
      else {
        trimmed += str[i];
        trailing = true;
      }
    }
  }
  return `${trimmed}!`;
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""