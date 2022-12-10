function reverse(inputForReversal) {
  let len = inputForReversal.length - 1;
  let reversed;
  if (Array.isArray(inputForReversal)) {
    reversed = [];
    for (let i = 0; i <= len; i++) {
      reversed.push(inputForReversal[len - i]);
    }
  } else {
    reversed = '';
    for (let i = 0; i <= len; i++) {
      reversed += inputForReversal[len - i];
    }
  }
  
  return reversed;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]