function stringy(number) {
  let binary = '';
  for (let i = 0; i < number; i++) {
    binary += i % 2 == 0 ? '1' : '0';
  }
  console.log(binary);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"