"use strict";
class Shape {
    constructor() { }
    overloading(a, b) {
        if (b) {
            let area = a * b;
            let perimeter = 2 * (a + b);
            return `Diện tích hình chữ nhật là: ${area}, Chu vi hình chữ nhật là: ${perimeter}`;
        }
        else {
            let area = Math.PI * a * a;
            let circumference = 2 * Math.PI * a;
            return `Diện tích hình tròn là: ${area}, Chu vi hình tròn là: ${circumference}`;
        }
    }
}
class Rectangle1 extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
}
class Circle1 extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getRadius() {
        return this.radius;
    }
}
let rectangle1 = new Rectangle1(4, 4);
let circle1 = new Circle1(6);
console.log(rectangle1.overloading(rectangle1.getWidth(), rectangle1.getHeight()));
console.log(circle1.overloading(circle1.getRadius()));
