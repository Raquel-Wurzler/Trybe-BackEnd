"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myMove = exports.Mammal = exports.Bird = exports.Animal = void 0;
class Animal {
    constructor(name) {
        this.name = name;
    }
    move() { console.log(`${this.name} está se movendo.`); }
}
exports.Animal = Animal;
class Bird extends Animal {
    move() { console.log(`${this.name} está voando.`); }
}
exports.Bird = Bird;
class Mammal extends Animal {
    move() { console.log(`${this.name} está andando.`); }
}
exports.Mammal = Mammal;
const myMove = (animal) => {
    animal.move();
};
exports.myMove = myMove;
