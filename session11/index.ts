// cách tạo class
class Student2 {
    // khai báo các thuộc tính
    private name: string
    // mặc định nếu ko điền thì sẽ là public
    // bên ngoài class Student có thể truy cập đc 
    constructor(name:string){
        this.name=name;
    }
    // nơi khai báo các phương thức
    // phương thức lấy tên người đó
    // get thì có return và ko có tham số
    get getName(){
        return this.name
    }
    // phương thức thay đổi tên người đó
    // có tham số nhận vào và ko cần return
    set setName(newName:string){
        this.name=newName;
    }
}
// instance nghĩa là đi tạo đối tượng từ class
// let std1 = new Student ("minh");
// let std2 = new Student ("hoa");
// std1.setName("hoa");
// console.log(11111111,std1.getName());
let std3 = new Student2 ("minh");
let std2 = new Student2("thu");
std1.setName="kiên";
console.log(std1.getName);

// access modifiers - phạm vi truy cập
// 3 phạm vi
// 1. public : Bên ngoài có thể truy cập đc
// 2. private : chỉ đc truy cập ở bên trong class bên ngoài ko truy cập đc
// - lấy và thay đổi thì làm ntn ? 
// mình phải tạo ra các phương thức để lấy giá trị và cập nhật giá trị
// 3. protected : chỉ đc truy cập ở bên trong class và subclass(class con - kế thừa)