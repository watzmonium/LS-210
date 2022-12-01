function allMatches(array, regex) {
  return array.reduce((ary, subStr) => {
    if (regex.test(subStr)) {
      ary.push(subStr);
    }
    return ary;
  }, []);
}

function allMatches2(words, pattern) {
  return words.filter((word) => pattern.test(word));
}


let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']
console.log(allMatches2(words, /lab/))