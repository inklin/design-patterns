/* We have a Rectangle class
 * that has a width and a height.
 *
 * We also have a function totalArea calculator that
 * adds up the area of many rectangles.
 *
 * This is all fine, but what if we now want to
 * support circles? We would have to go into
 * the code of totalAreaCalculator and add an if-else
 * condition to check for the type of shape to determine
 * how to calculate the area.
 *
 * What if we added a square? We would have to once
 * again go into the function to change how the total
 * area is calculated!
 */

class Rectangle {
  public width : number;
  public height : number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
}

function totalAreaCalculator(rectangles: Rectangle[]): number {
  var totalArea = 0;

  rectangles.forEach((rectangle) => {
    totalArea += (rectangle.width * rectangle.height)
  })

  return totalArea;
}