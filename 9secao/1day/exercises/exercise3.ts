// Exercício 3: Vamos mudar um pouco nosso contexto para um sistema de vendas de uma lanchonete. Crie uma classe que represente uma pessoa cliente da lanchonete, uma classe que represente um pedido e uma que represente um item do pedido.

// A pessoa cliente deverá conter o nome;
// O item do pedido deve conter o nome do pedido (ex. “Batatas fritas”; “Açaí”) e o preço;
// O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: “cartão”, “dinheiro”) e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.

export class Client {
  private _nome: string;

  constructor(n: string) {
    this._nome = n;
  }

  get nome() {
    return this._nome;
  }

  set nome(value: string) {
    if (value.length < 3) throw new Error('O nome deve ter pelo menos 3 caracteres');
    this._nome = value;
  }
}

export class OrderedItem {
  private _nomePedido: string;
  private _preco: number;

  constructor(n: string, p: number) {
    this._nomePedido = n;
    this._preco = p;
  }

  get nomePedido() {
    return this._nomePedido;
  }

  set nomePedido(value: string) {
    if (value.length < 4) throw new Error('Nome pedido deve ter mais que 3 caracteres');
    this._nomePedido = value;
  }

  get preco() {
    return this._preco;
  }

  set preco(value: number) {
    if (value <= 0) throw new Error('Valor deve ser maior que zero');
    this._preco = value;
  }
}

export class Order {
  private _cliente: Client;
  private _itens: OrderedItem[] = [];
  private _formaPgto: string;
  private _desconto: number;

  constructor(c: Client, i: OrderedItem[], p: string, d: number) {
    this._cliente = c;
    this._itens = i;
    this._formaPgto = p;
    this._desconto = d;
  }

  get cliente() {
    return this._cliente;
  }

  set cliente(value: Client) {
    this._cliente = value;
  }

  get itens() {
    return this._itens;
  }

  set itens(value: OrderedItem[]) {
    if (value.length === 0) throw new Error('O pedido deve ter pelo meno um item.');
    this._itens = value;
  }

  get formaPagamento() {
    return this._formaPgto;
  }

  set formaPgto(value: string) {
    this._formaPgto = value;
  }

  get descconto() {
    return this._desconto;
  }

  set desconto(value: number) {
    if (value < 0) throw new Error('O desconto deve ser maior que zero.');
    this._desconto = value;
  }

  // Exercício 4: Agora vamos adicionar às nossas classes do exercício anterior os comportamentos. A classe que representa o pedido deverá ter dois métodos: um que calcula o total do pedido e outro que calcula o total aplicando o valor de desconto.

  totalPedido(): number {
    const values = this._itens.map((item) => item.preco);
    const sum = values.reduce((acc, value) => acc + value, 0);
    return sum;
  }

  aplicaDesconto(): number {
    const total = this.totalPedido();
    return total * (1 - this._desconto);
  }
}