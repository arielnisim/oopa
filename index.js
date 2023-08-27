"use strict";
class Shape {
    constructor() { }
    info() {
        console.log("This is a Shape");
    }
    draw() {
        console.log("drawing a shape");
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    info() {
        console.log("This is a Rectangle");
    }
    scale(co) {
        this.height = this.height * co;
        this.width = this.width * co;
    }
    static areaOf2Rectangles(rectangle1, rectangle2) {
        const width = rectangle1.width + rectangle2.width;
        const height = rectangle1.height + rectangle2.height;
        const resultRectangle = new Rectangle(width, height);
        return resultRectangle;
    }
}
class ColoredRectangle extends Rectangle {
    constructor(width, height, color) {
        super(width, height);
        this.color = color;
    }
    info() {
        console.log(`This is a ${this.color} Rectangle`);
    }
}
class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
    draw() {
        console.log("drawing a square");
    }
}
class Circle extends Shape {
    constructor() {
        super();
    }
    draw() {
        console.log("drawing a circle");
    }
}
class Triangle extends Shape {
    constructor() {
        super();
    }
    draw() {
        console.log("drawing a triangle");
    }
}
const y = new Circle();
const g = new Square(5);
const h = new Triangle();
const renderShapes = (arrayShapes) => {
    arrayShapes.forEach((shape) => {
        shape.draw();
    });
};
renderShapes([y, g, h]);
