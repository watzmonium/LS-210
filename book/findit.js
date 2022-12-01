function findInts(ary) {
  return ary.filter((obj) => Number.isInteger(obj));
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findInts(things);
console.log(integers); // => [1, 3, -4]
 