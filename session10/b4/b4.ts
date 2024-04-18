class Vehicle1 {
    name: string
    protected year: string
    private company: string
    readonly id: number
    constructor(name: string, year: string, company: string, id: number){
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
}
let vehic = new Vehicle1 ("nam", "2024", "Truyền thông", 1);
// vehic.id = 4;
console.log(vehic);
