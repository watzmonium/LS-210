function splitString(string, delimiter) {
  if (delimiter == undefined) {
    console.log('ERROR: No delimiter');
    return;
  }
  
  let len = string.length;
  let splits = [];
  let sub = '';

  for (let i = 0; i < len; i++) {
    if (string[i] === delimiter) {
      splits.push(sub);
      sub = '';
    } else if (delimiter === '') {
      splits.push(string[i]);
    }else {
      sub += string[i];
    }
  }
  if (sub !== delimiter && sub !== '') splits.push(sub);

  splits.forEach((sub) => console.log(sub));
}

//splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

//splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello