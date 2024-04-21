"use strict";
// access modifiers - phạm vi truy cập
// 1. protected : chỉ đc truy cập ở bên trong class và subclass(class con - kế thừa)
class Account {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        this.name = newName;
    }
}
let account = new Account('nha');
account.setName("Phương");
console.log("Tên mới", account);
// 2. private : chỉ đc truy cập ở bên trong class bên ngoài ko truy cập đc
class Account1 {
    constructor(name) {
        this.name = name;
    }
    setName(newName) {
        return this.name = newName;
    }
}
class User extends Account1 {
    constructor(name, email) {
        super(name);
        this.email = email;
    }
}
let user = new User("bích nhài", "ntn@gmail.com");
user.setName("mono");
console.log("Tên mới", user);
