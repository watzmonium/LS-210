function twice(number) {
  if (number < 11) return number * 2;

  number = String(number);
  let len = number.length;
  if (len % 2 === 1) return number * 2;
  
  let half = len / 2;
  if (number.slice(0, half) === number.slice(half, len)) {
    return Number(number);
  } else {
    return Number(number) * 2;
  }
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676