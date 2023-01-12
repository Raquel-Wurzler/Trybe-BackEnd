"use strict";
// Exercício 2 : Refatore nossa classe de pessoa estudante (exercício de ontem) para que ela herde da nossa classe pessoa.
/*
`Class`: Student
`Extends`: Person
`Attributes`:
    - enrollment: matrícula da pessoa estudante
    - examsGrades: notas de provas
    - assignmentsGrades: notas de trabalhos
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome e data de nascimento e
      preencher a matrícula automaticamente
    - sumGrades: retorna a soma das notas da pessoa estudante
    - sumAverageGrade: retorna a média das notas da pessoa estudante
    - generateEnrollment: retorna uma string única gerada
      como matrícula para a pessoa estudante
`Validations`:
    - A matrícula deve possuir no mínimo 16 caracteres
    - A pessoa estudante deve possuir no máximo 4 notas de provas
    - A pessoa estudante deve possuir no máximo 2 notas de trabalhos
*/
Object.defineProperty(exports, "__esModule", { value: true });
const exercise1_1 = require("./exercise1");
class Student extends exercise1_1.Person {
    constructor(name, birthDate) {
        super(name, birthDate);
        this._notasProva = [];
        this._notasTrabalho = [];
        this._matricula = this.generateEnrollment();
        this._notasProva = [];
        this._notasTrabalho = [];
    }
    get matricula() {
        return this._matricula;
    }
    set matricula(value) {
        if (value.length < 16)
            throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
        this._matricula = value;
    }
    // get nome() {
    //   return this.name;
    // }
    // set nome(value: string) {
    //   if (value.length < 4) {
    //     throw new Error('O nome deve ter pelo menos 3 caracteres')
    //   }
    //   this.name = value;
    // }
    get notasProvas() {
        return this._notasProva;
    }
    set notasProvas(value) {
        if (value.length !== 4) {
            throw new Error('O número de notas deve ser 4');
        }
        this._notasProva = value;
    }
    get notasTrabalhos() {
        return this._notasTrabalho;
    }
    set notasTrabalhos(value) {
        if (value.length !== 2) {
            throw new Error('O número de notas deve ser 2');
        }
        this._notasTrabalho = value;
    }
    sumGrades() {
        const notas = [...this._notasProva, ...this._notasTrabalho];
        const sum = notas.reduce((acc, nota) => acc + nota, 0);
        return sum;
    }
    sumAverageGrade() {
        const sum = this.sumGrades();
        const lengthNotas = this.notasProvas.length + this.notasTrabalhos.length;
        return (sum / lengthNotas).toFixed(1);
    }
    generateEnrollment() {
        const randomNumber = String(Math.round(Math.random() * 100000));
        const date = String(new Date().getFullYear());
        const initial = 'matricula00';
        return date + initial + randomNumber;
    }
}
exports.default = Student;
