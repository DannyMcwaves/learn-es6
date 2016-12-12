// OBJECTS

// es6 have brought us some new ways of simply creating objects which I won't say is better
// than it was before but kinda okay and easier.


// easier ways of definind methods.
var bar = "baz";
var obj = {
    _foo: "bar",
    get foo() {
        return this._foo;
    },
    set foo(val) {
        this._foo = val;
    },
    // using computed property names in this context.
    // we are setting the value of bar('baz') as a property in the object.
    ["_" + bar]: "ponyTail",
    get baz() {
        return this._baz;
    },
    set baz(val) {
        this._baz = val;
    }
};

console.log(obj.foo);
obj.foo = "Danny Mcwaves";
console.log(obj.foo);
console.log(obj.baz);
obj.baz = "ponyBail";
console.log(obj.baz);

// object destructturing using computed property names.
var { [bar]: a } = obj;
console.log(a);

module.exports = obj;

// to read more about the new properties of objects. VISIT HERE.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object