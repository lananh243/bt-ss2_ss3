"use strict";
class Employee3 {
    constructor(name) {
        this.name = name;
    }
}
// Cách khởi tạo đối tượng abstraction 
// thêm từ khóa abstract vào đầu class
// intance
// let emp1 = new Employee3("mai");
// emp1 đc gọi là 1 intance của class Employee
// đối với abstraction thì ko cho phép khởi tạo đối tượng intance đc
/*
    tạo 1 class con kế thừa class Employee
    implement : triển khai
    bắt bc phải triển khai tất cả các phương thức của class cha (abstract)
*/
class Employee4 extends Employee3 {
    constructor(address, name) {
        super(name);
        this.address = address;
        this.name = name;
    }
}
class Student3 extends Employee3 {
    constructor(age, name) {
        super(name);
        this.age = age;
    }
    getFullName() {
    }
}
class Person2 {
    constructor(name) {
        this.name = name;
    }
    getName() {
    }
}
class Person3 extends Person2 {
}
