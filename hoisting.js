// var bar = 42;
// console.log(global.bar);
// bar += 1;
// console.log(global.bar);

// let foo = 86;
// console.log(global.foo);


console.log(bar); // undefined
var bar = 3;
console.log(bar); // 3

// TEMPORTAL DEAD ZONE
// because let and const aren't given an initial value of undefined - they are void or 'unset'
// console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
let foo;

// console.log(qux); // ReferenceError: Cannot access 'qux' before initialization
const qux = 42;