function missing(arr) {
  let missingArr = [];
  let len = arr.length - 1;
  for (let i = 0; i < len; i++) {
    let curNum = arr[i] + 1;
    while (curNum !== arr[i + 1]) {
      missingArr.push(curNum);
      curNum++;
    }
  }
  return missingArr;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []