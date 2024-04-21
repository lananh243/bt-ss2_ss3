class Product {
    protected name: string
    protected price: number
    constructor(name:string, price:number){
        this.name = name;
        this.price = price;
    }
    getDescription(): void{
        console.log(`Tên : ${this.name}`);
        console.log(`Giá : ${this.price}`);
    }
}
class Electronics extends Product {
    private id: number
    constructor(name:string, price:number, id:number){
        super(name, price)
        this.id = id;
    }
    getDescription(): void {
        console.log(`Tên : ${this.name}`);
        console.log(`Giá : ${this.price}`);
        console.log(`Id : ${this.id}`); 
    }
}
let electronics = new Electronics ("Máy cắt cỏ", 189, 1);
electronics.getDescription();