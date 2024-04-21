"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log(`Tên : ${this.name}`);
        console.log(`Giá : ${this.price}`);
    }
}
class Electronics extends Product {
    constructor(name, price, id) {
        super(name, price);
        this.id = id;
    }
    getDescription() {
        console.log(`Tên : ${this.name}`);
        console.log(`Giá : ${this.price}`);
        console.log(`Id : ${this.id}`);
    }
}
let electronics = new Electronics("Máy cắt cỏ", 189, 1);
electronics.getDescription();
