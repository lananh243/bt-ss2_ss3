abstract class Shape1 {
    name: string
    constructor(name:string){
        this.name = name
    }
    // viết theo phương thức normal
    getName(){
        // lấy ra tên của hình
        return `hình là ${this.name}`
    }
    // viết theo kiểu abstract
    abstract getSize():void
}
class Rectangle2 extends Shape1{
    width: number
    height:number
    constructor(name:string,width:number,height:number){
        super(name)
        this.width = width;
        this.height = height;
    }
    getSize():void {
        console.log("Chiều dài", this.width);
        console.log("Chiều rộng", this.height);
        // return `Chiều dài ${this.width} và chiều rộng ${this.height}`
    }
}
let rectangle3 = new Rectangle2 ("HCN", 5, 7);
console.log(rectangle3.getName());
rectangle3.getSize();

