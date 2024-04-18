"use strict";
// OOP : Lập trình hướng đối tượng
// yêu cầu tạo 1 đối tượng student
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // khai báo các phương thức
    // phương thức get Name
    getName() {
        console.log(`Xin chào ${this.name}`);
        return this.name;
    }
    getAge() {
        console.log(`Chào ${this.age}`);
    }
}
// tạo đối tượng dùng từ khóa new
let std1 = new Student("nhóc", 5); //intance
console.log("1111", std1);
// lấy thuộc tính :
// đối tượng . thuộc tính
console.log("Đối tượng std1 có thuộc tính name gia giá trị là", std1.name);
// gọi phương thức
// đối tượng . phương thức
console.log("gọi phương thức getName", std1.getName());
// Các tính chất của lập trình hướng đối tượng
// 4 tính chất
// 1. Đóng gói : encapsulation
// 2. Kế thừa : inheritance
// 3. Đa hình : polymorphysm
// 4. tính Trừu tượng : abstraction
