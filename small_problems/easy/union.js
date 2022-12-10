const union = (array1, array2) => {
  let unionArray = array1.slice();

  for (let i = 0; i < array2.length; i++) {
    let found = false;
    for (let j = 0; j < unionArray.length; j++) {
      if (unionArray[j] === array2[i]) {
        found = true;
      }
    }
    if (!found) {
      unionArray.push(array2[i]);
    }
  }
  return unionArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]