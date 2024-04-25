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
// tao mang
let studentAll:Student4[]=[];

class Classroom {
    private students: Student4[] = [];

    constructor() {
        this.students = [];
    }

    addStudent() {
        // this.students.push(student);
    // thêm học sinh 
    for (let i = 0; i < studentAll.length; i++) {
        this.students.push(studentAll[i]);
        
    }
    // sau khi them xong thi xoa het
    studentAll.length=0;
    }

    showStudents(): void {
        for (const student of this.students) {
            console.log("Id:", student.getId());
            console.log("Name:", student.getName());
        }
    }

    removeStudent(studentId: number): void {
        let studentIndex = this.students.findIndex((student) => student.getId() === studentId);
        if (studentIndex !== -1) {
            let student = this.students[studentIndex];
            
            this.students.splice(studentIndex, 1);
            
            console.log("Sinh viên được xóa là: ", student);
        } else {
            console.log("Không tìm thấy sinh viên có studentId = ", studentId);
        }
    }
    getStd(){
        console.log(this.students);
        
    }
    editStudent(studentId: number, newName: string): void {
        let student = this.students.find((student) => student.getId() === studentId);
        if (student) {
            student.setName(newName);
            console.log("Sinh viên được chỉnh sửa thành công:", student);
        } else {
            console.log("Không tồn tại sinh viên trong lớp");
        }
    }
}
    // tạo thực thể student
    let studentAll2: Student4[] = [
        new Student4(1, "mai"),
        new Student4(2, "lan"),
        new Student4(3, "phan"),
    ];
    studentAll=[...studentAll2];
    // tạo thực thể class
    let classroom1 = new Classroom();
    classroom1.addStudent();
    console.log("Classroom 1:");
    
    classroom1.removeStudent(1); // Xóa sinh viên
    classroom1.showStudents();
    classroom1.editStudent(3, "Bình"); // Sửa thông tin
    classroom1.showStudents()
    let studentAll3: Student4[] = [
        new Student4(1, "mai"),
        new Student4(2, "lan"),
        new Student4(3, "phan"),
    ];
    studentAll=[...studentAll3];
    
    // tạo thực thể class
    let classroom2 = new Classroom();
    classroom2.addStudent();
    console.log("Classroom 2:");
    classroom2.removeStudent(3); // xóa sinh viên
    classroom2.showStudents();
    classroom2.editStudent(2, "Nga"); // sửa thông tin
    classroom2.showStudents();