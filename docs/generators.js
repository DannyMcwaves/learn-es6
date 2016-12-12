
// generator functions are functions that are executed when the next property on the generator Object is called.
// A generator object is returned from a generator function.


// The function* declaration (function keyword followed by an asterisk) defines a generator function, which returns a Generator object.
// You can also define generator functions using the GeneratorFunction constructor and a function* expression.

/*

Syntax

function* name([param[, param[, ... param]]]) {
   statements
}

name
    The function name.
param
    The name of an argument to be passed to the function. A function can have up to 255 arguments.
statements
    The statements comprising the body of the function.


Description
    Generators are functions which can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.

    Calling a generator function does not execute its body immediately; an iterator object for the function is returned instead. When the iterator's next() method is called, the generator function's body is executed until the first yield expression, which specifies the value to be returned from the iterator or, with yield*, delegates to another generator function. The next() method returns an object with a value property containing the yielded value and a done property which indicates whether the generator has yielded its last value as a boolean. Calling the next() method with an argument will resume the generator function execution, replacing the yield statement where execution was paused with the argument from next().

*/

function* idMaker(){
  var index = 0;
  while(index < 3)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined

// since the generator object is an iterable you can iterate through it as so.
/*
for (let i of gen) {
    console.log(i);
}
this snippet of code will not log anything because the values are already yielded in the above.
you cannot get values from the generator object once the values has being yielded and the done property
on the generator is true.
*/

// as said earlier, using yield* lets you yield from another generator function.

function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
  yield i + 4;
}

function* generator(i){
  yield i;

  // the value of i functions only in this sub generator.
  yield* anotherGenerator(i);

  // this is the same value passed earlier
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 14
console.log(gen.next().value); // 20


function* listGen() {
    // an Array is iterable so yield* will return each item in the Array
    yield* [1,2,3,4,5,6,7,8,9]
}

var lg = listGen();
for (let i of lg) {
    console.log(i);
}

console.log(lg.next());


function* subYield(i) {
    yield i + 10;
    yield* listGen();
    yield i * 20;
}

var sub = subYield(5);
for (let i of sub) {
    console.log(i);
}
