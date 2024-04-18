class Student1 {
    id: number;
    age: number;
    email: string;
    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}

let students: Student1[] = [
    new Student1(1, 25, "nva@gmail.com"),
    new Student1(2, 20, "nvb@gmail.com"),
    new Student1(3, 18, "nvc@gmail.com"),
    new Student1(4, 21, "nvd@gmail.com")
];
for (const item of students) {
    console.log(`Id: ${item.id}, Age: ${item.age}, Email: ${item.email}` );
}