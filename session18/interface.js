"use strict";
class Person11 {
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
