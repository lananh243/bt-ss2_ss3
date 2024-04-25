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
interface Sales1{
    name: string,
    address: string
}
interface Sales3 extends Sales1{
    age: number;
}
class Person11 implements Sales,Sales1{
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
type C1 = {
    name: string;
}
type D1 = {
    id: number
    email: string
}
type D2 = C1 & D1;
