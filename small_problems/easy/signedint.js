function stringToInteger(strNum) {
  let len = strNum.length;
  let numStr = 0;
  for (let i = 0;len > 0; i++) {
    len--;
    numStr += strNum[i] * (10**len);
  }
  return numStr;
}

function stringToSignedInteger(numStr) {
  switch (numStr[0]) {
    case '-':
      return -stringToInteger(numStr.slice(1));
    case '+':
      return stringToInteger(numStr.slice(1));
    default:
      return stringToInteger(numStr);
  }
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100