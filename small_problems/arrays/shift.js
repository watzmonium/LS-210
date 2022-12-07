function shift(ary) {
  if (ary == undefined || ary == 0) {
    return undefined;
  }

  let len = ary.length;
  let first = ary[0];

  for (let i = 0; i <= len; i++) {
    ary[i] = ary[i + 1];
  }

  ary.length = len - 1;
  return first;
}

function unshift(ary, ...args) {
  let aryCopy = ary.slice();
  let aryLen = ary.length;
  let argsLen = args.length;
  
  for (let i = 0; i < aryLen; i++) {
    ary[argsLen + i] = aryCopy[i];
  }

  for (let i = 0; i < argsLen; i++) {
    ary[i] = args[i];
  }
  return ary.length;
}

console.log(shift([1, 2, 3]));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]