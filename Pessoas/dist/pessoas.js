"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoas = void 0;
class Pessoas {
    constructor(nome, idade, rg) {
        this.nome = nome;
        this.idade = idade;
        this.rg = rg;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    setRg(rg) {
        this.rg = rg;
    }
    getNome() {
        return this.nome;
    }
    getIdade() {
        return this.idade;
    }
    getRG() {
        return this.rg;
    }
}
exports.Pessoas = Pessoas;
//retornar com console.log
