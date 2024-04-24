let aNew:string[]=[];
class ShopItem {
    protected id: number;
    protected name: string;
    protected price: number;
    protected isAvailable: boolean;
    constructor(id: number, name: string, price: number, isAvailable: boolean = true) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.isAvailable = isAvailable;
    }
    getInfo(): void {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Price:", this.price);
        console.log("Available:", this.isAvailable);
    }
}
class LendingItem extends ShopItem {
    private customerNames: string[];
    private stock: number;
    constructor(id: number, name: string, price: number, stock: number) {
        super(id, name, price);
        this.customerNames=[];
        this.stock = stock;
    }
    getInfo(): void {
        console.log("ID:", this.id);
        console.log("Tên sách:", this.name);
        console.log("Giá:", this.price);
        console.log("Trạng thái:", this.isAvailable);
        console.log("Số lượng:", this.stock);
    }
    lendItem(a: string): void {
        if (this.stock > 0) {
            this.customerNames.push(a);
            aNew = [...this.customerNames];
            this.stock--;
        } else if(this.stock === 0) {
            this.isAvailable = false;
            console.log(`sản phẩm cho thuê đã hết`);
        }
    }
    showName():void{
        console.log("Người mượn sách:", aNew);
    }
    returnItem(a:string):void{
        let flag=0;
        for (let i = 0; i < this.customerNames.length; i++) {
            if(a===this.customerNames[i]){
                this.customerNames.splice(i,1);
                aNew = this.customerNames;
                this.stock++;
                flag=1;
            }
        }
        if(flag===0){
            console.log("Không tìm thấy tên người đã mượn sách");
        }
    }
}

console.log("bài 11");
// Tạo một thực thể từ lớp LendingItem
const lendingItem = new LendingItem(1, "Book", 123, 5);
lendingItem.getInfo();

lendingItem.lendItem("Ninh");
lendingItem.lendItem("Dương");
lendingItem.showName();
lendingItem.getInfo(); // stock đã giảm 2 lần

console.log("---------------------------");
console.log("bài 12");
lendingItem.returnItem("Quang");
lendingItem.showName();
lendingItem.getInfo();