"use strict";
class Student11 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.enrolledCourses = [];
    }
    enroll(course) {
        this.enrolledCourses.push(course);
    }
}
class Instructor {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    createCourse(title) {
        return new Course(title, this);
    }
    createLesson(title) {
        return new Lesson(title);
    }
    createAssignment(title) {
        return new Assignment(title);
    }
    createAssessment(title) {
        return new Assessment(title);
    }
}
class Course {
    constructor(title, instructor) {
        this.title = title;
        this.instructor = instructor;
        this.lessons = [];
        this.assessments = [];
    }
}
class Lesson {
    constructor(title) {
        this.title = title;
        this.assignments = [];
    }
}
class Assignment {
    constructor(title) {
        this.title = title;
    }
}
class Assessment {
    constructor(title) {
        this.title = title;
    }
}
// Tạo thực thể và kiểm tra
const instructor = new Instructor(1, "Nguyễn Văn Lương");
const student11 = new Student11(1, "Lê Nhi Đản");
const course = instructor.createCourse("Khóa công nghệ");
const lesson1 = instructor.createLesson("Bài 1,2,3");
const lesson2 = instructor.createLesson("Bài 3,4,5");
const assignment1 = instructor.createAssignment("Bài 1");
const assignment2 = instructor.createAssignment("Bài 2");
const assessment1 = instructor.createAssessment("Bài 3");
const assessment2 = instructor.createAssessment("Bài 4");
course.lessons.push(lesson1, lesson2);
course.assessments.push(assessment1, assessment2);
lesson1.assignments.push(assignment1);
lesson2.assignments.push(assignment2);
student11.enroll(course);
console.log(student11.enrolledCourses);
