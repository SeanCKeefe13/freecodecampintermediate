//OOJS1

class Shape {

constructor(name, sides, sideLength){
this.name = name;
this.sides = sides;
this.sideLength = sideLength;
}

calcPerimeter(){
console.log(this.sides * this.sideLength)
}

}
//first test of Shape class    
//const square = new Shape('square', 4, 5);

square.calcPerimeter();

const triangle = new Shape('triangle', 3, 3);

triangle.calcPerimeter();

//OOJS2

class Square extends Shape{

    constructor(sideLength){
    super(name)
    
    name = 'square';
    this.sides = 4;
    this.sideLength = sideLength;
    
    }
    calcArea(){
    console.log(this.sideLength * this.sideLength)
    }
    }
    //second test of Square class
    const square = new Square(5)
    
    square.calcArea()
    square.calcPerimeter()