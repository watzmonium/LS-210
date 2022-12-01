let x = '13';
let y = 9;
let z = 'foo';

// console.log(Number(x) + y);
// console.log(parseInt(x, 10) + y);

// console.log(x * y); // 117
// console.log(x * z); // NaN

let npa = 212;
let nxx = 555;
let num = 1212;

// console.log(String(npa) + nxx + num);

let bool = true;
let arr = [1, 2, 3];

// console.log(bool.toString());
// console.log(arr.toString());

// let apples = 3;
// let bananas = '3';

// let areEqual = apples === bananas;

// if (areEqual) {
//   console.log('yeet');
// } else {
//   console.log('nah son')
// }

let apples;
let bananas = 3;

let eitherOr = apples || bananas;

// console.log(eitherOr);

for (let index = 0; ; index += 1) {
  if (index >= 10) {
    break;
  }

  console.log(index);
}