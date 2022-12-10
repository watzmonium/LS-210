function runningTotal(array) {
  if (array == 0 || array == undefined) return [];
  
  let sum = [array[0]];

  for (let i = 1; i < array.length; i++){
    sum.push(array[i] + sum[i - 1]);
  }

  return sum;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []