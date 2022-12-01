DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
function integerToString(num) {
  if (num < 10) {
    return DIGITS[num];
  }

  ary = [];
  do {
    ary.push(DIGITS[num % 10]);
    num /= 10;
    num = Math.floor(num);
  } while (num > 0)

  return ary.reverse().join('');
}

function integerToString2(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}


function signedIntegerToString(num) {
  if (num > 0) {
    return '+' + integerToString2(num);
  } else if (num < 0) {
    return '-' + integerToString(-num);
  } else {
    return '0'
  }
}
// console.log(integerToString(4321));      // "4321"
// console.log(integerToString(0));         // "0"
// console.log(integerToString(5000));      // "5000"

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"