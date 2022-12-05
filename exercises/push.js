function push(ary, obj) {
  ary[ary.length] = obj;
  return ary.length;
}

function pop(ary) {
  if (ary.length === 0) {
    return undefined;
  }

  let len = ary.length - 1;
  let last = ary[len]
  ary.length = len;
  return last;
}

function unshift(ary, value) {
  let len = ary.length;
  for (let i = len; i > 0; i--) {
    ary[i] = ary[i - 1];
  }
  ary[0] = value;
  return ary.length;
}

function shift(ary) {
  if (array.length === 0) {
    return undefined;
  }

  let len = ary.length;
  let value = ary[0];
  for (let i = 0; i < len - 1; i++) {
    ary[i] = ary[i + 1];
  }
  ary.length = len - 1;
  return value;
}
// let count = [0, 1, 2];
// console.log(push(count, 3));         // 4
// console.log(count);                  // [ 0, 1, 2, 3 ]
// let count = [1, 2, 3];
// console.log(pop(count));             // 3
// console.log(count);                  // [ 1, 2 ]
// let count = [1, 2, 3];
// console.log(unshift(count, 0));      // 4
// console.log(count);                  // [ 0, 1, 2, 3 ]
let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]