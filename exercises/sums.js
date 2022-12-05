

function matrixSums(arr) {
  let sumArr = [];

  // arr.forEach((subArr) => {
  //   sumArr.push(subArr.reduce((sum, item) => sum + item))});
  // return sumArr;

  arr.forEach(function(subArr) {
    sumArr.push(subArr.reduce((sum, item) => sum + item));
  });
  return sumArr;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]