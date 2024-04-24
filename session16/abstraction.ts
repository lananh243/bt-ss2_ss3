abstract class Employee3 {
    name: string
    constructor(name: string){
        this.name = name;
    }
    // khai báo phương thức
    // getFullName(){
    //     return this.name
    // }
    abstract getFullName():void;
    // đối vs phương thức trong astract thì chỉ có tên phương thức và kiểu dữ liệu trả về và ko có phần body
}
// Cách khởi tạo đối tượng abstraction 
// thêm từ khóa abstract vào đầu class
// intance
// let emp1 = new Employee3("mai");
// emp1 đc gọi là 1 intance của class Employee
// đối với abstraction thì ko cho phép khởi tạo đối tượng intance đc
/*
    tạo 1 class con kế thừa class Employee
    implement : triển khai
    bắt bc phải triển khai tất cả các phương thức của class cha (abstract)
*/ 
abstract class Employee4 extends Employee3{
    address: string
    constructor(address:string, name:string){
        super(name)
        this.address = address;
        this.name = name;
    }
}
class Student3 extends Employee3 {
    private age:number
    constructor(age: number, name:string){
        super(name)
        this.age = age
    }
    getFullName(): void {
        
    }
}
class Person2 {
    name: string
    constructor(name: string){
        this.name = name;
    }
    getName(){

    }
}
class Person3 extends Person2{
    // nếu triển khai phương thức của class cha thì gọi là overridding (ghi đè phương thức)
}