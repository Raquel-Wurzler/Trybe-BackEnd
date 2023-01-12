"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const exercise1_1 = require("./exercise1");
const exercise2_1 = __importDefault(require("./exercise2"));
const exercise4_1 = __importDefault(require("./exercise4"));
const exercise5_1 = __importDefault(require("./exercise5"));
console.log('>>> Starting the exercises <<<');
// Exercício 1
const pessoa1 = new exercise1_1.Person('Mauro', new Date(1988, 4, 7));
const pessoa2 = new exercise1_1.Person('Raquel', new Date(1991, 3, 9));
console.log('Pessoa 1:', pessoa1);
console.log('Pessoa 2:', pessoa2);
try {
    pessoa1.name = 'Junior';
    pessoa1.birthDate = new Date(1990, 8, 21);
    console.log('Pessoa 1:', pessoa1);
}
catch (error) {
    console.log(error);
}
try {
    pessoa2.name = 'Lia';
    pessoa1.birthDate = new Date(2000, 5, 15);
    console.log('Pessoa 2:', pessoa2);
}
catch (error) {
    console.log(error);
}
// Exercício 2
const estudante1 = new exercise2_1.default('Bartolomeu', new Date(1999, 2, 5));
const estudante2 = new exercise2_1.default('Alfredo', new Date(1999, 2, 5));
const estudante3 = new exercise2_1.default('Frederico', new Date(1999, 2, 5));
const estudante4 = new exercise2_1.default('Pantera', new Date(1999, 2, 5));
const estudante5 = new exercise2_1.default('Pandora', new Date(1999, 2, 5));
estudante1.notasProvas = [9, 8, 7, 9];
estudante2.notasTrabalhos = [9, 8];
estudante3.matricula = '1234567890123456';
estudante4.name = 'Penélope';
console.log(estudante1);
console.log(estudante2);
console.log(estudante3);
console.log(estudante4);
console.log(estudante5);
// Exercício 4
const matematica = new exercise4_1.default('Matemática');
const historia = new exercise4_1.default('História');
const filosofia = new exercise4_1.default('Filosofia');
console.log(matematica);
console.log(historia);
console.log(filosofia);
// Exercício 5
const profMat = new exercise5_1.default('Sonia', new Date(1980, 5, 20), 5000, matematica);
const profHis = new exercise5_1.default('Rodrigo', new Date(1981, 6, 5), 5000, historia);
const profFil = new exercise5_1.default('Leandro', new Date(1983, 10, 10), 5000, filosofia);
console.log(profMat);
console.log(profHis);
console.log(profFil);
