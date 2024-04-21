"use strict";
/*
    Tính kế thừa
    là tính chất thể hiện bởi class con kế thừa class cha thì sẽ có các thuộc tính và phương thức của lớp cha
    Giúp tái sử dụng lại đoạn code
    1 class con có thể kế thừa bao nhiêu class cha
    ==> 1 con
    1 class cha có thể cho bao nhiêu class con kế thừa
    ==> nhiều
    Khai báo class cha
*/
class Parent {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    // khai báo cho class parent có phương thức showInfo
    showInfo() {
        console.log(`Xin chào ${this.name}`);
    }
    setName(newName) {
        return this.name = newName;
    }
}
// Khởi tạo class con kế thừa class cha
// để kế thừa dùng từ khóa extends
class Child extends Parent {
    constructor(name, id, age) {
        super(name, id); // phải đặt trên đầu của constructor
        this.name = name;
        this.id = id;
        this.age = age;
    }
    showInfo() {
        return `${this.name} năm nay ${this.age} tuổi`;
    }
}
// Khởi tạo đối tượng con
let child1 = new Child("lan nhi", 12, 30);
// khi class child kế thừa class Parent thì sẽ kế thừa các thuộc tính và phương thức của nó
console.log(child1.showInfo());
child1.setName("sơn tùng");
console.log("Tên mới", child1.name);
// gọi phương thức showInfo
console.log(child1.showInfo());
