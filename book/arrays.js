// let myArray = [1, 3, 6, 11, 4, 2,
//   4, 9, 17, 16, 0];

// // select the even values

// let evenArr = myArray.filter((obj) => obj % 2 == 0);
// evenArr.forEach((obj) => console.log(obj));

// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];

// let evenArr = [];

// myArray.forEach((subArr) => {
//   evenArr.push(subArr.filter((obj) => obj % 2 === 0));
// });

// let evenArr = myArray.map((subArr) => {
//   return (subArr.filter((obj) => obj % 2 === 0));
// });
// evenArr = evenArr.flat();
// console.log(evenArr);

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

myArray = myArray.map((num) => (num % 2 == 0 ? 'even' : 'odd'));

console.log(myArray);