//crie uma classe de produtos com atributos: codigo, nome, preco
//crie os metodos set: para inserir valores no atributos
//crie os metodos get: para visualizar os valores do atributo

export class Produto {
    codigo: string;
    nome: string;
    preco: number;

    constructor(codigo: string, nome: string, preco: number) {
        this.codigo = codigo;
        this.nome = nome;
        this.preco = preco;
    }

    setCodigo(codigo: string) {
        this.codigo = codigo;
    }

    setNome(nome: string) {
        this.nome = nome;
    }

    setPreco(preco: number) {
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