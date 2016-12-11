// P R O T O T Y P E   W I T H   J S
/*
JavaScript prototyping is method of inheritance implememted by JavaScript.
inheritance is a way of gaining properties defined on another Object.
By inheritance, we can get methods and properties defined
on other objects.

LET US SEE THIS IN PRACTICE WIT AN EXAMPLE.
you should know how to create and work with objects to get this.

*/

// this is a Maths constructor function that I am going to use to extend the buoilt in Math Object.
// NB: the built in Math Object is not a constructor function. You can't call it using 'new'
function Maths(x) {
    this.number = x || 1;
}

// I have set the object that our math has to inherit from using prototype.
// so even if we do  no have a method explicitly defined on the Maths Object,
// I will return a value if that method is defined on the Math Object.
Maths.prototype = Math;

var math = new Maths();

console.log(math.random());
// returns a random number.
console.log(math.abs(12345.9088927));


// ALSO A PROTOTYPE OBJECT IS CREATED ONCE AN OBJECT IS CREATED.
// SO YOU CAN SPECIFY PROPERTIES ON THE THAT PROTOTYPE OBJECT.
//EXAMPLE:

function Me(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

Me.prototype.fullname = function () {
    return this.firstname + " " + this.lastname;
}

var me = new Me("Danny", "Mcwaves");
console.log(me.fullname());
console.log(me.firstname);


// thing is, the prototype is an object from which you are asking an object that you are creating to get
// properties on in case those properties are not on the object you are creating.

//NB: with constructor functions you always have to instantiate them by using the new keyword.
// more EXAMPLE:

function Plant(name) {this.name = name || "no name specified"; this.genus = "Phaeophyta"};
Plant.prototype.fullDescription = function () {
    return `
PLANTNAME: ${this.name}
GENUS: ${this.genus}
    `
}
var plant = new Plant("cactus");
console.log(plant.fullDescription());

function Fruit(name) {

    // we are just calling the plant in this context
    // the this over here means Fruit, so the properties in the Plant constructor function are bound to this object;
    Plant.call(this, name);
}

// remember; new Plant() and not just plant.
Fruit.prototype = new Plant();

var frt = new Fruit("Mango");
console.log(frt.hasOwnProperty("fullDescription"));
console.log(frt.fullDescription());


// this is just a basic intro.
// you can read more to know more;

// also some built in functions allows you to define more properties on its prototype.
// EXAMPLE:

// this is your name and you want put it on the String Object so you can get it later.
String.prototype.myname = "Danny Mcwaves";
var sth = "whatever"
console.log(sth.myname); // Danny Mcwaves.

// this might seem like nothing but it 's' just to prove a point that you can.
