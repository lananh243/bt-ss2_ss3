"use strict";
// void : áp dụng với với function
function hello() {
    console.log("hello world");
}
// - Khi hàm ko trả về kết quả gì ?
hello();
function check1(a) {
    console.log(a.toUpperCase());
}
// - Khi hàm trả về kết quả thì phải khai báo kiểu dữ liệu trả về của hàm
check1("kiều loan");
// - Thường dùng trong các vòng lặp vô tận tức là các vòng lặp ko có điểm dừng
// để đo giá trị :
function typeNever1() {
    let a = "ngọc lan";
    while (true) {
        console.log("Giá trị a", a);
    }
}
typeNever1();
