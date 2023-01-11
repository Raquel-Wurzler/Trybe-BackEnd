"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Criação de classe
class TV {
    // Métodos
    // Método construtor
    constructor(b, s, r, c) {
        console.log(`Creating TV ${b}`);
        this._brand = b;
        this._size = s;
        this._resolution = r;
        this._connections = c;
    }
    // Método construtor
    turnOn() {
        console.log(`A nova TV é da marca ${this._brand}, tamanho de ${this._size}, resolução ${this._resolution} e pode se conectar com ${this._connections}`);
    }
    getBrand() {
        return this._brand;
    }
    getSize() {
        return this._size;
    }
    getResolution() {
        return this._resolution;
    }
    getConnections() {
        return this._connections;
    }
    get connectedTo() {
        return this._connectedTo;
    }
    set connectedTo(newValue) {
        if (!newValue || this._connections.includes(newValue)) {
            this._connectedTo = newValue;
            console.log(this._connectedTo);
        }
        else {
            console.log(`${newValue} it's not an option`);
        }
    }
}
exports.default = TV;
