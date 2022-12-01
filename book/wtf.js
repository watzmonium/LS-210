function foo(bar) {
  console.log(bar());
}

foo(() => 'baz');
foo(function() { return 'baz' });

let qux = function() { return 'baz' };
foo(qux)

let qix = () => 'baz';
foo(qix);