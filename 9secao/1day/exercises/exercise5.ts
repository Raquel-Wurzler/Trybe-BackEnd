// Exercício 5: Escreva uma classe Data cuja instância represente uma data. Esta classe deverá conter três atributos: o dia, o mês e o ano.

export default class Data {
  private _dia: number;
  private _mes: number;
  private _ano: number;

  constructor(d: number, m: number, a: number) {
    if (new Date(a, m, d).getDate() !== d) {
      this._dia = 1;
      this._mes = 1;
      this._ano = 1900;
    } else {
      this._dia = d;
      this._mes = m;
      this._ano = a;
    }
  }

  get dia() {
    return this._dia;
  }

  set dia(value: number) {
    if (value < 0 && value > 30) throw new Error('Dia inválido');
    this._dia = value;
  }

  get mes() {
    return this._mes;
  }

  set mes(value: number) {
    if (value < 0 && value > 12) throw new Error('Mês inválido');
    this._mes = value;
  }

  get ano() {
    return this._ano;
  }

  set ano(value: number) {
    if (value < 1000) throw new Error('Ano inválido');
    this._ano = value;
  }

  // Exercício 6: Vamos adicionar à nossa classe de Data do exercício anterior os comportamentos. Essa classe deverá conter os seguintes métodos:

  // constructor: deverá verificar se a data passada por parâmetro é uma data válida, caso não esteja deverá criar uma data com valor “01/01/1900”;
  // getMonthName: retorna o mês da data por extenso;
  // isLeapYear: retorna verdadeiro se o ano é bissexto e falso caso não seja;
  // compare: recebe como parâmetro um outro objeto da classe Data, compara com a data corrente e retorna:
  // 0 se as datas forem iguais;
  // 1 se a data corrente for posterior à data do parâmetro;
  // -1 se a data do parâmetro for posterior à data corrente.

  getMonthName() {
    const mes = this._mes;
    if (mes === 1) return 'janeiro';
    if (mes === 2) return 'fevereiro';
    if (mes === 3) return 'março';
    if (mes === 4) return 'abril';
    if (mes === 5) return 'maio';
    if (mes === 6) return 'junho';
    if (mes === 7) return 'julho';
    if (mes === 8) return 'agosto';
    if (mes === 9) return 'setembro';
    if (mes === 10) return 'outubro';
    if (mes === 11) return 'novembro';
    if (mes === 12) return 'dezembro';
  }

  isLeapYear() {
    const ano = this._ano;
    if (ano % 4 === 0) true;
    return false;
  }

  compare(data: Data) {
    const dataAtual = new Date(this._ano, this._mes, this._dia);
    const novaData = new Date(data._ano, data._mes, data._dia);
    if (dataAtual > novaData) return 1;
    if (dataAtual < novaData) return -1;
    return 0;
  }
}