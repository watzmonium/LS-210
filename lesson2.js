function average(ary) {
  let total = sum(ary);
  return total / ary.length;
}

function sum(ary) {
  let total = 0;
  ary.forEach((obj) => total += obj)
  return total;
}

let temperatures = [73, 58, 81, 64, 67];
console.log(average(temperatures));