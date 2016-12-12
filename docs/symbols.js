// ITERATORS.

// this method is going to help me create ITERATORS out of a normal object ot to turn a normal
// oject into an iterator.
/*
Symbols are a new primitive. Just like the Number, String, and Boolean primitives, Symbols have a Symbol function which can be used to create them. Unlike the other primitives, Symbols do not have a literal syntax (e.g how Strings have '') - the only way to make them is with the Symbol constructor-not-constructor-thingy:

In addition to that, Symbols do not show up on an Object using for in, for of or Object.getOwnPropertyNames - the only way to get the Symbols within an Object is Object.getOwnPropertySymbols:

Symbols are completely unique…

By default, each new Symbol has a completely unique value. If you create a symbol (var mysym = Symbol()) it creates a completely new value inside the JavaScript engine. If you don’t have the reference for the Symbol, you just can’t use it. This also means two symbols will never equal the same value, even if they have the same description
*/


class Name extends Array{

    constructor (...names) {
        super(...names)
        this.names = [...names];
    }

    *[Symbol.iterator](){
        for (let i of this.names) {
            yield i;
        }
    }

    [Symbol.species](cb){
        return this;
    }

    get [Symbol.toStringTag]() {
        return 'Names';
    }

}

var name = new Name("Johnny", "Jared", "Juma", "Jeffrey", "Jade")
console.log(name.toString());
console.log(name[0]);
for (let i of name) {
    console.log(i);
}

var mapped = name.map(function (x) {
    return x + "s.";
})

var reduced = name.reduce((p, n) => p + " " + n)
console.log(reduced);
console.log(mapped);

var object = {
    name: "Forest Whittaker",

    age: 20,

    year: 1996,

    self: "Me",

    call(){return this.name + " " + this.age},

    get length(){
        var count = 0;
        for (let i in this) {
            count++;
        }
        return count;
    },

    get keys(){
        var array = [];
        for (let i in this) {
            array.push(i);
        }
        return array;
    },

    *[Symbol.iterator](){
        for (let i in this) {
            yield [i , this[i]];
        }
    },

}

console.log(object.length);
console.log(object.keys);
for (let [a, b] of object) {
    console.log(a + " " + b);
}

var iter = [...object]
console.log(iter);


// extending symbols

var userSym = Symbol("user");
class Users {
    constructor(name) {
        this[userSym] = name || "No name";
        let age = 15;
    }
    get name(){return this[userSym];}
}

var user = new Users();
console.log(user);


// some well know symbols

/*
Symbol.hasInstance: instanceof

Symbol.hasInstance is a Symbol which drives the behaviour of instanceof. When an ES6 compliant engine sees the instanceof operator in an expression it calls upon Symbol.hasInstance. For example, lho instanceof rho would call rho[Symbol.hasInstance](lho) (where rho is the right hand operand and lho is the left hand operand). It’s then up to the method to determine if it inherits from that particular instance, you could implement this like so
*/

class MyClass {
    constructor () {

    }

    [Symbol.hasInstance](lho) {
        return lho instanceof this;
    }
}

var mc = new MyClass()
console.log([] instanceof MyClass);
console.log(mc instanceof MyClass);

/*
Symbol.isConcatSpreadable

Symbol.isConcatSpreadable is a pretty specific Symbol - driving the behaviour of Array#concat. You see, Array#concat can take multiple arguments, which - if arrays - will themselves be flattened (or spread) as part of the concat operation. Consider the following code:
*/
var x = [1, 2].concat([3, 4], [5, 6], 7, 8);
console.log(x, [1, 2, 3, 4, 5, 6, 7, 8]);

/*
As of ES6 the way Array#concat will determine if any of its arguments are spreadable will be with Symbol.isConcatSpreadable. This is more used to say that the class you have made that extends Array won’t be particularly good for Array#concat, rather than the other way around:
*/

class ArrayIsh extends Array {
    get [Symbol.isConcatSpreadable]() {
        return true;
    }
}
class Collection extends Array {
    get [Symbol.isConcatSpreadable]() {
        return false;
    }
}
var arrayIshInstance = new ArrayIsh();
arrayIshInstance[0] = 3;
arrayIshInstance[1] = 4;
var collectionInstance = new Collection();
collectionInstance[0] = 5;
collectionInstance[1] = 6;
var spreadableTest = [1,2].concat(arrayIshInstance).concat(collectionInstance);
console.log(spreadableTest, [1, 2, 3, 4, "<Collection>"]);
/*
Symbol.match

This is another Symbol specific to a function. String#match function will now use this to determine if the given value can be used to match against it. So, you can provide your own matching implementation to use, rather than using Regular Expressions:
*/
class MyMatcher {
    constructor(value) {
        this.value = value;
    }
    [Symbol.match](string) {
        var index = string.indexOf(this.value);
        if (index === -1) {
            return null;
        }
        return [this.value];
    }
}
var fooMatcher = 'foobar'.match(new MyMatcher('foo'));
var barMatcher = 'foobar'.match(new MyMatcher('bar'));
console.log(fooMatcher, ['foo']);
console.log(barMatcher, ['bar']);

/*
Symbol.replace

Just like Symbol.match, Symbol.replace has been added to allow custom classes, where you’d normally use Regular Expressions, for String#replace:
*/
class MyReplacer {
    constructor(value) {
        this.value = value;
    }
    [Symbol.replace](string, replacer) {
        var index = string.indexOf(this.value);
        if (index === -1) {
            return string;
        }
        if (typeof replacer === 'function') {
            replacer = replacer.call(undefined, this.value, string);
        }
        return `${string.slice(0, index)}${replacer}${string.slice(index + this.value.length)}`;
    }
}
var fooReplaced = 'foobar'.replace(new MyReplacer('foo'), 'baz');
var barMatcher = 'foobar'.replace(new MyReplacer('bar'), function () { return 'baz' });
console.log(fooReplaced, 'bazbar');
console.log(barMatcher, 'foobaz');

/*
Symbol.search

Yup, just like Symbol.match and Symbol.replace, Symbol.search exists to prop up String#search - allowing for custom classes instead of Regular Expressions:
*/
class MySearch {
    constructor(value) {
        this.value = value;
    }
    [Symbol.search](string) {
        return string.indexOf(this.value);
    }
}
var fooSearch = 'foobar'.search(new MySearch('foo'));
var barSearch = 'foobar'.search(new MySearch('bar'));
var bazSearch = 'foobar'.search(new MySearch('baz'));
console.log(fooSearch, 0);
console.log(barSearch, 3);
console.log(bazSearch, -1);

/*
Symbol.split

Ok, last of the String symbols - Symbol.split is for String#split. Use like so:
*/

class MySplitter {
    constructor(value) {
        this.value = value;
    }
    [Symbol.split](string) {
        var index = string.indexOf(this.value);
        if (index === -1) {
            return string;
        }
        return [string.substr(0, index), string.substr(index + this.value.length)];
    }
}
var fooSplitter = 'foobar'.split(new MySplitter('foo'));
var barSplitter = 'foobar'.split(new MySplitter('bar'));
console.log(fooSplitter, ['', 'bar']);
console.log(barSplitter, ['foo', '']);
