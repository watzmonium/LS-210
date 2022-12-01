function oddLengths(ary) {
  let newArr = ary.map(function(str){
    return str.length;
  })
  return newArr.filter(function(num){
    return num % 2 !== 0;
  })
}

function oddLengths2(ary) {
  let newArr = ary.map((str) => str.length);
  return newArr.filter((num) => num % 2 !== 0);
}

function oddLengths3(ary) {
  return ary.reduce((acc, str) => {
    let len = str.length;
    if (len % 2 === 1) {
      acc.push(len);
    }
    // you have to explicitly return the accumulator or it becomes undefined in the next
    return acc;
  }, []);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths3(arr)); // => [1, 5, 3]