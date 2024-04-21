"use strict";
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}
class Library {
    constructor(books) {
        this.books = books;
    }
    // phương thức để thêm
    getAll() {
        return this.books;
    }
    setAll(newBooks) {
        this.books = newBooks;
    }
}
let library = new Library(["Sóng", "Mưa", "Gió"]);
