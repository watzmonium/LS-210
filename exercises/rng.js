// function randomInt(min, max) {
//   if (min > max) {
//     let temp = min;
//     min = max;
//     max = temp;
//   } else if (min === max) {
//     return min;
//   }
//   let rngInt = max + 1;
//   while (rngInt > max || rngInt < min) {
//     rngInt = Math.round(max * Math.random());
//   }

//   return rngInt;
// }

// console.log(randomInt(10, 1));

const randomInt = function(min, max) {
  if (min === max) {
    return min;
  } else if (min > max) {
    [min, max] = [max, min];
  }

  let difference = max - min + 1;
  let a = Math.random();
  let b =  Math.floor(0.99 * difference) + min;
  return b;
};

console.log(randomInt(1, 5));