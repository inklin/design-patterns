/* By refactoring the logic
 * for calculating a shape's area into separate
 * classes, the totalAreaCalculator no longer needs to worry about how the area is calculator.
 *
 * If we were to add another shape, we would not need to change the code
 * inside the totalAreaCalculator, since it only adds up the areas of all the shapes.
 */

class Shape {
  area(): number {
    return 0;
  }
}

class Rectangle extends Shape {
  public width : number;
  public height : number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}

class Square extends Shape {
  public side : number;

  constructor(side: number) {
    super();
    this.side = side;
  }

  area(): number {
    return this.side * this.side;
  }
}

class Circle extends Shape {
  public radius : number;

  constructor(radius: number) {
    super();
    this.radius = radius;
  }

  area(): number {
    return this.radius * this.radius * Math.PI;
  }
}

function totalAreaCalculator(shapes: Shape[]): number {
  var totalArea = 0;

  shapes.forEach((shape) => {
    totalArea += shape.area();
  })

  return totalArea;
}