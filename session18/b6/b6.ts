/*
    * Abstract class (Lớp trừu tượng):
    Một abstract class là một lớp mà không thể tạo ra trực tiếp, và thường được sử dụng như một lớp cơ sở để chia sẻ mã và định nghĩa các phương thức chung cho các lớp con.
    Một abstract class có thể chứa phương thức abstract (chỉ có khai báo mà không có định nghĩa) và các phương thức đã được triển khai (có định nghĩa).
    Lớp con kế thừa từ một abstract class phải triển khai (hoặc ghi đè) tất cả các phương thức abstract trong abstract class đó.
    Abstract class có thể có các trường (biến thành viên) và phương thức thông thường, và có thể cung cấp một cài đặt mặc định cho các phương thức mà lớp con có thể ghi đè.
*/ 

abstract class Employee12 {
    name: string
    constructor(name: string){
        this.name = name;
    }
    abstract getFullName():void;
}
class Students3 extends Employee12 {
    private age:number
    constructor(age: number, name:string){
        super(name)
        this.age = age;
    }
    getFullName(): string {
        return `Họ và tên : ${this.name}`
    }
}
let stds = new Students3 (20, "Nguyễn Lệ");
console.log(stds.getFullName());

/*
    interface: giao diện
    dùng để định nghĩa các thuộc tính và phương thức các lớp con
    kế thừa bắt bc phải triển khai 
    ==> cũng giống như abstract
    - có những điểm gì giống nhau so với abstract
    - để tạo abstract thì dùng từ khóa abstract
    - để tạo interface thì dùng interface
    trong interface sẽ gồm thuộc tính và phương thức
    - đối với phương thức thì ko có phần thân tức là nó chỉ định nghĩa thôi
    - đối với interface thì ko thể dùng kiểu kết hợp (union và intersection) đc như đối với type
    -Có thể khởi tạo đối tượng từ interface đc ko?
    ==> Ko thể khởi tạo đối tượng từ interface đc
    -interface sinh ra nhằm mục đích gì?
    -interface là 1 cái khuân mẫu cho các class khác kế thừa phải tuân theo
    - các class con khi kế thừa interface bắt buộc phải triển khai tất cả các thuộc tính và phương thức của interface (implement)
    - 1 class có thể triển khai nhiều interface được ko??
    ==> 1 class có thể triển khai nhiều interface đc
    - interface có kế thừa interface đc không ??
    ==> interface có thể kế thừa interface
    trong interface thì ko thể đặt acces modifier đc
 */ 

interface Sales{
    name: string;
    sale():string;
    sale1():void;
}
class Persons implements Sales{
    name:string;
    address: string;
    constructor(name: string, address: string){
        // ko cần để super
        this.name = name;
        this.address = address
    }
    // bắt bc phải triển khai phương thức sale trong interface
    sale(): string{
        return "giảm giá 5%"
    }
    sale1():string{
        return "giảm giá 15%"
    }
}
let user11 = new Persons ("mai", "hoàng mai");
console.log("Phiếu giảm giá: ",user11.sale());
 