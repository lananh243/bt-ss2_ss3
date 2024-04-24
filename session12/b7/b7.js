"use strict";
class Account2 {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    // gửi tiền 
    deposit(money) {
        this.balance += money;
    }
    withdraw(money) {
        // trước khi rút phải kiểm tra xem tài khoản có đủ hay không
        if (money > this.balance) {
            console.log("Số tiền lớn hơn số tiền còn lại");
        }
        else {
            return this.balance -= money;
        }
    }
}
class SavingsAccount extends Account2 {
    constructor(accountNumber, balance, interestRate) {
        super(accountNumber, balance);
        this.interestRate = interestRate;
    }
    // phuong thuc tinh lai hang thang
    calculateInterest() {
        return this.balance += this.balance * this.interestRate / 100;
    }
}
let savingsAccount = new SavingsAccount(234444, 700000, 2);
console.log("Tiền lãi hàng tháng: ", savingsAccount.calculateInterest());
class CheckingAccount extends Account2 {
    constructor(accountNumber, balance, overdraftLimit) {
        super(accountNumber, balance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw1(money) {
        if (money > this.overdraftLimit) {
            console.log("Tiền quá mức cho phép");
        }
        else {
            if (money > this.balance) {
                console.log("Không được rút tiền");
            }
            else {
                //so tien con lai
                return this.balance -= money;
            }
        }
    }
}
let checkingAccount = new CheckingAccount(1234, 80000, 50000);
console.log(1111, checkingAccount.withdraw1(30000));
;
// checkingAccount.withdraw1(90000);
/*
100000; lai suat 1% 1thang
sau 1 thang: 100000+1000=101000;
sau 2 thang: 101000+1010=102010;
sau 3 thang: 102010+1020,1=103030,1
sau 4 thang: 103030,1 +1030,301=104060,401
 */
// let total=100000;
// for (let i = 0; i < 4; i++) {
//     total+=total/100
// }
// console.log(total);
