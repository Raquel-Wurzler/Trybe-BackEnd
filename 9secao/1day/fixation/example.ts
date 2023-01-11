// Criação de classe
export default class Person {
  // Atributos
  name: string;
  height: number;
  weight: number;

  // Métodos
  // Método construtor
  constructor(n: string, h: number, w: number) {
    console.log(`Creating person ${n}`);
    this.name = n;
    this.height = h;
    this.weight = w;
  }
  
  // Outro método
  sleep() {
    console.log(`${this.name}: zzzzzzz`);
  }
}
