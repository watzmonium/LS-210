function indexOf(ary, value) {
  let len = ary.length;

  for (let i = 0; i < len; i++) {
    if (ary[i] === value) return i;
  }

  return -1;
}

function lastIndexOf(ary, value) {
  let len = ary.length;

  for (let i = len - 1; i >= 0; i--) {
    if (ary[i] === value) return i;
  }

  return -1;
}

console.log(indexOf([1, 2, 3, 3], 3));         // 2
console.log(indexOf([1, 2, 3], 4));            // -1

console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1