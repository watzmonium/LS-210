function repeatedCharacters1(string) {
  let characters = string.split('');
  let characterCount = {};

  characters = characters.map((letter) => letter.toLowerCase()).sort();

  let currentLetterCount = 1;
  characters.forEach((letter, index) => {
    if (letter === characters[index + 1]) {
      currentLetterCount++;
    } else {
      if (currentLetterCount > 1) {
        characterCount[letter] = currentLetterCount;
        currentLetterCount = 1;
      }
    }
  });

  return characterCount;
}

function repeatedCharacters(string) {
  string = string.toLowerCase();
  let characterCount = {};

  for (let i = 0; i < string.length; i++) {
    if (characterCount[string[i]] !== undefined) {
      characterCount[string[i]] += 1;
    } else {
      characterCount[string[i]] = 1
    }
  }

  for (let letter in characterCount) {
    if (characterCount[letter] < 2) {
      delete characterCount[letter];
    }
  }

  return characterCount;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }