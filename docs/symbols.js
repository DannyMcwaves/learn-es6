// ITERATORS.

// this method is going to help me create ITERATORS out of a normal object ot to turn a normal
// oject into an iterator.

class Name extends Array {

    constructor (...names) {
        super(...names);
        this.names = [...names];
    }

    static get [Symbol.iterable]()  {return this.names;}

}

var name = new Name("Johnny", "Jared", "Juma", "Jeffrey", "Jade")
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
