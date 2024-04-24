"use strict";
class Shape1 {
    constructor(name) {
        this.name = name;
    }
    // viết theo phương thức normal
    getName() {
        // lấy ra tên của hình
        return `hình là ${this.name}`;
    }
}
class Rectangle2 extends Shape1 {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log("Chiều dài", this.width);
        console.log("Chiều rộng", this.height);
        // return `Chiều dài ${this.width} và chiều rộng ${this.height}`
    }
}
let rectangle3 = new Rectangle2("HCN", 5, 7);
console.log(rectangle3.getName());
rectangle3.getSize();
