const wordSizes = string => {
  if (string === '') return {};
  const regex = /[^A-Z]/gi;
  let words = string.split(' ').map(word => word.replaceAll(regex, ''));
  let wordCount = {};

  for (let i = 0; i < words.length; i++) {
    let wordLength = words[i].length;

    if (!wordCount[wordLength]) {
      wordCount[wordLength] = 0;
    }
    wordCount[wordLength]++;
  }
  return wordCount;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}

// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
// wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
// wordSizes('');                                            // {}