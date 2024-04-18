class Circle {
    private radius: number
    constructor(radius: number){
        this.radius = radius;
    }
    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
    acreage(): number {
        return Math.PI * this.radius * this.radius; 
    }
    getRadius(){
        return this.radius 
    }
    setRadius(newRadius:number){
        this.radius = newRadius;
    }
}
let circle = new Circle (2);
console.log("Bán kính :", circle.getRadius());
console.log("Chu vi hình tròn :", circle.perimeter());
console.log("Diện tích hình tròn :", circle.acreage());
console.log("*************************");
circle.setRadius(4);
console.log("Bán kính mới :", circle.getRadius());
console.log("Chu vi mới :", circle.perimeter());
console.log("Diện tích mới :", circle.acreage());







 