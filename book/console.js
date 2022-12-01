function greeter(greeting) {
  return function(name) {
    return greeting + ' ' + name;
  }
}

let hello = greeter('Hello');
let hi = greeter('Hi');

// this is a closure because it's remembering the scope that the function was called with

console.log(greeter('this')('that'));
console.log(hello('Trevor'));  // prints "Hello Trevor"
console.log(hello('Ginni'));   // prints "Hello Ginni"
console.log(hi('Spencer'));    // prints "Hi Spencer"
console.log(hi('Grace'));      // prints "Hi Grace"