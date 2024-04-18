class Vehicle {
    name: string;
    year: string;
    company: string;
    constructor(name:string,year:string,company:string){
        this.name=name;
        this.year=year;
        this.company=company;
    }
}
let vehicle1 = new Vehicle ("Rolls-Royce Boat Tail","2024","siêu xe");
let vehicle2 = new Vehicle ("Aston Martin","2023","siêu xe");
console.log("Thông tin của xe thứ nhất là :");
console.log("Tên xe :",vehicle1.name);
console.log("Năm sản xuất :",vehicle1.year);
console.log("Hãng xe :",vehicle1.company);
console.log("------------------------");
console.log("Thông tin xe thứ hai là :");
console.log("Tên xe :",vehicle2.name);
console.log("Năm sản xuất :",vehicle2.year);
console.log("Hãng xe :",vehicle2.company);








