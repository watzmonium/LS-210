function oddLengths(arr) {
  return arr.reduce((acc, obj) => {
    if (obj.length % 2 === 1) {
      acc.push(obj.length);
    }
    return acc;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]