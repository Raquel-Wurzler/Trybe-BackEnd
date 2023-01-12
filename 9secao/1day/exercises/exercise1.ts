// Exercício 1: Vamos modelar algumas partes de um software de uma escola. Escreva uma classe cujos objetos representarão pessoas estudantes matriculadas em uma disciplina. Cada objeto dessa classe deve conter os seguintes dados: matrícula, nome, 4 notas de prova, 2 notas de trabalho.

// Exercício 2: Agora vamos adicionar à nossa classe de pessoa estudante os comportamentos. Para isso adicione dois métodos: um que calcula a soma das notas da pessoa estudante e outro que calcula a média das notas da pessoa estudante.

export default class Student {
  private _matricula: string;
  private _nome: string;
  private _notasProva: number[];
  private _notasTrabalho: number[];

  constructor(m: string, n: string) {
    this._matricula = m;
    this._nome = n;
    this._notasProva = [];
    this._notasTrabalho = [];
  }

  get matricula() {
    return this._matricula;
  }

  set matricula(value: string) {
    this._matricula = value;
  }

  get nome() {
    return this._nome;
  }

  set nome(value: string) {
    if (value.length < 4) {
      throw new Error('O nome deve ter pelo menos 3 caracteres')
    }
    this._nome = value;
  }

  get notasProvas() {
    return this._notasProva;
  }

  set notasProvas(value: number[]) {
    if (value.length !== 4) {
      throw new Error('O número de notas deve ser 4')
    } 
    this._notasProva = value;
  }

  get notasTrabalhos() {
    return this._notasTrabalho;
  }

  set notasTrabalhos(value: number[]) {
    if (value.length !== 2) {
      throw new Error('O número de notas deve ser 2')
    } 
    this._notasTrabalho = value;
  }

  somaNotas(notasProvas: number[], notasTrabalhos: number[]) {
    const sumNotasProvas = notasProvas.reduce((acc, nota) => acc + nota, 0);
    const sumNotasTrabalhos = notasTrabalhos.reduce((acc, nota) => acc + nota, 0);
    return sumNotasProvas + sumNotasTrabalhos;
  }

  mediaNotas(notasProvas: number[], notasTrabalhos: number[]) {
    const sum = this.somaNotas(notasProvas, notasTrabalhos);
    const lengthNotas = notasProvas.length + notasTrabalhos.length;
    return (sum / lengthNotas).toFixed(1);
  }
}