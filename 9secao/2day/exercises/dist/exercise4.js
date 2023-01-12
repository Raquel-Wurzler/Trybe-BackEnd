"use strict";
// Exercício 4: Crie uma classe cujos objetos representem uma disciplina lecionada na escola.
/*
`Class`: Subject
`Attributes`:
    - name: nome da disciplina
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome
`Validations`:
    - O nome tem que possuir no mínimo 3 caracteres
*/
Object.defineProperty(exports, "__esModule", { value: true });
class Subject {
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 3)
            throw new Error('Nome deve ter no mínimo 3 caracteres');
        this._name = value;
    }
}
exports.default = Subject;
