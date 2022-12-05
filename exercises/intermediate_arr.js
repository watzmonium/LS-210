// function oddElementsOf(arr) {
//   let newArr = [];
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     if (i % 2 === 1) newArr.push(arr[i]);
//   }
//   return newArr;
// }

// let digits = [4, 8, 15, 16, 23, 42];

// console.log(oddElementsOf(digits));    // returns [8, 16, 42]

// function mirroredArray(arr) {
//   return arr.concat(arr.slice().reverse());
// }

// let digits = [4, 8, 15, 16, 23, 42];
// console.log(mirroredArray(digits));  // returns [4, 8, 15, 16, 23, 42, 42, 23, 16, 15, 8, 4]

function sortDescending(arr) {
  return arr.slice().sort((a, b) => b - a);
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]