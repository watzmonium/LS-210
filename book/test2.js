// person = {name: 'frank', age: 25,};

// for (let attr in person) {
//   console.log(person[attr]);
// }

let obj1 = { a: 1, b: 2, g: true,}
let obj2 = Object.create(obj1);
console.log(obj2.g);

obj2.c = 3;
obj2.d = 4;

console.log(obj1);
console.log(obj2);
for (let prop in obj2) {
  console.log(obj2[prop]);
}         // => 3