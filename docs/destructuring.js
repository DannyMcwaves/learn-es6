
/*
For the docs on this lessons see the destructuring.tuts file in the docs directory
*/

// A R R A Y  -  D E S T R  U C T U R I N G

/*
0. The first subject line is destructuring.
    As the name suggests, breaking down a structure.
    That is all you need to know. [BREAKING DOWN A DATA structure.]
    So let us see some real codes for this.

1. The destructuring assignment syntax is a JavaScript expression that makes it
    possible to extract data from arrays or objects into distinct variables.

2. The object and array literal expressions provide an easy way to create ad hoc packages of data

3. The destructuring assignment uses similar syntax, but on the left-hand side of the
    assignment to define what elements to extract from the sourced variable.

*/



//A variable can be assigned its value via destructuring separate from the variable's declaration.
var array = ["destructuring", "with", "JavaScript", "using", "arrays"],
    a,
    b;

// NB: The syntax on the left side is the same as the synatx on the right side but the left has variable
// That corresponds to the the value on the right side

[a, b] = array
// or array = ["destructuring", "with", "javascript", "using", "arrays"]

//so basically we have:
[a, b] = ["destructuring", "with", "javascript", "using", "arrays"];

// NB; you do not necessarily need to define the  variable before assingment.
// so even this is as valid as the former.
var [d, j] = array;

console.log(a, b) // outputs ---> destructuring with
console.log(d, j); // outputs --->  destructuring with



// DEFAULT VALUES.
// also, it is possoble to specify  default values in case the values you are trying to assign are undefined
// as an example:
var array2 = [1]
var [a, b] = array2
console.log(a, b) // outputs ----> 1 and undefined

// Assigning default values will be.
var [a=2, b=3] = array2

console.log(a, b) // outputs  ----> 1 and 3

// the default value  for a is 2 and the default value for b is 3. Whilst b is undefined it takes on the default value


//SWAPPING VARIABLES
// Two variables values can be swapped in one destructuring expression.
// the values of those variables can be interchanged
var a = 1, b = 2
console.log(a, b); // outputs ---> 1, 2

[a, b] = [b, a]
// swaps the values of the variables
console.log(a, b); // outputs ---> 2, 1


//PARSING AN ARRAY RETURNED FROM A FUNCTION
// It's always been possible to return an array from a function. Destructuring can make working with an array return value more concise.
//parsing an array is parsing an array, no matter where that array if from. As long as you get hold of the array, you can parse it.
// when you get an array from a function you can parse it too.

function arrayFunction() {return [1,2,3,4]}
var [x, y,z,a] = arrayFunction()
console.log(x, y,z,a) // outputs ----> 1 2 3 4


// SKIPPING OR IGNORING VALUES DURING PARSING ASSIGNMENT
// It is also possible to skip some values in the array when you are assinging values.
// so if I need specific values, I would have to ignore some and get those values.

var names = ["Ayikpah", "Daniel", "Amanor", "Mcwaves"];
var [ , firstName, , LastName] = names;
// the first ',' has a space before it meaning that value in the array is ignored.
// to ignore a value, just pass a ',' and no variables.

console.log(firstName, LastName);    // outputs ---> Daniel Mcwaves


// GETTING THE REST OF THE VALUES AFTER ASSIGNMENT.
// there is a new concept in es6 called spreading. we will come it later tutorials.
// it lets you spread iterables into an array.
// using the concept of spreading it is possible to get the rest of the values left in array after assignment
var names = ["Ayikpah", "Daniel", "Amanor", "Mcwaves"];
var [surname, ...rest] = names
// this assigns the surname and then collects the other names into a new array.

console.log(surname, rest); // outputs ----> Ayikpah ["Daniel", "Amanor", "Mcwaves"]





// OBJECT DESTRUCTURING.
// just like an array, objects can also be destructed.

// Basic Assignment.
var myInfo = {name: "John Doe", age: 25, year: 1990, country: "UK"}

var {name, age} = myInfo
// this gets the name and age values of the equivalent properties on the myInfo Object and assigns them as variables
// to the name and age in the literal to te left.
// NB: your variable name definition should correspond to the property whose value you need to get.
console.log(name, age); // outputs ---> John Doe 25

// It is very possible to use other variable names other than the properties of the Object.
var {name:a, age:b} = myInfo
// the values are now assigned to a and b whiles name and age do not exists.

console.log(a, b) // outputs ---> John Doe 25

// Assignment with variable declaration.
// you can declare variables and then  assign to them later.
var a, b;

({age:a, year:b} = myInfo)
// the parenthesis around the variable declaration is the best practice for Object lietral assignment.


// SETTING DEFAULT VALUES.
// just like its sibling brother array, you can set default values for a variable in case it undefined.
var {age=22, name="DannyMcwaves", likes="Being nerdy."} = myInfo
console.log(age, name, likes) // outputs ---->  25 John Doe Being nerdy



// OBJECT DESTRUCTURING WITH FUNCTIONS AND MORE.

function setDefaults({name="DannyMcwaves", age=20} = {}) {return `${name} is my name and I am ${age} years old`}
var a = setDefaults(), b = setDefaults({name: "Azkherbhan Mistriii", age: 35});
console.log(a, b); // DannyMcwaves is my name and I am 20 years old -- Azkherbhan Mistriii is my name and I am 35 years old


// OTHER DATA METHODS OF DESTRUCTURING.

var nested = {name: "Danny Mcwaves", age: 25, siblings: {older: "Francis Slick", younger: "Frank and Emma"}, year: 1996}

// getting nested data from an object is as simple
var {name, siblings:{older}} = nested
console.log(name, older);

var metadata = {
    title: "Scratchpad",
    translations: [
       {
        locale: "de",
        localization_tags: [ ],
        last_edit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung"
       }
    ],
    url: "/en-US/docs/Tools/Scratchpad"
};

var { title: englishTitle, translations: [{ title: localeTitle, url }, other="Non-existent"] } = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"
console.log(other); // "Non-existent"
console.log(url);


// PULLING DATA IN A LOOP.
var people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith"
    },
    age: 35
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones"
    },
    age: 25
  }
];
// using the new of, you can get the the component in any iterable.
for (let i of people) {console.log(i);}

// we can use destructuring to get specific data from a content in a loop as so.
for (let {name, age, family: {mother}} of people) {console.log(`this is ${name}, I am ${age} year old and ${mother} is my mother`);}
