function toLowerCase(string) {
  let newStr = '';
  let len = string.length;
  const LOWER_NUMBER = 32;

  for (let i = 0; i < len; i++) {
    let asciiVal = string.charCodeAt(i)
    if (asciiVal >= 65 && asciiVal <= 90) {
      newStr += String.fromCharCode(asciiVal + LOWER_NUMBER);
    } else {
      newStr += string[i];
    }
  }
  console.log(newStr);
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"