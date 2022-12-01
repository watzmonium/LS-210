function logMultiples(number) {
  for (let i = 0; i < 101; i++) {
    if (i % number === 0 && i % 2 === 1) console.log(i);
  }
}

logMultiples(17);

logMultiples(21);