function sumOfSquares(ary) {
  return ary.reduce((sum, num) => sum + (num * num), 0);
}

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83