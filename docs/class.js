
// CLASSES
/*
classes function just like prototypes in our earlier topic, If you have taken.
It's not necessary but if you have a knowdge of prototypes, classes should be a piece of cake.

Both of them are just ways to create inheritances on objects. with class enabling th create an adhoc object.
Class combines the power of constructor functions and prototypes.
*/

// the new fancy imports .
import obj from "./object"

class Polygon{

	// this lets you call the class like a constructor function.
	constructor (height=10, width=10){
		this._height = height;
		this._width = width;
	}

	// get in front of a function lets you define a function but call it as a property.
	get area () {
		 return this.height * this.width
	}

	get perimeter(){
		return (2 * this.height) + (2 * this.width)
	}

	get width(){
		return this._width;
	}

	get height(){
		return this._height;
	}

	// the set keyword functions just like the opposite of the get keyword.
	// lets you set values to Class properties as though you are defining a variable.
	set height(value){
		this._height = value;
	}

	set width(value) {
		this._width = value;
	}

	// this means that you can get this method on the Polygon class without instantiating the class using the
	// 'new' keyword.
	static get get_height() {
		return "this is static method on the Rect Object";
	}
}
//NB: the name of the getter and the setter should not be a property on the object itself.
// to use getters and setters make the property you are getting or setting inaccessible.

class Maths{
	constructor (number) {
		this.number = number;
	}
}

// using a prototype for this class object inheritance.
Maths.prototype = Math;

var math = new Maths(5);
console.log(math.number);
console.log(math.random());


var r = new Polygon(5, 10)
console.log(r.area)
console.log(r.width)
console.log(Polygon.get_height)
console.log(r.perimeter)
console.log(obj.foo);


// INHERTANCE IN CLASSES.
class Rectangle extends Polygon {
	constructor(length=1, width=1) {
		super();
		Polygon.call(this, length, width);
	}
}

var rect = new Rectangle(5, 5);
console.log(rect);
console.log(rect.area);
