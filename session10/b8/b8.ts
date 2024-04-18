class Rectangle {
    private width: number
    private height: number
    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }
    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
    calculateArea(): number {
        return this.width * this.height;
    }
    getSize(): [number, number] {
        return [this.width, this.height];
    }
    setSize(newWidth: number, newHeight: number) {
        this.width = newWidth;
        this.height = newHeight;
    }
}
let rectangle = new Rectangle (3, 5);
console.log("Chiều dài :", rectangle.getSize()[0]);
console.log("Chiều rộng :", rectangle.getSize()[1]);
console.log("Chu vi HCN :", rectangle.calculatePerimeter());
console.log("Diện tích HCN :", rectangle.calculateArea());
console.log("******************");
rectangle.setSize(6, 8);
console.log("Chiều dài mới :", rectangle.getSize()[0]);
console.log("Chiều rộng mới :", rectangle.getSize()[1]);
console.log("Chu vi mới :", rectangle.calculatePerimeter());
console.log("Diện tích mới :", rectangle.calculateArea());






