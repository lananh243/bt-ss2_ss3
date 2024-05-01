"use strict";
class Account11 {
    constructor(accountNumber, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.history = [];
    }
    deposit(amount) {
        this.balance += amount;
        this.history.push(`Gửi tiền ${amount}`);
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            this.history.push(`Rút tiền ${amount}`);
        }
        else {
            console.log("Số dư không đủ.");
        }
    }
    transfer(amount, account) {
        if (this.balance >= amount) {
            this.balance -= amount;
            account.balance += amount;
            this.history.push(`Chuyển tiền ${amount} đến tài khoản ${account.accountNumber}`);
            account.history.push(`Nhận ${amount} từ tài khoản ${this.accountNumber}`);
        }
        else {
            console.log("Số dư không đủ.");
        }
    }
    showHistory() {
        console.log(`Số tài khoản: ${this.accountNumber}`);
        console.log("Lịch sử giao dịch:");
        this.history.forEach((transaction, index) => {
            console.log(`${index + 1}. ${transaction}`);
        });
        console.log(`Số dư hiện tại: ${this.balance}`);
    }
}
class Transaction {
    constructor(id, type, amount, newBalance) {
        this.id = id;
        this.type = type;
        this.amount = amount;
        this.newBalance = newBalance;
    }
}
// Tạo hai tài khoản
const account1 = new Account11("A");
const account2 = new Account11("B");
// Gửi tiền vào account1
account1.deposit(100000);
console.log(`Số dư tài khoản ${account1.accountNumber}: ${account1.balance}`);
// Rút tiền từ account1
account1.withdraw(30000);
console.log(`Số dư tài khoản ${account1.accountNumber}: ${account1.balance}`);
// Chuyển tiền từ account1 sang account2
account1.transfer(10000, account2);
console.log(`Số dư tài khoản ${account1.accountNumber}: ${account1.balance}`);
console.log(`Số dư tài khoản ${account2.accountNumber}: ${account2.balance}`);
// Hiển thị lịch sử giao dịch của account1
account1.showHistory();
// Hiển thị lịch sử giao dịch của account2
account2.showHistory();
