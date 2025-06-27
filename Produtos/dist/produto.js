"use strict";
//crie uma classe de produtos com atributos: codigo, nome, preco
//crie os metodos set: para inserir valores no atributos
//crie os metodos get: para visualizar os valores do atributo
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor(codigo, nome, preco) {
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
    }
    setCodigo(codigo) {
        this.codigo = codigo;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setPreco(preco) {
        this.preco = preco;
    }
    getCodigo() {
        return this.codigo;
    }
    getNome() {
        return this.nome;
    }
    getPreco() {
        return this.preco;
    }
}
exports.Produto = Produto;
