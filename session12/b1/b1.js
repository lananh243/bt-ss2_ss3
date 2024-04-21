"use strict";
class Employee1 {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    getPhone() {
        return this.phone;
    }
    printInfo() {
        console.log(`Tên nhân viên: ${this.name}`);
        console.log(`Tên công ty: ${this.company}`);
        console.log(`Số điện thoại: ${this.phone}`);
    }
}
class Manager extends Employee1 {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        console.log(`Tên nhân viên: ${this.name}`);
        console.log(`Tên công ty: ${this.company}`);
        console.log(`Số điện thoại: ${this.getPhone()}`);
        console.log(`Kích thước: ${this.teamSize}`);
    }
}
let manager = new Manager("bang", "công nghệ", "026382472647", 30);
manager.printInfo();
