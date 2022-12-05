function crunch(str) {
  let len = str.length;
  let newStr = '';
  let last = '';

  for (let i = 0; i < len; i++) {
    if (last === str[i]) continue;
    else {
      newStr += str[i];
      last = str[i];
    }
  }
  console.log(newStr);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""