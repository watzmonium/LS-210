function slice(ary, start, end) {
  let newArr = [];

  for (let i = start; i < end; i++) {
    newArr.push(ary[i]);
  }

  return newArr;
}

function splice(ary, start, numberToRemove) {
  let newArr = [];
  let copyIdx = start + numberToRemove;

  for (let i = start; i < (start + numberToRemove); i++) {
    newArr.push(ary[i]);
    ary[i] = ary[copyIdx];
    copyIdx++;
  }

  ary.length -= numberToRemove;
  return newArr;
}

function concat(ary1, ary2) {
  let newArr = []
  let len1 = ary1.length;
  let len2 = ary2.length;

  for (let i = 0; i < len1; i++) {
    newArr.push(ary1[i]);
  }
  for (let i = 0; i < len2; i++) {
    newArr.push(ary2[i]);
  }
  
  return newArr;
}

function join(ary, str) {
  let retStr = '';
  let len = ary.length - 1;

  for (let i = 0; i < len; i++) {
    retStr += `${ary[i]}${str}`;
  }
  retStr += String(ary[len]);
  return retStr;
}
// console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
// console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]
// let count = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
// console.log(count);                                 // [ 1, 2, 8 ]
// console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]
console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'