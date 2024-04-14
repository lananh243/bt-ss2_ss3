"use strict";
const students1 = [
    { id: 1, name: 'Nguyễn Văn A', class: 'A' },
    { id: 2, name: 'Nguyễn Thị B', class: 'B' },
    { id: 3, name: 'Lò Văn Tý', class: 'A' },
    { id: 4, name: 'Lý Văn Lâm', class: 'A' },
];
function getStudentsByClass(students1, className) {
    return students1.filter(student => student.class === className);
}
const studentsInClassA = getStudentsByClass(students1, 'A');
console.log(studentsInClassA);
