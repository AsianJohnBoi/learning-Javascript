// "Constructor" style declaration
function foo(arg1, arg2...){ ... }

// Named function declaration
var foo = function(arg1, arg2...){ ... }

// a top-level function in the global space
var foo = function(words){ return words; }

// running it "function style"
foo("hi");                    //=> "hi"

// running it with `call` and `apply`
foo.call(any_caller, "other words");      //=> "other words"
foo.apply(any_caller, ["too many words"]);  //=> "too many words"

// storing a function in the object
var bar = { baz: function() { return "bazzzz" } };

// running the function "method-style" on the object
bar.baz();                    //=> "bazzzz"

// immediately invoke a function
(function() {
  var foo = "Hello world";
  return "I'm a function!";
})();
//=> "I'm a function!"

// Passing in an anonymous function
outerFunction( function() {
  return "Hello, World!";
});

// Pass in a named function
outerFunction(someNamedFunction)

// Iterate through all arguments passed to a function
var myDynamicArgsFunc = function() {
  for( var i = 0; i < arguments.length; i++ ) {
      arg = arguments[i];
      console.log( "arg" + i + " is " + arg );
    }
}
