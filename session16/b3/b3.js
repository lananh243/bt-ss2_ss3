"use strict";
/*
1. Abstract Method (Phương thức trừu tượng):
    Abstract method là một phương thức không có cài đặt (implementation) trong lớp chứa nó.
    Nó chỉ được khai báo trong lớp trừu tượng (abstract class) hoặc giao diện (interface).
    Lớp con phải cung cấp cài đặt cho phương thức trừu tượng bằng cách ghi đè (override) phương thức đó.
    Phương thức trừu tượng không có dấu ngoặc nhọn và không có thân hàm.
    Mục đích của abstract method là chỉ định một hành động mà các lớp con phải tuân thủ.
*/
class Shape3 {
}
class Rectangle3 extends Shape3 {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
const rectang = new Rectangle3(4, 6);
console.log(rectang.calculateArea());
/*
2. Method (Phương thức):
    Method là một phương thức có cài đặt (implementation) trong một lớp.
    Nó được định nghĩa bằng dấu ngoặc nhọn và chứa mã để thực thi một hành động cụ thể.
    Một method có thể được gọi trực tiếp trên đối tượng của lớp đó.
*/
class MathUtils {
    static add(a, b) {
        return a + b;
    }
    multiply(a, b) {
        return a * b;
    }
}
console.log(MathUtils.add(2, 3));
const mathUtils = new MathUtils();
console.log(mathUtils.multiply(4, 5));
