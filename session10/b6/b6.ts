class Song {
    readonly id: number
    private name: string
    private length: string
    constructor(id: number, name: string, length: string){
        this.id = id;
        this.name = name;
        this.length = length;
    }
    getProperties(){
        return this.name
               this.length
    }
    setProperties(newName:string, newLength: string){
        this.name = newName;
        this.length = newLength;
    }
}
let song = new Song (12, "Mưa", "2:30");
song.setProperties("Em gái mưa", "3:10");
console.log(song);
