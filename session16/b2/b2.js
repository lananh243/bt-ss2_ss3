"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    printType() {
        return this.type;
    }
}
class PartimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return `${this.workingHour * 30000}`;
    }
}
class FulltimeJob extends Job {
    calculateSalary() {
        return `Lương mặc định : 10.000.000`;
    }
}
let job2 = new PartimeJob("loại 1", 90);
console.log(job2.printType());
console.log(job2.calculateSalary());
let job3 = new FulltimeJob("loại 2");
console.log(job3.calculateSalary());
