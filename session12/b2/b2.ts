class Employee2 {
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
class Manager1 extends Employee2 {
    teamSize: number
    constructor(name: string, company: string, phone: string, teamSize:number){
        super(name,company,phone)
        this.teamSize = teamSize;
    }
    printInfo():string {
        return `Tên nhân viên: ${this.name} ; Tên công ty: ${this.company} ; Số điện thoại: ${this.getPhone()} ; Kích thước: ${this.teamSize}`  
    }
}
let manager1 = new Manager1 ("nam", "điện tử", "5664565", 80);
console.log(manager1.printInfo());
 