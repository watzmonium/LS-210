function foo(bar) {
  console.log(bar());
}

let throwAway = function() { return 'welcome' };

foo(throwAway);
foo(function() { return "Welcome" });
foo(function() { return 3.1415 });
foo(function() { return [1, 2, 3] });