const centerOf = (string) => {
  let stringLength = string.length;

  if (stringLength % 2 === 0) {
    return string.slice(stringLength / 2 - 1, stringLength / 2 + 1);
  }
  else {
    return string[Math.floor(stringLength / 2)];
  }
}


console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"