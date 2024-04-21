"use strict";
class Person1 {
    constructor(name) {
        this.name = name;
    }
    displayInfo() {
        console.log(`Tên : ${this.name}`);
    }
}
class Studen2 extends Person1 {
    constructor(name, id) {
        super(name);
        this.name = name;
        this.id = id;
    }
    displayInfo() {
        console.log(`Tên : ${this.name}`);
        console.log(`Id : ${this.id}`);
    }
}
let student = new Studen2("mai linh", 1);
student.displayInfo();
