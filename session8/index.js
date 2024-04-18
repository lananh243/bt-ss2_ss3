"use strict";
// 1. union: kiểu kết hợp |
// 2. intersection: kiểu kết hợp &
let a3 = 5;
a3 = "hồng";
// tham chiếu (array)
let numbers1 = [1, 2, 3, 4, 5];
console.log(numbers1);
let obj2 = {
    name: "hoa",
    address: "hn",
    phone: "098277376"
};
let obj3 = {
    name: "mai",
    address: "hcm",
    phone: "555",
    email: 'hong@gmail.com'
};
// type let user = string | number :Kiểu alias(bí danh)
// tuple
let array = ["hoa", 5];
let array1;
array1 = [3, "hoan"];
array1.push(6);
// 2 cách thêm thuộc tính cho đối tượng
// đối tượng . thuộc tính
// userA["abc"] = 5;
