class Shape {
  name;
  sides;
  sideLength;
  constructor (name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  calcPerimeter() {
    const per = this.sides * this.sideLength;
    console.log(per);
  }
}
const square = new Shape ('square', 4, 5);
square.calcPerimeter();
