"use strict";
function sum1(a, b) {
    return a + b;
}
console.log(sum1(4, 5));
// any thì kiểu dữ liệu truyền vào là gì cũng được
function sum2(a, b) {
    if (typeof (a) === "number" && typeof (b) === "number") {
        return a - b;
    }
}
console.log(sum2(9, 3));
// Bắt buộc phải kiểm tra kiểu dữ kiệu trước khi thực hiện phép tính
