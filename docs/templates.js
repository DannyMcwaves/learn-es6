
// TEMPLATE STRINGS || TEMPLATE LITERALS
// a very formal introduction.

// Template literals are string literals allowing embedded expressions.
// You can use multi-line strings and string interpolation features with them.
// They were called "template strings" in prior editions of the ES2015 / ES6 specification.


// In 2014, when I want to join two string together, I would do so like this.
var s = "My name is ", name = "Danny Mcwaves", fullSentence = s+name;
console.log(fullSentence); // "My name is Danny"
// because I probably need the name variable in other areas of my script.
// this is very simple to do now.
var full_sentence = `My name is ${name}`
console.log(full_sentence);

/*
DESCRIPTION
Template literals are enclosed by the back-tick (` `) (grave accent) character instead of double or single quotes. Template literals can contain place holders. These are indicated by the Dollar sign and curly braces (${expression}). The expressions in the place holders and the text between them get passed to a function. The default function just concatenates the parts into a single string. If there is an expression preceding the template literal (tag here),  the template string is called "tagged template literal". In that case, the tag expression (usually a function) gets called with the processed template literal, which you can then manipulate before outputting. To escape a back-tick in a template literal, put a backslash \ before the back-tick
*/

// this might seem very normal but wait till you see the other powerful features that you are going
// to see and use in the process.

//1. you can evaluate expressions in a template literal as so.
var evaluate = `10 + 5 = ${10 + 5} and this is just amazing as it gets.`
console.log(evaluate);
var names = ["Danny", "Mcwaves", "John D. Rockefeller", "J. P Morgan", "Andrew Carnegie"],
    myInfo = {name: "John Doe", age: 25, year: 1990, country: "UK"};

console.log(`this are the monoploy guys ${names.slice(2, 5).join(", ")}`);
console.log(`   And this is gotta see too
    because I am writing all this function
    sentences on multi-lines without anything stopping me
    that is because I am ${names.slice(0,2).join(" ")}`)

// MULTILINE
// using the back tick template literal, it is very possible to write strings that span multiple lines.

var data = (`
multi-lines are now the norm when it comes to writing long literal strings
and all that. I hope this work for anyone as much as it does for me.\nand a new line separation
`);

console.log(data);


// TAGGED TEMPLATE LITERALS
/*
A more advanced form of template literals are tagged template literals. With them you are able to modify the output of template literals using a function. The first argument contains an array of string literals ("Hello " , " world", and "" in this example). The second, and each argument after the first one, are the values of the processed (or sometimes called cooked) substitution expressions ("15" and "50" here). In the end, your function returns your manipulated string. There is nothing special about the name tag in the following example. The function name may be anything you want.
*/

var a = 5;
var b = 10;

function tag(strings, ...values) {
  console.log(strings[0]); // "Hello "
  console.log(strings[1]); // " world "
  console.log(strings[2]); // ""
  console.log(values[0]);  // 15
  console.log(values[1]);  // 50

  return "Bazinga!";
}

tag`Hello ${ a + b } world ${ a * b }`;
// "Bazinga!"

// tag templates are template literals with functions right in front of them.
// what the functio returns become the value of the tag literal

function breaks(sentence, ...values) {console.log(values[1]); return sentence[0].split(values[0])}
console.log(breaks`this is what I came here for and this is what I am going to get${" "}there too though${"what"}`);

// In a taggged template literal, the expressions are the controlling variables and the
// and the string which is the first argument is the main data we are going to parse or manipulate.
// all of them are in an array.

// basic point is,  A tagged template literal returns has a function attached to it and the function attached to it and the
// function manipulates the template literal and lets it return anything it needs to return.
// the arguments passed to the tagged function are he strings in the template lietral and the interpolations of the template lietral.
