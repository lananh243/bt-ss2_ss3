"use strict";
/*
    * Abstract class (Lớp trừu tượng):
    Một abstract class là một lớp mà không thể tạo ra trực tiếp, và thường được sử dụng như một lớp cơ sở để chia sẻ mã và định nghĩa các phương thức chung cho các lớp con.
    Một abstract class có thể chứa phương thức abstract (chỉ có khai báo mà không có định nghĩa) và các phương thức đã được triển khai (có định nghĩa).
    Lớp con kế thừa từ một abstract class phải triển khai (hoặc ghi đè) tất cả các phương thức abstract trong abstract class đó.
    Abstract class có thể có các trường (biến thành viên) và phương thức thông thường, và có thể cung cấp một cài đặt mặc định cho các phương thức mà lớp con có thể ghi đè.
*/
class Employee12 {
    constructor(name) {
        this.name = name;
    }
}
class Students3 extends Employee12 {
    constructor(age, name) {
        super(name);
        this.age = age;
    }
    getFullName() {
        return `Họ và tên : ${this.name}`;
    }
}
let stds = new Students3(20, "Nguyễn Lệ");
console.log(stds.getFullName());
class Persons {
    constructor(name, address) {
        // ko cần để super
        this.name = name;
        this.address = address;
    }
    // bắt bc phải triển khai phương thức sale trong interface
    sale() {
        return "giảm giá 5%";
    }
    sale1() {
        return "giảm giá 15%";
    }
}
let user11 = new Persons("mai", "hoàng mai");
console.log("Phiếu giảm giá: ", user11.sale());
