// Union Types (Kiểu Liên Hợp):
// Union Types là kiểu dữ liệu mà một biến có thể là một trong nhiều kiểu khác nhau.
// Nó được biểu diễn bằng cách sử dụng dấu | để liệt kê các kiểu khác nhau.
// Khi sử dụng một biến có kiểu liên hợp, bạn có thể thực hiện các hoạt động chung giữa các kiểu.
let option: (number | string | null)[] = [1,2,'3',4,5,null];
console.log(option);
// Intersection Types (Kiểu Giao Nhau):
// Intersection Types là kiểu dữ liệu mà một biến phải có tất cả các kiểu được chỉ định.
// Nó được biểu diễn bằng cách sử dụng dấu & để kết hợp các kiểu lại với nhau.
// Khi sử dụng một biến có kiểu giao nhau, bạn có thể truy cập và sử dụng tất cả các thuộc tính và phương thức từ các kiểu được kết hợp.
type A1 = {
    name:string,
    age: number,
    gender: string
}
type A2 = {
    status: boolean
}
type A3 = A1&A2;

let li:A3 = {
    name:"bích",
    age: 28,
    gender: "nữ",
    status: true
}
console.log(li);
