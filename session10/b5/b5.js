"use strict";
class Department {
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    describe() {
        return `Id: ${this.id} ; Tên phòng ban: ${this.name}`;
    }
}
let department = new Department(23, "Công nghệ", ["bích", "trang", "mai", "lan"]);
console.log(department.describe());
