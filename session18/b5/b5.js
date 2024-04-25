"use strict";
class Vehicle11 {
    constructor(speed) {
        this.speed = speed;
    }
    speedUp(amount) {
        return `${this.speed += amount}`;
    }
    ;
    slowDown(amount) {
        return `${this.speed -= amount}`;
    }
    ;
    stop() {
        return `${this.speed = 0}`;
    }
    ;
}
let vehicle = new Vehicle11(2);
// console.log(vehicle.speed);
console.log("Tăng tốc:", vehicle.speedUp(9));
console.log("Giảm tốc:", vehicle.slowDown(3));
console.log("Dừng:", vehicle.stop());
