class Shape {
    constructor() {}
   
    calculateArea(): number {
      return 0;
    }
   
    calculatePerimeter(): number {
      return 0;
    }
}
class Rectangle1 extends Shape {
    private width : number
    private height : number
    constructor(width:number, height:number){
        super()
        this.width = width;
        this.height = height
    }
    calculateArea(): number {
        return this.width * this.height;
    }
    
    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}
class Circle1 extends Shape {
    private radius: number
    constructor(radius:number){
        super()
        this.radius = radius;
    }
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
     
    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}
let rectangle1 = new Rectangle1(2, 10);
let circle1 = new Circle1(3);
console.log("Diện tích hình chữ nhật:", rectangle1.calculateArea());
console.log("Chu vi hình chữ nhật:", rectangle1.calculatePerimeter());
 
console.log("Diện tích hình tròn:", circle1.calculateArea());
console.log("Chu vi hình tròn:", circle1.calculatePerimeter());
 
