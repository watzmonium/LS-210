  # Useful things
  - 
  typeof primitive
  Number.MAX_SAFE_INTEGER == 9quadrilion
  Number.MAX_VALUE == 1.7... e^308
  anything greater is `Infinity`

  Infinity, -Infinity - for any value you need DEFINITELY a larger number

  string.charAt(idx) OR string[idx]
    bracket notation is an OPERATOR not a method

  binary + operator coerces all to strings on either side
    null + 'a' == 'nulla'

  math operators convert all to numbers

  null == undefined and that's it

  Number.isNaN(var);

  # expressions vs statements
    an expression is any code that resolves to a value
    statements do not.

  # IO
    prompt('string') => opens up a dialogue window
      returns a string
    alert('string') => popup okay alert

  # Casting
    Number(var)
    parseInt(var, base)
      parseInt('128', 10) => 128
    +(var) => coerces to number

    String(var)
    var.toString();

  # Boolean reference

    Boolean(null);           // false
    Boolean(NaN);            // false
    Boolean(0);              // false
    Boolean('');             // false
    Boolean(false);          // false
    Boolean(undefined);      // false
    Boolean('abc');          // other values will be true
    Boolean(123);            // true
    Boolean('true');         // including the string 'true'
    Boolean('false');        // but also including the string 'false'!

  # Scoping
    variables declred globally are global and available to functions
    js uses `lexical scoping` - the compiler determines scope
      the compiler creates a hierarchy from bottom to global and stops when it hits one

    IF YOU DONT SPECIFY A VARIABLE DECLARATION, JS CREATES A NEW GLOBAL

  # Hoisting

    What is hoisting?
      during program creation (some kind of pre-compiling)
      variables are all moved to the top of their respective scopes

    How do var, let, and const interact with hoisting? How do they differ?
      var creates a new property of the global object
        UNLESS used in a function
      var is function scoped vs let function scoped
      var is undefined before being declared
      let and const throw errors that they havent yet been initialized 

    How do functions and classes interact with hoisting? How do they differ?
      functions can be accessed at any point in the program because of hoisting unless they're
      declared in some weird sub-scope
    What part does hoisting play in the way a specific program works?
      it allows functions to be placed anywhere in the global scope
      functions trying to invoke global variables before they're defined can cause problems
    How does hoisting really work?
      it's just a pre-processing step js does before execution probably to allocate memory

  # Style
    2 space soft tabs
    1 space before curly brace
    1 space before if/while conditional
    0 spaces after function name to args
    spaces between operators
    0 spaces after parentheses - function(foo)
    0 spaces between increment operators - c++
    avoid unnecessary ternary statements
        // bad
        let foo = a ? a : b;
        let bar = c ? true : false;
        let baz = c ? false : true;

        // good
        let foo = a || b;
        let bar = !!c;
        let baz = !c;
    blank line after blocks
    no blank lines padding block contents
    ONLY use brackets with multi-line blocks:
        // good
          if (test) return false;
          if (test) {
            return false;
          }
        // bad
          function foo() { return false; }
    use !! for boolean conversion

  # Objects

  - ES6 change from colon syntax

    let myObj = {
      # OLD
      foo: function (who) {
        console.log(`hello ${who}`);
      },

      # NEW
      foo(who) {
        console.log(`hello ${who}`);
      },

      bar(x, y) {
        return x + y;
      },
    };

  DONT USE ARROW FUNCTIONS FOR METHODS. there's some issue with it

  you can use `delete obj.prop` to delete a property from an object.

  # Deep copy of a nested array or basic object:

    serializedArr = JSON.stringify(arr)
    JSON.parse(serializedArr)

    - this works if the object being copied only has
      - primitives
      - arrays
      - plain objects

  # To remember:

    number.toFixed(precision) => returns a string at that precision
    array.splice(startIdx, numberToOverwrite, valueToInsert)
    array.slice(-2, -1)[0]x
    let copy = [...array] => creates a shallow copy
    Object.assign(destination, source) => creates a shallow copy of an object
    quantity = quantity || 1;

  # Studying
    examples of a closure in JS
    examples of hoisting