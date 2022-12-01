// function randomNumberBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let tries = 0;
// let result = 0;
// while (result <= 2) {
//   result = randomNumberBetween(1, 6);
//   tries += 1;
// }

// console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

// a = [1, 3, 2];
// a.sort();
// console.log(a);

Array.prototype.forEach = function(callback) {
  for (let index = 0; index < this.length; index += 1) {
    callback(this[index]);
  }
}

let array = [1, 2, 3];
array.forEach(function someName(value) { console.log(value); })
// when you call for each, you pass an anonymous function to it
// the fuction then acts as a parameter for ANOTHER anonymous function
// then that function starts a for loop with the length of the calling object
// references as this.length to the calling object for an object prototype function
// uses this[index] to iterate through the array and each time calling the anon function
// passed in as the 'callback'

Array.prototype.poop = function(callback) {
  for (let index = 0; index < this.length; index += 1) {
    callback('poop');
  }
}

let array = [1, 2, 3];
array.forEach(function someName(value) { console.log(value); })

// prints poop 3 times