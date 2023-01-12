// Exercício 5: Crie uma classe cujos objetos representem uma pessoa professora.
/*
`Class`: Teacher
`Extends`: Person
`Implements`: Employee
`Attributes`:
    - subject: a disciplina lecionada pela pessoa professora
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome, data de nascimento, salário
      e a disciplina
`Validations`:
    - O registro deve possuir no mínimo 16 caracteres
    - O salário não pode ser negativo.
    - A data de admissão não pode ser no futuro
*/

import { Person } from "./exercise1";
import Employee from "./exercise3";
import Subject from "./exercise4";

export default class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration = String();
  private _admissionDate: Date;
  private _salary: number;

  constructor(name: string, birthDate: Date, salary: number, subject: Subject) {
    super(name, birthDate);

    this._subject = subject;
    this._salary = salary;
    this._admissionDate = new Date();
    this._registration = this.generateRegistration();
  }

  get subject() {
    return this._subject;
  }

  set subject(value: Subject) {
    this._subject = value;
  }

  get registration() {
    return this._registration;
  }
  
  set registration(value: string) {
    if (value.length < 16) throw new Error('O registro deve possuir no mínimo 16 caracteres');
    this._registration = value;
  }
  get admissionDate() {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value > new Date()) throw new Error('A data de admissão não pode ser no futuro');
    this._admissionDate = value;
  }

  get salary() {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) throw new Error('O salário não pode ser negativo');
    this._salary = value;
  }

  generateRegistration() {
    const randomNumber = String(Math.round(Math.random() * 100000));
    const date = String(new Date().getFullYear());
    const initial = 'matricula00'
    return date + initial + randomNumber;
  }
}
