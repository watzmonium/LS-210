# JS Basics

  - opening the console on chrome
    -  cmd + opt + j

  DOM API lets you manipulate web pages

  XHR (XMLHttprequest) interface and fetch API let you communicate with servers

  node gives a REPL if you type `node`

  instance methods vs static methods

    - instance use object.prototype.method vs static use object.method
    - instance methods are applied to a an object
    - static methods are called on the class or constructor

  # Data Types
    - String
    - Number
      - all numbers, real numbers
    - Undefined
    - Boolean
    - Null
     use .typeof

  # Strings
    - either quote type is Ok
    - interpolation:
      > `5 plus 5 equals ${5 + 5}`
      = '5 plus 5 equals 10'

  # undefined AND null
    - lack of a value
    - delcaring variables returns undefined
    - null is EXPLICIT
      - it means INTENTIONAL NOTHING

  # Numbers
    - NaN is for invalid math operations
     `Number.isNaN(var);` - called on the number prototype as a static method
    - Infinity is another 'erronious' value like NaN
      Infinity results from something like divide by 0
      There's also -Infinity

    - numbers and strings concatenated implicitly convert to string
      UNLESS you're trying to do something actually mathy then you get a number

  # casting:
    Number(string)
    parseInt(string)
      - parseInt('12xyz') => 12
      - parseInt(3.14159) => 3
    parseFloat
    String(number)

  # Arrays
    [1, 2, 3, 4]
    [ "name", "other name", "another name"]

  # Objects
    - like hashes
    { dog: 'barks', cat: 'meows', pig: 'oinks' }
    ({ dog: 'barks', cat: 'meows', pig: 'oinks' })['cat']
      => 'meows

    {
      title: "Monty Python's Flying Circus",
      cast: [
        "Eric Idle",
        "John Cleese",
        "Terry Gilliam",
        "Graham Chapman",
        "Michael Palin",
        "Terry Jones",
      ],
      firstSeason: 1969,
      lastSeason: 1974,
    }

  # Expressions and Statements
    almost everything in JS is an expression
    some things are statements i.e.
      let foo = 3;
      no return value
    functions and class names are variables

  # scope
     let and const are block scoped

  # functions
    extra parameters are ignored
    parameters not given a value will be undefined

    function expression: a function saved to a variable
      - cannot be invoked before being defined
      - this can be done because js functions are `first class` functions
      - THEY ARE ALL OBJECTS

      let greetPeople = function () {
        console.log("Good Morning!");
      };

      greetPeople();

    arrow functions:
      let add = (a, b) => a + b;
      - implicit return!

  # Conditionals
    if (condition) {

    } elsif (condition) {

    } else {

    }

    === strict eqality operator (same type and value)
    == loose equality operator (coerced into same) < try not to use
    < > operators coerce string/number comparisons

    falsey values in js:
      false, 0, -0, 0n, '', undefined, NaN, null

    ternary expressions:
      let isOk = (foo || bar) ? true : false;

      let isOk = !!(foo || bar);

    switches: 
      case statement
      syntax is switch(arg) {
        case:
          code;
          break;
      }
      let a = 5;

      switch (a) {
        case 5:
          console.log('a is 5');
          break;
        case 6:
          console.log('a is 6');
          break;
        default:
          console.log('a is neither 5, nor 6');
          break;
      } // => a is 5

  # loops
    while (true) {

    }

    do {

    } while (true);

    for (let i = 0; i < names; i++) {

    }

    continue 
      - same as next
    break

    array.forEach(function(i){
      console.log(i);
    });

    for/in loops:
      for (let person in people) {
        some code
      }


  # arrays
    arrays are not strongly typed in js
    you can set a key/value in an array, though it's not a real index
    you can just change the length of an array by accessinging the length method
      though uninitialized values are undefined but also not real indexes

    array.push(value) => append, mutates
    array.concat(value) => append, doesnt mutate, returns new ary
    array.pop => destroy last element, mutate
    array.splice(loc, num) => removes num number at location loc mutates
    array.slice(start, end) => takes a section, non-inclusive, no arg dups array
    array.forEach(callback) => takes a function to iterate
    array.map => new array
    array.filter => like select
    array.reduce((accumulator, obj) => accumulator + obj, 0)
    array.includes(value) -> uses === equality to compare
    array.sort()
    array.reverse()

    Array.isArray(ary) => t/f
    Object.keys(ary)

  # Objects
    store data as key/value pairs
      keys are strings or symbols

    declared literally as:
      let object = {
        name: "jane",
        age:  37,
        hobbies: ['knitting', 'sewing'],
      };

    access via dota or bracket
      object.name OR
      object['name']

    assignment can be via dot or bracket as well

    delete person['age'] => returns true unless the property doesn't exist

    Object.create(obj)
      - lets you create an object that inherits from another object

    obj2.hasOwnProperty(prop)

    obj.keys => array
    obj.values => array
    obj.entries => nested array of k/v pairs
    Object.prototype.assign(a, b) => merges the two objects, mutating a

  # OOJS

    Array.prototype.forEach = function(callback) {
    for (let index = 0; index < this.length; index += 1) {
      callback(this[index]);
      }
    }

    let array = [1, 2, 3];
    array.forEach(function callback(value) { console.log(value); })

    -----------

    function greeter(greeting) {
      return function(name) {
        return console.log(`${greeting} ${name}`);
      }
    }

    let hello = greeter('Hello');
    let hi = greeter('Hi');

    console.log(hello('Trevor'));  // prints "Hello Trevor"
    console.log(hello('Ginni'));   // prints "Hello Ginni"
    console.log(hi('Spencer'));    // prints "Hi Spencer"
    console.log(hi('Grace'));      // prints "Hi Grace"

  # etc

    for... of...
      can be used to iterate over arrays and strings

    regex
    /pat/.test('string') => false
    'string'.match(/regx/[g]) g returns array of all

    Math object:
      Math.sqrt()
      Math.PI

    Date object
      date =new Date('January 1, 2022')
      date.getDay();
        > 2 (day of the week)

    try {
      
    } catch (exception)