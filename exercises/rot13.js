function rot13(str) {
  const ROT_SHIFT_VALUE = 13;
  const UPPERCASE_ASCII_START = 65;
  const LOWERCASE_ASCII_START = 97;
  const LETTERS_IN_ALPHABET = 26;

  let len = str.length;
  let cipherText = '';

  for (let i = 0; i < len; i ++) {
    let asciiLetter = str.charCodeAt(i);
    if (asciiLetter >= UPPERCASE_ASCII_START && asciiLetter < UPPERCASE_ASCII_START + LETTERS_IN_ALPHABET) {
      asciiLetter = (((asciiLetter - UPPERCASE_ASCII_START) + ROT_SHIFT_VALUE) % LETTERS_IN_ALPHABET) + UPPERCASE_ASCII_START;
    } else if (asciiLetter >= LOWERCASE_ASCII_START && asciiLetter < LOWERCASE_ASCII_START + LETTERS_IN_ALPHABET) {
      asciiLetter = (((asciiLetter - LOWERCASE_ASCII_START) + ROT_SHIFT_VALUE) % LETTERS_IN_ALPHABET) + LOWERCASE_ASCII_START;
    }
    cipherText += String.fromCharCode(asciiLetter);
  }

  return cipherText;
}

console.log(rot13('Lily Gow is a cow who like to say meow!'))

// console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// // logs:
// // Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

// console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.