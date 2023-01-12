"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Criação de classe
class Person {
    // Métodos
    // Método construtor
    constructor(n, h, w) {
        console.log(`Creating person ${n}`);
        this.name = n;
        this.height = h;
        this.weight = w;
    }
    // Outro método
    sleep() {
        console.log(`${this.name}: zzzzzzz`);
    }
}
exports.default = Person;
