function generatePattern(number) {
  let doubles = number - 9;
  for (let i = 1; i <= number; i++) {
    let str = ''
    for (let j = 1; j <= i; j++) {
      str += j;
    }
    if (i > 9) doubles--;
    for (let j = 0; j < doubles + number - i; j++) {
      str += '*';
    }
    console.log(str);
  }
}

generatePattern(20);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567