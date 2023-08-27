class Shape {
  constructor() {}

  info(): void {
    console.log("This is a Shape");
  }

  draw(): void {
    console.log("drawing a shape");
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }

  info(): void {
    console.log("This is a Rectangle");
  }

  scale(co: number): void {
    this.height = this.height * co;
    this.width = this.width * co;
  }

  static areaOf2Rectangles(
    rectangle1: Rectangle,
    rectangle2: Rectangle
  ): Rectangle {
    const width: number = rectangle1.width + rectangle2.width;
    const height: number = rectangle1.height + rectangle2.height;
    const resultRectangle = new Rectangle(width, height);
    return resultRectangle;
  }
}

class ColoredRectangle extends Rectangle {
  color: string;

  constructor(width: number, height: number, color: string) {
    super(width, height);
    this.color = color;
  }

  info(): void {
    console.log(`This is a ${this.color} Rectangle`);
  }
}

class Square extends Rectangle {
  constructor(side: number) {
    super(side, side);
  }

  draw(): void {
    console.log("drawing a square");
  }
}

class Circle extends Shape {
  constructor() {
    super();
  }

  draw(): void {
    console.log("drawing a circle");
  }
}

class Triangle extends Shape {
  constructor() {
    super();
  }

  draw(): void {
    console.log("drawing a triangle");
  }
}

const renderShapes = (arrayShapes: Shape[]): void => {
  arrayShapes.forEach((shape) => {
    shape.draw();
  });
};
