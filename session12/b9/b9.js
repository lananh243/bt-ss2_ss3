"use strict";
class Shape {
    constructor() { }
    calculateArea() {
        return 0;
    }
    calculatePerimeter() {
        return 0;
    }
}
class Rectangle1 extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
class Circle1 extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
let rectangle1 = new Rectangle1(2, 10);
let circle1 = new Circle1(3);
console.log("Diện tích hình chữ nhật:", rectangle1.calculateArea());
console.log("Chu vi hình chữ nhật:", rectangle1.calculatePerimeter());
console.log("Diện tích hình tròn:", circle1.calculateArea());
console.log("Chu vi hình tròn:", circle1.calculatePerimeter());
