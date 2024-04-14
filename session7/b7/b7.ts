interface Student {
    id: number;
    name: string;
    class: string;
}
const students1: Student[] = [
    { id: 1, name: 'Nguyễn Văn A', class: 'A' },
    { id: 2, name: 'Nguyễn Thị B', class: 'B' },
    { id: 3, name: 'Lò Văn Tý', class: 'A' },
    { id: 4, name: 'Lý Văn Lâm', class: 'A' },
];
function getStudentsByClass(students1: Student[], className: string): Student[] {
return students1.filter(student => student.class === className);
}

const studentsInClassA = getStudentsByClass(students1, 'A');
console.log(studentsInClassA);