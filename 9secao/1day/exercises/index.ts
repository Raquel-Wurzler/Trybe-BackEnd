import Student from "./exercise1";
import { Client, Order, OrderedItem } from "./exercise3";
import Data from "./exercise5";


console.log('>>> Starting the exercises <<<');

// Exercise 1
// console.log('--------- Exercise 1');
// const student1 = new Student('2023-01', 'Alfredo Frederico');
// console.log(student1);
// student1.nome = 'Alfredo Frederico Wurzler';
// try {
//   student1.notasProvas = [7, 7, 7, 7];
// } catch(error) {
//   console.error(error)
// }

// try {
//   student1.notasTrabalhos = [8, 8];
// } catch(error) {
//   console.error(error)
// }

// console.log(`Acessando informações do 1º aluno:
// matrícula: ${student1.matricula},
// nome: ${student1.nome},
// notas das provas: ${student1.notasProvas},
// notas dos trabalhos: ${student1.notasTrabalhos}`);

// testando erros
// try {
//   student1.notasProvas = [7, 7, 7, 7, 7];
// } catch(error) {
//   console.error(error)
// }

// try {
//   student1.notasTrabalhos = [8];
// } catch(error) {
//   console.error(error)
// }

// Exercise 2
// console.log('-------- Exercise 2');
// console.log(`Total soma notas: ${student1.somaNotas(student1.notasProvas, student1.notasTrabalhos)}`);

// console.log(`Média notas: ${student1.mediaNotas(student1.notasProvas, student1.notasTrabalhos)}`);

// Exercise 3
// console.log('-------- Exercise 3');
// const cliente = new Client('Bartolomeu');
// const coxinha = new OrderedItem('coxinha', 5);
// const picole = new OrderedItem('picolé', 3);
// const suco = new OrderedItem('suco de laranja', 7);
// const pedido = new Order(cliente, [coxinha, picole, suco], 'pix', 0.1);
// console.log(pedido);

// Exercise 4
// console.log(`Total: ${pedido.totalPedido()}`);
// console.log(`Total com desconto: ${pedido.aplicaDesconto()}`);

// Exercise 5 e 6
const newDate = new Data(9, 3, 1991);
console.log(newDate);
console.log(newDate.getMonthName());
console.log(newDate.isLeapYear());
console.log(newDate.compare(new Data(7, 4, 1988)));








