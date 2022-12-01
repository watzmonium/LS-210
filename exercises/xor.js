function isXor(arg1, arg2) {
  return !!arg1 !== !!arg2;
}

function p(arg) {
  console.log(arg);
}

p(isXor(false, true));     // true
p(isXor(true, false));     // true
p(isXor(false, false));    // false
p(isXor(true, true));      // false


p(isXor(false, 3));        // true
p(isXor('a', undefined));  // true
p(isXor(null, ''));        // false
p(isXor('2', 23));         // false