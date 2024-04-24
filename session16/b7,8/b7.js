"use strict";
class Student4 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
}
class Classroom {
    constructor() {
        this.students = [];
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    showStudents() {
        for (const student of this.students) {
            console.log("Id:", student.getId());
            console.log("Name:", student.getName());
        }
    }
    removeStudent(studentId, allStds) {
        let studentIndex = this.students.findIndex((student) => student.getId() === studentId);
        if (studentIndex !== -1) {
            let student = this.students.splice(studentIndex, 1)[0];
            allStds.push(student);
        }
        else {
            console.log("Không tồn tại sinh viên trong lớp");
        }
    }
    editStudent(studentId, newName) {
        let student = this.students.find((student) => student.getId() === studentId);
        if (student) {
            student.setName(newName);
        }
        else {
            console.log("Không tồn tại sinh viên trong lớp");
        }
    }
}
let allStds = [
    new Student4(1, "mai"),
    new Student4(2, "lan"),
    new Student4(3, "phan"),
    new Student4(4, "bích"),
    new Student4(5, "phượng"),
    new Student4(6, "trương")
];
let classroom1 = new Classroom();
let classroom2 = new Classroom();
for (let i = 0; i < 3; i++) {
    classroom1.addStudent(allStds[i]);
}
for (let i = 3; i < 6; i++) {
    classroom2.addStudent(allStds[i]);
}
console.log("Classroom 1:");
classroom1.showStudents();
console.log("Classroom 2:");
classroom2.showStudents();
classroom1.removeStudent(1, allStds);
console.log("Sau khi xóa sinh viên:");
classroom1.showStudents();
classroom1.editStudent(1, "nhan");
console.log("Chỉnh sửa thông tin sinh viên:");
classroom1.showStudents();
