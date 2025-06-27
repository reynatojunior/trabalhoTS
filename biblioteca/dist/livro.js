"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(titulo, autor, dataPublicacao, paginas, preco) {
        this.titulo = titulo;
        this.autor = autor;
        this.dataPublicacao = dataPublicacao;
        this.paginas = paginas;
        this.preco = preco;
    }
    // Método para obter informações formatadas do livro
    obterInformacoes() {
        return `Livro: ${this.titulo}\n` +
            `Autor: ${this.autor.obterInformacoes()}\n` +
            `Data de Publicação: ${this.dataPublicacao.toLocaleDateString()}\n` +
            `Número de Páginas: ${this.paginas}\n` +
            `Preço: ${this.preco} R$`;
    }
    // Getters
    getTitulo() {
        return this.titulo;
    }
    getAutor() {
        return this.autor;
    }
    getDataPublicacao() {
        return this.dataPublicacao;
    }
    getPaginas() {
        return this.paginas;
    }
    getPreco() {
        return this.preco;
    }
}
exports.Livro = Livro;
