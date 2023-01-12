import { Person } from "./exercise1";
import Student from "./exercise2";
import Subject from "./exercise4";
import Teacher from "./exercise5";

console.log('>>> Starting the exercises <<<');

// Exercício 1
const pessoa1 = new Person('Mauro', new Date(1988, 4, 7));
const pessoa2 = new Person('Raquel', new Date(1991, 3, 9));
console.log('Pessoa 1:', pessoa1);
console.log('Pessoa 2:', pessoa2);

try {
  pessoa1.name = 'Junior';
  pessoa1.birthDate = new Date(1990, 8, 21);
  console.log('Pessoa 1:', pessoa1);
} catch (error) {
  console.log(error);
}

try {
  pessoa2.name = 'Lia';
  pessoa1.birthDate = new Date(2000, 5, 15);
  console.log('Pessoa 2:', pessoa2);
} catch (error) {
  console.log(error);
}

// Exercício 2
const estudante1 = new Student('Bartolomeu', new Date(1999, 2, 5));
const estudante2 = new Student('Alfredo', new Date(1999, 2, 5));
const estudante3 = new Student('Frederico', new Date(1999, 2, 5));
const estudante4 = new Student('Pantera', new Date(1999, 2, 5));
const estudante5 = new Student('Pandora', new Date(1999, 2, 5));

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
const matematica = new Subject('Matemática');
const historia = new Subject('História');
const filosofia = new Subject('Filosofia');

console.log(matematica);
console.log(historia);
console.log(filosofia);

// Exercício 5
const profMat = new Teacher('Sonia', new Date(1980, 5, 20), 5000, matematica);
const profHis = new Teacher('Rodrigo', new Date(1981, 6, 5), 5000, historia);
const profFil = new Teacher('Leandro', new Date(1983, 10, 10), 5000, filosofia);

console.log(profMat);
console.log(profHis);
console.log(profFil);