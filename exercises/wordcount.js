function wordCount(string) {
  let words = string.split(' ');
  let wordCounts = {};
  for (let index = 0; index < words.length; index++) {
    if (!wordCounts[words[index]]) {
      wordCounts[words[index]] = 0;
    }
    wordCounts[words[index]]++;
  }

  return wordCounts;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }