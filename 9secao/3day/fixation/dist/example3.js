"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showIdentification = exports.LegalPerson = exports.PhysicalPerson = void 0;
class PhysicalPerson {
    constructor(name, cpf) {
        this._id = PhysicalPerson.newId();
        this._name = name;
        this._cpf = cpf;
    }
    static newId() { return this.lastId++; }
    get id() { return this._id; }
    get name() { return this._name; }
    get cpf() { return this._cpf; }
    showIdentification() { console.log(this.id, this._cpf); }
}
exports.PhysicalPerson = PhysicalPerson;
PhysicalPerson.lastId = 0;
class LegalPerson {
    constructor(name, cnpj) {
        this._id = LegalPerson.newId();
        this._name = name;
        this._cnpj = cnpj;
    }
    static newId() { return this.lastId++; }
    get id() { return this._id; }
    get name() { return this._name; }
    get cnpj() { return this._cnpj; }
    showIdentification() { console.log(this.id, this._cnpj); }
}
exports.LegalPerson = LegalPerson;
LegalPerson.lastId = 0;
const showIdentification = (person) => {
    person.showIdentification();
};
exports.showIdentification = showIdentification;
/*
Saída:
0 123456789
1 987654321
0 834729384723
*/
