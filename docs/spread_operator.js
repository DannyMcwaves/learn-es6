
// SPREAD  OPERATORS
// the spread operator is just three dots preceeding an iterable use to get the values of that iterable

// spread is used in function parameter or an array object.

//NB: spread operators work only with arrays.

var array = [1,2,3,4,5,6,7,8], array2 = []
array2.push(...array)

console.log(array);
console.log(array2);
array.push(...array2);
console.log(array);


// REST PARAMETER
// The rest parameter syntax allows us to represent an indefinite number of arguments as an array.

// If the last named argument of a function is prefixed with ..., it becomes an array whose elements from 0 (inclusive) to theArgs.length (exclusive) are supplied by the actual arguments passed to the function.

//In the above example, theArgs would collect the third argument of the function (because the first one is mapped to a, and the second to b) and all the consecutive arguments.

function add(...rest_params) {return rest_params.reduce((i, n) => {return  i + n})}
var a = add(1,2,3,4,5,6,7,8,9)
console.log(a);

// as the name suggest the rest parameter means the rest of the parameters. Its like using the spread
// operator in a function to specify the rest of the arguments passed..

// you can use the rest parameter with other arguments as well.
// eg.

// multiply an array of numbers by this thingy.
function mul(multiplier, ...arrayOfNumbers) {return arrayOfNumbers.map((i) => {return multiplier * i})}
var ml = mul(2, 1,2,3,4,5)
console.log(ml);
