function nthElementOf(arr, index) {
  return arr[index];
}

function lastNOf(arr, count) {
  let len = arr.length;
  return arr.slice(len - count)
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 7));    // returns [16, 23, 42]

// let digits = [4, 8, 15, 16, 23, 42];

// digits[-1] = -42;
// console.log(nthElementOf(digits, -1)); -42
// console.log(digits[-1]); -42
// console.log(digits['-1']); -42   // Note that we are using a string here