abstract class Job {
    type : string
    constructor(type:string){
        this.type = type
    }
    printType(){
        return this.type
    }
    abstract  calculateSalary():void
}
class PartimeJob extends Job {
    workingHour: number
    constructor(type: string, workingHour: number){
        super(type)
        this.workingHour = workingHour;
    }
    calculateSalary(): string {
        return `${this.workingHour * 30000}`;
         
    }
}
class FulltimeJob extends Job {
    calculateSalary(): string {
        return `Lương mặc định : 10.000.000`
    }
}

let job2 = new PartimeJob ("loại 1", 90);
console.log(job2.printType());
console.log(job2.calculateSalary());

let job3 = new FulltimeJob ("loại 2");
console.log(job3.calculateSalary());
 

 