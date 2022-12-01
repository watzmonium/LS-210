function startsWith(string, searchString) {
  let len = searchString.length;
  for (let i = 0; i < len; i++) {
    if (string[i] !== searchString[i]) return false;
  }
  
  return true;
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false