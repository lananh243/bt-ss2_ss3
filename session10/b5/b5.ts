class Department {
    readonly id: number
    private name: string
    private employees: string[];
    constructor(id:number, name:string, employees:string[]){
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    describe(): string {
        return `Id: ${this.id} ; Tên phòng ban: ${this.name}`
    }
}
let department = new Department (23, "Công nghệ", ["bích", "trang", "mai", "lan"]);
console.log(department.describe());
 