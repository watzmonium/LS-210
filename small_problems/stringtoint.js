function stringToInteger(strNum) {
  let len = strNum.length;
  let numStr = 0;
  for (let i = 0;len > 0; i++) {
    len--;
    numStr += strNum[i] * (10**len);
  }
  return numStr;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570