// void : áp dụng với với function
function hello():void {
    console.log("hello world"); 
}
// - Khi hàm ko trả về kết quả gì ?
hello();
function check1(a:any) {
    console.log(a.toUpperCase());
    
}
// - Khi hàm trả về kết quả thì phải khai báo kiểu dữ liệu trả về của hàm
check1("kiều loan");

// - Thường dùng trong các vòng lặp vô tận tức là các vòng lặp ko có điểm dừng
// để đo giá trị :
function typeNever1():never {
    let a:string = "ngọc lan";
    while(true){
        console.log("Giá trị a", a);
        
    }
}
typeNever1();