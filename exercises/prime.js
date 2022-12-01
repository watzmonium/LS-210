function isPrime(number) {
  if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }

  return false;
}

function p(arg) {
  console.log(arg);
}

p(isPrime(1));   // false
p(isPrime(2));   // true
p(isPrime(3));   // true
p(isPrime(43));  // true
p(isPrime(55));  // false
p(isPrime(0));   // false