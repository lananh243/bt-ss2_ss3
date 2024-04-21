class Book {
    private title: string
    private author: string
    constructor(title: string, author: string){
        this.title = title;
        this.author = author;
    }
}
class Library {
    books: string[]
    constructor(books: string[]){
        this.books = books;
    }
    // phương thức để thêm
    getAll(){
        return this.books
    }
    setAll(newBooks: string[]){
        this.books = newBooks
    }
}
let library = new Library (["Sóng", "Mưa", "Gió"])