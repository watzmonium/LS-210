const countOccurrences = (array) => {
  let wordCount = {};

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (!wordCount[item]) {
      wordCount[item] = 0;
    }

    wordCount[item]++;
  }
  
  return wordCount;
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
'motorcycle', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2