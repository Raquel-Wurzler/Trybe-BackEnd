"use strict";
// Exercício 5: Escreva uma classe Data cuja instância represente uma data. Esta classe deverá conter três atributos: o dia, o mês e o ano.
Object.defineProperty(exports, "__esModule", { value: true });
class Data {
    constructor(d, m, a) {
        if (new Date(a, m, d).getDate() !== d) {
            this._dia = 1;
            this._mes = 1;
            this._ano = 1900;
        }
        else {
            this._dia = d;
            this._mes = m;
            this._ano = a;
        }
    }
    get dia() {
        return this._dia;
    }
    set dia(value) {
        if (value < 0 && value > 30)
            throw new Error('Dia inválido');
        this._dia = value;
    }
    get mes() {
        return this._mes;
    }
    set mes(value) {
        if (value < 0 && value > 12)
            throw new Error('Mês inválido');
        this._mes = value;
    }
    get ano() {
        return this._ano;
    }
    set ano(value) {
        if (value < 1000)
            throw new Error('Ano inválido');
        this._ano = value;
    }
    getMonthName() {
        const mes = this._mes;
        if (mes === 1)
            return 'janeiro';
        if (mes === 2)
            return 'fevereiro';
        if (mes === 3)
            return 'março';
        if (mes === 4)
            return 'abril';
        if (mes === 5)
            return 'maio';
        if (mes === 6)
            return 'junho';
        if (mes === 7)
            return 'julho';
        if (mes === 8)
            return 'agosto';
        if (mes === 9)
            return 'setembro';
        if (mes === 10)
            return 'outubro';
        if (mes === 11)
            return 'novembro';
        if (mes === 12)
            return 'dezembro';
    }
    isLeapYear() {
        const ano = this._ano;
        if (ano % 4 === 0)
            true;
        return false;
    }
    compare(data) {
        const dataAtual = new Date(this._ano, this._mes, this._dia);
        const novaData = new Date(data._ano, data._mes, data._dia);
        if (dataAtual > novaData)
            return 1;
        if (dataAtual < novaData)
            return -1;
        return 0;
    }
}
exports.default = Data;
