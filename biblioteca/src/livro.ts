import { Autor } from "./autor";
export class Livro {
    constructor(
        private titulo: string,
        private autor: Autor,
        private dataPublicacao: Date,
        private paginas: number,
        private preco: number
    )
    {}

    // Método para obter informações formatadas do livro
    obterInformacoes(): string {
        return `Livro: ${this.titulo}\n` +
               `Autor: ${this.autor.obterInformacoes()}\n` +
               `Data de Publicação: ${this.dataPublicacao.toLocaleDateString()}\n` +
               `Número de Páginas: ${this.paginas}\n` +
               `Preço: ${this.preco} R$`;
    }

    // Getters
    getTitulo(): string {
        return this.titulo;
    }

    getAutor(): Autor {
        return this.autor;
    }

    getDataPublicacao(): Date {
        return this.dataPublicacao;
    }

    getPaginas(): number {
        return this.paginas;
    }

    getPreco(): number {
        return this.preco;
    }
}