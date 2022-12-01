let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function hasThree(ary) {
  three = false;
  ary.forEach((num) => {
    if (num === 3){
      three = true;
    }
  });
  return three;
}

console.log(hasThree(numbers1));
console.log(hasThree(numbers2));
console.log(hasThree(numbers3));

console.log(numbers1.includes(3));