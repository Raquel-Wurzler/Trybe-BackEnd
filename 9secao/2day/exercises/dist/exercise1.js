"use strict";
// Exercício 1 : Crie uma nova classe cujos objetos representarão uma pessoa no nosso sistema.
/*
`Class`: Person
`Attributes`:
    - name: nome da pessoa
    - birthDate: data de nascimento da pessoa
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome e data de nascimento
`Validations`:
    - O nome deve ter no mínimo três caracteres
    - A data de nascimento não pode ser uma data no futuro
    - A pessoa não pode possuir mais de 120 anos
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(_name, _birthDate) {
        this._name = _name;
        this._birthDate = _birthDate;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 3)
            throw new Error('O nome deve ter no mínimo três caracteres');
        this._name = value;
    }
    get birthDate() {
        return this._birthDate;
    }
    set birthDate(value) {
        if (value > new Date())
            throw new Error('A data de nascimento não pode ser uma data no futuro');
        const initialDate = new Date(1903, 1, 1);
        if (value < initialDate)
            throw new Error('A pessoa não pode possuir mais de 120 anos');
        this._birthDate = value;
    }
}
exports.Person = Person;
