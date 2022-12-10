function swap(stringToSwap) {
  let swappedArray = stringToSwap.split(' ').map(string => {
    if (string.length > 1) {
      return string.slice(-1) + string.slice(1, -1) + string.slice(0, 1);
    }
    return string;
  });
  return swappedArray.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"