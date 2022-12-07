let array = ['a', 'b', 'c', 'd',];
let obj = {a: 1, b: 2, c: 3, d: 4,}
// for (let index in array) {
//   console.log(index);
// // }

// for (let key in obj) {
//   console.log(key);
// }

// Object.keys(obj).forEach(thing => console.log(`${thing}: ${obj[thing]}`));
// // for (let object of array) {
//   console.log(object);
// }

let a = Object.getOwnPropertyDescriptors(array);

let b = Object.getOwnPropertyDescriptors(obj);

console.log(a);
console.log(b);