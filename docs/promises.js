// bypassing asynchronous codes and CPS with promises.

/*

What is a promise?
The core idea behind promises is that a promise represents the result of an asynchronous operation. A promise is in one of three different states:

Syntax
    new Promise( /* executor /* function(resolve, reject) { ... } );

Parameters

executor
    A function that is passed with the arguments resolve and reject. The executor function is executed immediately by the Promise implementation, passing resolve and reject functions (the executor is called before the Promise constructor even returns the created object). The resolve and reject functions, when called, resolve or reject the promise respectively. The executor normally initiates some asynchronous work and then, once that completes, calls either the resolve or reject function to resolve the promise or else reject it if an error occurred.

If an error is thrown in the executor function, the promise is rejected. The return value of the executor is ignored.

Description
    A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers to an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of the final value, the asynchronous method returns a promise for the value at some point in the future.

A Promise is in one of these states:

pending: initial state, not fulfilled or rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed.

    A pending promise can either be fulfilled with a value, or rejected with a reason (error). When either of these happens, the associated handlers queued up by a promise's then method are called. (If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.)

As the Promise.prototype.then() and Promise.prototype.catch() methods return promises, they can be chained

Once a promise is fulfilled or rejected, it is immutable (i.e. it can never change again).

*/

var fs = require("fs");

var promise = new Promise(function(resolve, reject) {
    fs.readFile("./docs/class.js", (err, data) => {
        if (err) {
            reject(err);
        } else {
            resolve(data.toString());
        }
    });
});

promise.then(data => {
    console.log(data);
}, err => {
    console.log(err);
});


// using Promise.all
var read = name => {
    return new Promise((resolve, reject) => {
        fs.readFile(`./docs/${name}.js`, (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

var p1 = read("prototype"), p2 = read("maps"), p3 = read("object");

Promise.race([p1,p2,p3]).then((data) => {
    console.log(data.toString());
}, (err) => {
    console.log(err);
});
