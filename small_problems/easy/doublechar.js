const repeater = (string) => {
  let doubleString = '';

  let regex = /[b-df-hj-np-tv-z]/gi;

  for (let i = 0; i < string.length; i++) {
    if (string[i].match(regex)) {
      doubleString += string[i] + string[i];
    } else {
      doubleString += string[i];
    }
  }

  return doubleString;
}

console.log(repeater('String'));        // "HHeelllloo"
console.log(repeater('Hello-World!'));    // "GGoooodd  jjoobb!!"
console.log(repeater('July 4th'));             // ""