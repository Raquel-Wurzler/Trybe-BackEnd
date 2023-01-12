"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesContract = exports.LegalPerson = exports.NaturalPerson = exports.Person = void 0;
class Person {
    constructor(name) {
        this._name = name;
    }
    get name() { return this._name; }
}
exports.Person = Person;
class NaturalPerson extends Person {
    constructor(name, cpf) {
        super(name);
        this._cpf = cpf;
    }
    get cpf() { return this._cpf; }
}
exports.NaturalPerson = NaturalPerson;
class LegalPerson extends Person {
    constructor(name, cnpj) {
        super(name);
        this._cnpj = cnpj;
    }
}
exports.LegalPerson = LegalPerson;
class SalesContract {
    constructor() {
        this._signatories = [];
        this._clauses = [];
    }
    get signatories() { return [...this._signatories]; }
    get clauses() { return [...this._clauses]; }
    get subject() { return "Sales"; }
    sign(signatory) { this._signatories.push(signatory); }
    addClause(clause) {
        if (this._signatories.length > 0)
            return;
        this._clauses.push(clause);
    }
    describe() {
        console.log('--------------------');
        console.log(`Contrato: ${this.subject}`);
        this.clauses.forEach((clause) => { console.log(`Cláusula: ${clause}`); });
        this.signatories.forEach((signatory) => { console.log(`Assinado por: ${signatory.name}`); });
        console.log('--------------------\n');
    }
}
exports.SalesContract = SalesContract;
/*
Saída:
--------------------
Contrato: Sales
--------------------

--------------------
Contrato: Sales
Cláusula: Foo
Cláusula: Bar
--------------------

--------------------
Contrato: Sales
Cláusula: Foo
Cláusula: Bar
Assinado por: Tony
Assinado por: Lilly
--------------------

--------------------
Contrato: Sales
Cláusula: Foo
Cláusula: Bar
Assinado por: Tony
Assinado por: Lilly
Assinado por: International Sales SA
--------------------
 */ 
