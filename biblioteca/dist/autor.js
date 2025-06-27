"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Autor = void 0;
class Autor {
    constructor(nome, dataNascimento, nacionalidade) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.nacionalidade = nacionalidade;
    }
    // Método para obter informações formatadas do autor
    obterInformacoes() {
        return `Autor: ${this.nome}\n` +
            `Data de Nascimento: ${this.dataNascimento.toLocaleDateString()}\n` +
            `Nacionalidade: ${this.nacionalidade}`;
    }
    // Getters
    getNome() {
        return this.nome;
    }
    getDataNascimento() {
        return this.dataNascimento;
    }
    getNacionalidade() {
        return this.nacionalidade;
    }
}
exports.Autor = Autor;
