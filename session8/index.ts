// 1. union: kiểu kết hợp |
// 2. intersection: kiểu kết hợp &
let a3:number | string | undefined = 5;
a3 = "hồng";
// tham chiếu (array)
let numbers1: (number|string)[]=[1,2,3,4,5];
console.log(numbers1);

// 
type A = {
    name:string,
    address:string,
    phone:string
}
type B={
    email:string
}
type C = A&B;
let obj2:A={
    name:"hoa",
    address:"hn",
    phone:"098277376"
}
let obj3:C={
    name:"mai",
    address:"hcm",
    phone:"555",
    email:'hong@gmail.com'
}
// type let user = string | number :Kiểu alias(bí danh)


// tuple
let array:(number|string)[]=["hoa",5];
let array1:[number,string];
array1=[3,"hoan"];
array1.push(6);
// 2 cách thêm thuộc tính cho đối tượng
// đối tượng . thuộc tính
// userA["abc"] = 5;


