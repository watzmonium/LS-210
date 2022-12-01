function evenOrOdd (number) {
  if (!Number.isInteger(number))
  {
    return 'Not an integer'
  } else {
    return number % 2 === 0 ? 'even' : 'odd';
  }
}

console.log(evenOrOdd(0));
console.log(evenOrOdd(1));
console.log(evenOrOdd(2));
console.log(evenOrOdd(3));
console.log(evenOrOdd(4));
console.log(evenOrOdd('foo'));
console.log(evenOrOdd(4.24));