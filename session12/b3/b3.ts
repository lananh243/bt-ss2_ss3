class Person1 {
    name:string
    constructor(name:string){
        this.name = name
    }
    displayInfo():void{
        console.log(`Tên : ${this.name}`);  
    }
}
class Studen2 extends Person1 {
    id: number
    constructor(name:string,id:number){
        super(name)
        this.name = name;
        this.id = id;
    }
    displayInfo(): void {
        console.log(`Tên : ${this.name}`);
        console.log(`Id : ${this.id}`); 
    }
}
let student = new Studen2 ("mai linh", 1);
student.displayInfo();