// function factorial(num) {
//   if (num === 1) {
//     return num;
//   }
//   return (num * factorial(num - 1));
// }

function factorial(num) {
  let sum = 1;
  for (let i = 1; i <= num; i++) {
    sum *= i;
  }
  return sum;
}

console.log(factorial(5));