class Student4 {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    setName(newName: string): void {
        this.name = newName;
    }
}

class Classroom {
    private students: Student4[] = [];

    constructor() {
        this.students = [];
    }

    addStudent(student: Student4): void {
        this.students.push(student);
    }

    showStudents(): void {
        for (const student of this.students) {
            console.log("Id:", student.getId());
            console.log("Name:", student.getName());
        }
    }

    removeStudent(studentId: number, allStds: Student4[]): void {
        let studentIndex = this.students.findIndex((student) => student.getId() === studentId);
        if (studentIndex !== -1) {
            let student = this.students.splice(studentIndex, 1)[0];
            allStds.push(student);
        } else {
            console.log("Không tồn tại sinh viên trong lớp");
        }
    }

    editStudent(studentId: number, newName: string): void {
        let student = this.students.find((student) => student.getId() === studentId);
        if (student) {
            student.setName(newName);
        } else {
            console.log("Không tồn tại sinh viên trong lớp");
        }
    }
}

let allStds: Student4[] = [
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