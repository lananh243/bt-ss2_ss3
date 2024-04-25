interface ChangeSpeed {
    speedUp(amount: number):void;
    slowDown(amount: number):void;
    stop():void;
}
class Vehicle11  implements ChangeSpeed {
    private speed: number
    constructor(speed:number){
        this.speed = speed;
    }
    speedUp(amount: number): string{
        return `${this.speed += amount}`;
    };
    slowDown(amount:number): string{
        return `${this.speed -= amount}`;
    };
    stop(){
        return `${this.speed = 0}`;
    };
}
let vehicle = new Vehicle11(2);
// console.log(vehicle.speed);
console.log("Tăng tốc:",vehicle.speedUp(9));
console.log("Giảm tốc:",vehicle.slowDown(3));
console.log("Dừng:",vehicle.stop());


