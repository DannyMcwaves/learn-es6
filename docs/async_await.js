
// async and await functions.

//ASYNC
// async is used to run a function asynchronously. the returned results are bundled and returned as promise.
// It will seem really pointless to use blocking functions in async function call. Instead use a promise and await it
// and the get the value.
/*
The async function declaration defines a async function, which returns a AsyncFunction object.

You can also define async functions using the AsyncFunction constructor and a async function expression.

Syntax
async function name([param[, param[, ... param]]]) {
   statements
}
name
    The function name.
param
    The name of an argument to be passed to the function.
statements
    The statements comprising the body of the function.

Description
    When async function is called, it returns a promise.  When the async function returns a value, the promise will be resolved with the returned value.  When the async function throws an exception or some value, the promise will be rejected with the thrown value.

    Async function can contain await expression, that pauses the execution of the async function and waits for the passed promise's resolution, and resumes the async function's execution and returns the resolved value.

    Rewriting promise chain with async function

    API that returns promise will result in promise chain, and it splits function into many parts.  Suppose the following code:
*/

async function add(data) {
    return data + data;
}

var ad = add(5);
ad.then((val) => {
    console.log(val);
}, (err) => {
    console.log(err);
});


function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
    // since this is an asynchronous function, the loop doesnt block over here
    // and as such, x assumes the state of the function and not the value returned.
    var x = resolveAfter2Seconds(10);
    console.log(x); // 10

}

f1();


// AWAIT
// The await operator is used to wait for a promise returned by an async function.
/*
Syntax
    [rv] = await expression;
expression
    A promise or any value to wait for the resolution.
rv
    Returns the resolved value of the promise, or the value itself if it's not a promise.

Description
    The await expression causes async function execution to pause and wait for the promise's resolution, and resumes the async function execution when the value is resolved, and returns the resolved value.  If the value is not a promise, it's converted to a resolved promise.

    If the promise is rejected, await expression throws the reason value.

    If a promise is passed to await expression,
    it waits for the promise's resolution and returns resolved value.
*/

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();
