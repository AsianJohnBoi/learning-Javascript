// Using an empty object literal
var person1 = {};

// Creating an object with the object literal syntax:
var person2 = {
  firstName: "Jane",
  lastName: "Doe"
};

// Assign properties using "dot notation"
person1.firstName = "John";
person1.lastName = "Doe";

// Access properties using "dot notation"
alert( person1.firstName + " " + person1.lastName );

// Assign properties using "bracket notation"
// As mentioned, objects can also have objects as a property value
var people = {};
people[ "person1" ] = person1;
people[ "person2" ] = person2;

// Access properties using a mix of both bracket and dot notation
// Here we're digging into the enclosing object and then
// we access the property of the object within it
// You've done this countless times
alert( people["person1"].firstName );
alert( people["person2"].firstName );

// Accessing a nonexistent property returns `undefined`
people["someOtherPerson"]  //=> undefined

// Below is an object that contains a function we
// define right there (which we'll talk about
// in the lesson on functions)
// Note that we're also using naked text as
// identifiers (e.g. `sayHello` and `lastName`)
// where you'd normally suspect that only a
// string would work.  It's almost like
// setting the function to a variable... and,
// for objects, it's interchangeable with a
// string.
// You call it the same way -- both
// can be called bracket-style or dot-notation style
var myObject = {
  sayHello: function() {
    console.log( "hello" );
  },
  someObject: {
    // Using a string key
    "sayGoodbye": function() {
      console.log( "goodbye" );
    }
  },
  // Using a string key
  "firstName": "Foo",
  // Using an identifier key
  lastName: "Bar"
};

// call the string key
myObject["firstName"];      //=> "Foo"
myObject["lastName"];       //=> "Bar"

// call the standard key
// (See? It doesn't matter how you call it)
myObject.firstName;         //=> "Foo"
myObject.lastName;          //=> "Bar"

// Now call that first function
// Note that we're running the function
// so need to use parentheses
myObject.sayHello();        //=> hello

// Dig into the object-within-the-object
// and again, see that it doesn't matter
// whether you use bracket-style or
// dot-notation style of indexing into
// the object.
myObject["someObject"].sayGoodbye(); //=> goodbye
myObject.someObject.sayGoodbye();    //=> goodbye

// if you don't use parentheses, it just
// returns the function itself
myObject.sayHello;
//=>  function () {
        console.log( "hello" );
      }
