"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    perimeter() {
        return 2 * Math.PI * this.radius;
    }
    acreage() {
        return Math.PI * this.radius * this.radius;
    }
    getRadius() {
        return this.radius;
    }
    setRadius(newRadius) {
        this.radius = newRadius;
    }
}
let circle = new Circle(2);
console.log("Bán kính :", circle.getRadius());
console.log("Chu vi hình tròn :", circle.perimeter());
console.log("Diện tích hình tròn :", circle.acreage());
console.log("*************************");
circle.setRadius(4);
console.log("Bán kính mới :", circle.getRadius());
console.log("Chu vi mới :", circle.perimeter());
console.log("Diện tích mới :", circle.acreage());
