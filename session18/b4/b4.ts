interface Geometry1 {
    calculateArea():void;
    calculatePerimeter():void;
}
class Circle11 implements Geometry1{
    private radius: number;
    constructor(radius:number){
        this.radius = radius;
    }
    calculateArea(){
        return Math.PI * this.radius ** 2;
    };
    calculatePerimeter(){
        return 2 * Math.PI * this.radius;
    };
}
class Rectangle11 implements Geometry1{
    private width:number;
    private height:number;
    constructor(width:number, height:number){
        this.width = width;
        this.height = height;
    }
    calculateArea(){
        return this.width * this.height;
    };
    calculatePerimeter(){
        return (this.width + this.height) * 2;
    };
}

let circle11 = new Circle11(4);
console.log("Diện tích hình tròn: ",circle11.calculateArea());
console.log("Chu vi hình tròn: ",circle11.calculatePerimeter());
let rectangle11 = new Rectangle11(5, 9)
console.log("Diện tích HCN: ",rectangle11.calculateArea());
console.log("Chu vi HCN: ",rectangle11.calculatePerimeter());

