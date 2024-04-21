class Vehicle2 {
    protected name: string;
    protected speed: number;
    protected id: number;

    constructor(name: string, speed: number, id: number) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }

    slowDown(amount: number): void {
        this.speed -= amount;
    }

    speedUp(amount: number): void {
        this.speed += amount;
    }

    showSpeed(): void {
        console.log(`Tốc độ hiện tại của ${this.name} là ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle2 {
    private gear : number
    constructor(name: string, speed: number, id: number, gear: number){
        super(name,speed,id)
        this.gear = gear;
    }
}
let bicycle = new Bicycle ("xe địa hình", 30, 2, 5);
bicycle.speedUp(50);
bicycle.showSpeed();

bicycle.slowDown(20);
bicycle.showSpeed();
