// Exercício 4: Crie uma classe cujos objetos representem uma disciplina lecionada na escola.
/*
`Class`: Subject
`Attributes`:
    - name: nome da disciplina
`Methods`:
    - Getters/Setters
    - constructor: deve receber como parâmetro nome
`Validations`:
    - O nome tem que possuir no mínimo 3 caracteres
*/

export default class Subject {
  constructor(private _name: string) {}

  get name() {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) throw new Error('Nome deve ter no mínimo 3 caracteres');
    this._name = value;
  }
}