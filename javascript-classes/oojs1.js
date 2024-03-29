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

/*Inheritance class */
class Square extends Shape {
  constructor(sideLength) {
    super('square', 4, sideLength); 
    
  }
  calcArea() {
    const area = this.sideLength * this.sideLength;
    console.log(area);
  }
}

const squareAre = new Square(3);
squareAre.calcArea();
const square = new Shape ('square', 4, 5);
square.calcPerimeter();
const triangle = new Shape ('triangle', 3, 10);
triangle.calcPerimeter();
