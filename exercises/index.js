function indexOf(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;

  for (let i = 0; i < (len1 - (len2 - 1)); i++) {
    let match = false;
    if (str1[i] === str2[0]) {
      match = true;
      for (let j = 0; j < len2; j++) {
        if (str1[i + j] !== str2[j]) {
          match = false;
        }
      }
    }
    if (match) return i;
  }
  return -1;
}

function lastIndexOf(str1, str2) {
  let len1 = str1.length;
  let len2 = str2.length;

  for (let i = len1 - len2; i >= 0; i--) {
    let match = false;
    if (str1[i] === str2[0]) {
      match = true;
      for (let j = 0; j < len2; j++) {
        if (str1[i + j] !== str2[j]) {
          match = false;
        }
      }
    }
    if (match) return i;
  }
  return -1;;
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'));                      // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1