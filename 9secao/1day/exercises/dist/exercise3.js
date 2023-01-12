"use strict";
// Exercício 3: Vamos mudar um pouco nosso contexto para um sistema de vendas de uma lanchonete. Crie uma classe que represente uma pessoa cliente da lanchonete, uma classe que represente um pedido e uma que represente um item do pedido.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.OrderedItem = exports.Client = void 0;
// A pessoa cliente deverá conter o nome;
// O item do pedido deve conter o nome do pedido (ex. “Batatas fritas”; “Açaí”) e o preço;
// O pedido deve conter o cliente, os itens consumidos, a forma de pagamento (ex: “cartão”, “dinheiro”) e o percentual em decimal de desconto para o pedido (ex: 0.1 para 10%, 0.3 para 30%), o pedido pode ou não possuir desconto.
class Client {
    constructor(n) {
        this._nome = n;
    }
    get nome() {
        return this._nome;
    }
    set nome(value) {
        if (value.length < 3)
            throw new Error('O nome deve ter pelo menos 3 caracteres');
        this._nome = value;
    }
}
exports.Client = Client;
class OrderedItem {
    constructor(n, p) {
        this._nomePedido = n;
        this._preco = p;
    }
    get nomePedido() {
        return this._nomePedido;
    }
    set nomePedido(value) {
        if (value.length < 4)
            throw new Error('Nome pedido deve ter mais que 3 caracteres');
        this._nomePedido = value;
    }
    get preco() {
        return this._preco;
    }
    set preco(value) {
        if (value <= 0)
            throw new Error('Valor deve ser maior que zero');
        this._preco = value;
    }
}
exports.OrderedItem = OrderedItem;
class Order {
    constructor(c, i, p, d) {
        this._itens = [];
        this._cliente = c;
        this._itens = i;
        this._formaPgto = p;
        this._desconto = d;
    }
    get cliente() {
        return this._cliente;
    }
    set cliente(value) {
        this._cliente = value;
    }
    get itens() {
        return this._itens;
    }
    set itens(value) {
        if (value.length === 0)
            throw new Error('O pedido deve ter pelo meno um item.');
        this._itens = value;
    }
    get formaPagamento() {
        return this._formaPgto;
    }
    set formaPgto(value) {
        this._formaPgto = value;
    }
    get descconto() {
        return this._desconto;
    }
    set desconto(value) {
        if (value < 0)
            throw new Error('O desconto deve ser maior que zero.');
        this._desconto = value;
    }
    // Exercício 4: Agora vamos adicionar às nossas classes do exercício anterior os comportamentos. A classe que representa o pedido deverá ter dois métodos: um que calcula o total do pedido e outro que calcula o total aplicando o valor de desconto.
    totalPedido() {
        const values = this._itens.map((item) => item.preco);
        const sum = values.reduce((acc, value) => acc + value, 0);
        return sum;
    }
    aplicaDesconto() {
        const total = this.totalPedido();
        return total * (1 - this._desconto);
    }
}
exports.Order = Order;
