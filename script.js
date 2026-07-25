//complete this code
class Rectangle {
	constructor(w, h) {
		this.w = w;
		this.h = h;
	}
	get width() {
		return this.w;
	}
	get height() {
		return this.h;
	}
	getArea() {
		return (this.w * this.h);
	}
}

class Square extends Rectangle {
	constructor(s) {
		super(s, s);
	}
	getPerimeter() {
		return (4*this.w);
	}
	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
