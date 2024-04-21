class Employee1 {
    name : string
    protected company : string
    private phone : string
    constructor(name :string, company: string, phone: string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    getPhone(){
        return this.phone
    }
    printInfo():void {
        console.log(`Tên nhân viên: ${this.name}`);
        console.log(`Tên công ty: ${this.company}`);
        console.log(`Số điện thoại: ${this.phone}`);  
    }
   
}
class Manager extends Employee1 {
    teamSize: number
    constructor(name: string, company: string, phone: string, teamSize:number){
        super(name,company,phone)
        this.teamSize = teamSize;
    }
    printInfo():void {
        console.log(`Tên nhân viên: ${this.name}`);
        console.log(`Tên công ty: ${this.company}`);
        console.log(`Số điện thoại: ${this.getPhone()}`);  
        console.log(`Kích thước: ${this.teamSize}`);
        
    }
}
let manager = new Manager ("bang", "công nghệ", "026382472647", 30);
manager.printInfo();