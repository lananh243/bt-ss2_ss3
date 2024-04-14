// 1. Array
let numbers:number[]=[1,2,3,4];
//Khai báo numbers các phần tử trong mảng number phải là number
let students:string[]=["hoa","hồng","huệ"];

//2. Object
let obj:{} = {
    name:"minh thu",
    address: "hà nội",
    id:1
}
let obj1:{
    name:string,
    address:string,
    id:number
}={
    name:"minh thu",
    address:"hcm",
    id:15,
}
// 3. enum
enum Role {
    ADMIN = 5,// Sẽ đánh số từ 0
    USER
}
let person:{
    name:string,
    address:string,
    role:Role.ADMIN
}={
    name:"ngọc",
    address:"hn",
    role:5,
}
// 4. void : áp dụng với function
// - Khi hàm ko trả về kết quả gì ?
// - Khi hàm trả về kết quả thì phải khai báo kiểu dữ liệu trả về của hàm
function sayHello():void {
    console.log("hello");
    
}
sayHello();
function sum(a:number,b:number):number {
    return a+b
}
console.log(sum(3,4));
// 5. Kiểu dữ liệu unknown
// Tương tự kiểu dữ liệu any thì kiểu dữ liệu truyền vào là gì cũng đc 
function test(a:any) {
    console.log(a.toUpperCase());// Viết hoa từ đó lên
    
}
test("hu")
function test1(a:unknown) {
    // Bắt bc phải phải kiểm tra kiểu dữ liệu trc khi thực hiện phép tính
    if(typeof(a) === "string"){
        console.log(a.toUpperCase());
         
    }
    
}
test("text");
// 6. type never
// - Thường dùng trong các vòng lặp vô tận 
// tức là các vòng lặp ko có điểm dừng
// để đo giá trị :
function typeNever():never {
    let a:number = 1;
    while(true){
        console.log("Giá trị a", ++a);
        
    }
}
typeNever();