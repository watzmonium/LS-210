function checkGoldbach(expectedSum) {
  if (expectedSum % 2 === 1 || expectedSum < 4) {
    console.log(null);
    return;
  }

  let primes = [];
  for (let i = 2; i < expectedSum; i++) {
    if (isPrime(i)) primes.push(i);
  }

  let pairs = []
  let len = primes.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      if (primes[i] + primes[j] === expectedSum) {
        pairs.push([primes[i], primes[j]])
      }
    }
  }
  pairs.forEach((pair) => console.log(`${pair[0]} ${pair[1]}`));
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53

function isPrime(number) {
  if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }

  return false;
}