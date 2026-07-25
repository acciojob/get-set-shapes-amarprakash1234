//complete this code
class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
	// get width() {
	// 	return this.w;
	// }
	// get height() {
	// 	return this.h;
	// }
	getArea() {
		return (this.width * this.height);
	}
}

class Square extends Animal {
	constructor(s) {
		super(s, s);
	}
	getPerimeter() {
		return (4*this.width);
	}
	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
