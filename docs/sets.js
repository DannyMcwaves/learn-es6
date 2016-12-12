/*The Set object lets you store unique values of any type, whether primitive values or object references.

Syntax
    new Set([iterable]);

Parameters

iterable
    If an iterable object is passed, all of its elements will be added to the new Set. null is treated as undefined.

Description
    Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.

Value equality

    Because each value in the Set has to be unique, the value equality will be checked. In an earlier version of ECMAScript specification this was not based on the same algorithm as the one used in the === operator. Specifically, for Sets, +0 (which is strictly equal to -0) and -0 were different values. However, this was changed in the ECMAScript 2015 specification. See "Value equality for -0 and 0" in the browser compatability table for details.

Also, NaN and undefined can also be stored in a Set. NaN is considered the same as NaN (even though NaN !== NaN).

Properties
Set.length
    The value of the length property is 0.
get Set[@@species]
    The constructor function that is used to create derived objects.
Set.prototype
    Represents the prototype for the Set constructor. Allows the addition of properties to all Set objects.
Set instances
    All Set instances inherit from Set.prototype.

Properties

Set.prototype.constructor
    Returns the function that created an instance's prototype. This is the Set function by default.
Set.prototype.size
    Returns the number of values in the Set object.
Methods

Set.prototype.add(value)
    Appends a new element with the given value to the Set object. Returns the Set object.
Set.prototype.clear()
    Removes all elements from the Set object.
Set.prototype.delete(value)
    Removes the element associated to the value and returns the value that Set.prototype.has(value) would have previously returned. Set.prototype.has(value) will return false afterwards.
Set.prototype.entries()
    Returns a new Iterator object that contains an array of [value, value] for each element in the Set object, in insertion order. This is kept similar to the Map object, so that each entry has the same value for its key and value here.
Set.prototype.forEach(callbackFn[, thisArg])
    Calls callbackFn once for each value present in the Set object, in insertion order. If a thisArg parameter is provided to forEach, it will be used as the this value for each callback.
Set.prototype.has(value)
    Returns a boolean asserting whether an element is present with the given value in the Set object or not.
Set.prototype.keys()
    Is the same function as the values() function and returns a new Iterator object that contains the values for each element in the Set object in insertion order.
Set.prototype.values()
    Returns a new Iterator object that contains the values for each element in the Set object in insertion order.
Set.prototype[@@iterator]()
    Returns a new Iterator object that contains the values for each element in the Set object in insertion order.

*/

// excerpted from MDN.
// set is just a container that can be created from an iterable and is itself an iterable.
// it only contains unique values, meaning no values can be duplicated.

var mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add("some text");
var o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2}); // o is referencing a different object so this is okay

mySet.has(1); // true
mySet.has(3); // false, 3 has not been added to the set
mySet.has(5);              // true
mySet.has(Math.sqrt(25));  // true
mySet.has("Some Text".toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 5

mySet.delete(5); // removes 5 from the set
mySet.has(5);    // false, 5 has been removed

mySet.size; // 4, we just removed one value

// creating sets from iterables.
var set = new Set([1,2,3,4,5,6,7,8, "Danny Mcwaves", "Johnny Klavak", {name: "Johnny Epstein", age: 35}])
console.log(set);

// looping through the set.
for (let elem of set) {
    console.log(elem);
}

// accessing each key in the set
set.forEach(i => {console.log(i)})

// since sets are iterables, you can synthesize arrays with sets as so:
var array = Array.from(set)
console.log(array);


// SET HAVE PROTOTYPES AND THEREFORE.
//YOU CAN SET PROPS ON THE PROTOTYPES OF SETS.
// LOOK AT 'ES6/SETS.JS' FOR MORE PROPS ON THE SET.PROTOTYPE
