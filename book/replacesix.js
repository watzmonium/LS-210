let arr = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

function replaceSix(array) {
  array.forEach((subArr) => {
    let len = subArr.length;
    for (let i = 0; i < len; i++) {
      subArr[i] = subArr[i] === 6 ? 606 : subArr[i];
    }
  });
}

replaceSix(arr);
console.log(arr);