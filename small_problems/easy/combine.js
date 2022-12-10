const interleave = (array1, array2) => {
  let combinedArray = [];

  while (array1.length > 0 && array2.length > 0) {
    if (array1.length > 0) {
      combinedArray.push(array1.shift());
    }
    if (array2.length > 0) {
      combinedArray.push(array2.shift());
    }
  }
  return combinedArray
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]