"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this.name = name;
        this.length = length;
    }
    getProperties() {
        return this.name;
        this.length;
    }
    setProperties(newName, newLength) {
        this.name = newName;
        this.length = newLength;
    }
}
let song = new Song(12, "Mưa", "2:30");
song.setProperties("Em gái mưa", "3:10");
console.log(song);
