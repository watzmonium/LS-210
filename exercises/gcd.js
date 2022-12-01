function gcd(num1, num2) {
  let max = (num1 > num2) ? num1 : num2;
  let greatest;
  for (let i = 0; i < max; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      greatest = i;
    }
  }
  
  return greatest;
}

console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1  