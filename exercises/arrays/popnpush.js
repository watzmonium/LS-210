function pop(ary) {
  if (ary == undefined || ary == 0) {
    return undefined;
  }
  let len = ary.length - 1;
  let last = ary[len];
  ary.length = len;
  return last;
}

function push(ary, ...args) {
  let len = ary.length;
  let numberOfArgs = args.length;

  for (let i = 0; i < numberOfArgs; i++) {
    ary[len] = args[i];
    len++;
  }

  return ary.length;
}

// pop
const array1 = [1, 2, 3];
console.log(pop(array1));                        // 3
console.log(array1);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

// push
const array2 = [1, 2, 3];
console.log(push(array2, 4, 5, 6));              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0