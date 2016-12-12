/*

The Map object is a simple key/value map. Any value (both objects and primitive values) may be used as either a key or a value.

Syntax
new Map([iterable])
Parameters

iterable
Iterable is an Array or other iterable object whose elements are key-value pairs (2-element Arrays). Each key-value pair is added to the new Map. null is treated as undefined.
Description
A Map object iterates its elements in insertion order — a for...of loop returns an array of [key, value] for each iteration.

It should be noted that a Map that is a map of an object, especially a dictionary of dictionaries, will only map to the object's insertion order -- which is random and not ordered.

Key equality
    Key equality is based on the "same-value" algorithm: NaN is considered the same as NaN (even though NaN !== NaN) and all other values are considered equal according to the semantics of the === operator. In earlier versions of the ECMAScript 6 draft -0 and + 0 were considered distinct (even though -0 === +0), this has been changed in later versions and has been adapted in Gecko 29 (Firefox 29 / Thunderbird 29 / SeaMonkey 2.26) (bug 952870) and a recent nightly Chrome.

Objects and maps compared

    Objects are similar to Maps in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Because of this (and because there were no built-in alternatives), Objects have been used as Maps historically; however, there are important differences between Objects and Maps that make using a Map better:

    An Object has a prototype, so there are default keys in the map. This could be bypassed by using map = Object.create(null) since ES5, but was seldom done.

    The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and or any primitive.

    You can get the size of a Map easily with the size property, while the size of an Object must be determined manually.

    This does not mean you should use Maps everywhere, objects still are used in most cases. Map instances are only useful for collections, and you should consider adapting your code where you have previously used objects for such. Objects shall be used as records, with fields and methods.

If you're still not sure which one to use, ask yourself the following questions:
-------------------------------------------------------------------------------------------------------------------------
Are keys usually unknown until run time, do you need to look them up dynamically?
Do all values have the same type, and can be used interchangeably?
Do you need keys that aren't strings?
Are key-value pairs often added or removed?
Do you have an arbitrary (easily changing) amount of key-value pairs?
Is the collection iterated?
Those all are signs that you want a Map for a collection. If in contrast you have a fixed amount of keys, operate on them individually, and distinguish between their usage, then you want an object.

Properties

Map.length
    The value of the length property is 0.
get Map[@@species]
    The constructor function that is used to create derived objects.
Map.prototype
    Represents the prototype for the Map constructor. Allows the addition of properties to all Map objects.
Map instances
    All Map instances inherit from Map.prototype.

Properties

Map.prototype.constructor
    Returns the function that created an instance's prototype. This is the Map function by default.
Map.prototype.size
    Returns the number of key/value pairs in the Map object.

Methods
Map.prototype.clear()
    Removes all key/value pairs from the Map object.
Map.prototype.delete(key)
    Removes any value associated to the key and returns the value that Map.prototype.has(key) would have previously returned. Map.prototype.has(key) will return false afterwards.
Map.prototype.entries()
    Returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order.
Map.prototype.forEach(callbackFn[, thisArg])
    Calls callbackFn once for each key-value pair present in the Map object, in insertion order. If a thisArg parameter is provided to forEach, it will be used as the this value for each callback.
Map.prototype.get(key)
    Returns the value associated to the key, or undefined if there is none.
Map.prototype.has(key)
    Returns a boolean asserting whether a value has been associated to the key in the Map object or not.
Map.prototype.keys()
    Returns a new Iterator object that contains the keys for each element in the Map object in insertion order.
Map.prototype.set(key, value)
    Sets the value for the key in the Map object. Returns the Map object.
Map.prototype.values()
    Returns a new Iterator object that contains the values for each element in the Map object in insertion order.
Map.prototype[@@iterator]()
    Returns a new Iterator object that contains an array of [key, value] for each element in the Map object in insertion order.

*/

var myMap = new Map();

var keyString = "a string",
    keyObj = {},
    keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

myMap.size; // 3

// getting the values
myMap.get(keyString);    // "value associated with 'a string'"
myMap.get(keyObj);       // "value associated with keyObj"
myMap.get(keyFunc);      // "value associated with keyFunc"

myMap.get("a string");   // "value associated with 'a string'"
                         // because keyString === 'a string'
myMap.get({});           // undefined, because keyObj !== {}
myMap.get(function() {}) // undefined, because keyFunc !== function () {}


// looping through maps.
//--------------------------------------------------------------------------------------------------------------------
var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");
for (var [key, value] of myMap) {
  console.log(key + " = " + value);
}
// 0 = zero
// 1 = one

for (var key of myMap.keys()) {
  console.log(key);
}
// 0
// 1

for (var value of myMap.values()) {
  console.log(value);
}
// zero
// one

for (var [key, value] of myMap.entries()) {
  console.log(key + " = " + value);
}
// 0 = zero
// 1 = one


// getting a reference to each element in the map.
myMap.forEach(function(value, key) {
  console.log(key + " = " + value);
});
