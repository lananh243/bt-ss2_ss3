class Book2 {
    id: number
    title: string
    author: string
    stock: number
    status: boolean
    constructor(id:number, title:string, author:string, stock:number, status:boolean=true){
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}

class Member {
    id: number
    name: string
    contact: string
    books: Book2[]
    status: boolean
    constructor(id:number, name:string, contact: string, status:boolean=true){
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.books = [];
        this.status = status;
    }
}

class LendedBook {
    memberId: number
    bookId: number
    dueDate: number
    constructor(memberId:number, bookId:number, dueDate:number){
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}

class Library1 {
    books: Book2[]
    members: Member[]
    constructor(){
        this.books = [];
        this.members = [];
    }
    addBook(book: Book2):void{
        this.books.push(book);
    }
    showBooks():void {
        console.log("Sách trong thư viện");
        for (const book of this.books) {
            console.log("Id:", book.id);
            console.log("Tiêu đề:", book.title);
            console.log("Tác giả: ",book.author);
            console.log("Số lượng trong kho: ", book.stock);
            console.log("Trạng thái: ", book.status ? "Có sẵn" : "Đã mượn");
        }
    }
    registerMember(id: number, name: string, contact: string): void {
        const newMember = new Member(id, name, contact);
        this.members.push(newMember);
    }
    blockMember(id: number): void {
        const member = this.members.find(member => member.id === id);
        if (member) {
            member.status = false;
            console.log(`Thành viên ${member.name} đã bị chặn.`);
        } else {
            console.log(`Không tìm thấy thành viên với ID ${id}.`);
        }
    }

    showMembers(): void {
        console.log("Danh sách thành viên trong thư viện:");
        for (const member of this.members) {
            console.log("Id:", member.id);
            console.log("Tên:", member.name);
            console.log("Liên hệ: ", member.contact);
            console.log("Trạng thái: ", member.status ? "Hoạt động" : "Bị chặn");
        }
    }
}

let library1 = new Library1();

let book1 = new Book2(1, "văn học", "Mai Lân", 23);
let book2 = new Book2(2, "Cổ tích", "Lệ Biên", 20);

library1.addBook(book1);
library1.addBook(book2);
library1.showBooks();

library1.registerMember(1, "nam", "0876766677");
library1.registerMember(2, "kiên", "87655458");
library1.blockMember(2);
library1.showMembers();


