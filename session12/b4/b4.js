"use strict";
class Vehicle2 {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount) {
        this.speed -= amount;
    }
    speedUp(amount) {
        this.speed += amount;
    }
    showSpeed() {
        console.log(`Tốc độ hiện tại của ${this.name} là ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle2 {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
}
let bicycle = new Bicycle("xe địa hình", 30, 2, 5);
bicycle.speedUp(50);
bicycle.showSpeed();
bicycle.slowDown(20);
bicycle.showSpeed();
