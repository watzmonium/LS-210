function uniqueElements(arr) {
  let uniqueArray = [];

  arr.forEach(function(item) {
    if (uniqueArray.indexOf(item) === -1) uniqueArray.push(item);
  });

  return uniqueArray; 
}


console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]