function arraysEqual(ary1, ary2) {
  let len1 = ary1.length;
  let len2 = ary2.length;
  if (len1 !== len2) {
    return false;
  } else {
    for (let i = 0; i < len1; i++) {
      if (ary1[i] !== ary2[i]) {
        return false;
      }
    }
  }
  
  return true;
}

console.log(arraysEqual([1], [1]));                               // true
console.log(arraysEqual([1], [2]));                               // false
console.log(arraysEqual([1, 2], [1, 2, 3]));                      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hi', true]));       // true
console.log(arraysEqual([1, 'hi', true], [1, 'hi', false]));      // false
console.log(arraysEqual([1, 'hi', true], [1, 'hello', true]));    // false
console.log(arraysEqual([1, 'hi', true], [2, 'hi', true]));       // false