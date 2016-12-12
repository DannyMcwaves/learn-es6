
// Arrow function in depth.
// All the more now.
/*
for some reason you are very tire of having to write functions all over and again
especially an asynchronous one. or you have to remember scopes referring to parents when
using callbacks.

worry no more, Arrow functions are here to the rescue.
*/

// this is a function for the square root of numbers.
var sqrt = num => Math.sqrt(num);
console.log(sqrt(4)); // 2

// To use an Arrow function, you,
//1.    declare the function as a single unit.
//2.    and the functional expression as another single unit.

//eg. parameter-less function returning 'you'.
var x = () => "you";
// the parameter is defined as a single unit, so is the body of the function.

var y = num => num * 2;
// num is a single parameter definition and so is the function body.

// NB: this is wrong.

// var z = a, b => a + b
// console.log(z(4, 6)); // raises and error


// the parameter definition is a double unit.
var z = (a, b) => a + b // this the correct definition.

// also when the body of  the function is more than a single expression, wrap the body in curly braces and explicitly
// return a value from the function.
var a = (a, b) => {
    var n;
    n += a * 2;
    n += b * 2;
    return n;
}

// when returning literal objects a single expression from an arrow function, wrap the object in braces.
var obj = a => ({a: a, b: a + "b"})
console.log(obj("a"));


// WITH THAT OUT OF THE WAY, LET US LEARN TO LESSEN THE CALLBACK HELL.

var arr = [1,2,3,4,5,6,7];
var mapped = arr.map(i => i * 5);
console.log(mapped);

var interval = setInterval(() => {console.log("timed out, baby");}, 2000)

setTimeout(() => {clearInterval(interval);}, 16000);
