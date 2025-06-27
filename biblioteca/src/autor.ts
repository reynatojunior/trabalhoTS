export class Autor {
    constructor(
        private nome: string,
        private dataNascimento: Date,
        private nacionalidade: string
    ) {}

    // Método para obter informações formatadas do autor
    obterInformacoes(): string {
        return `Autor: ${this.nome}\n` +
               `Data de Nascimento: ${this.dataNascimento.toLocaleDateString()}\n` +
               `Nacionalidade: ${this.nacionalidade}`;
    }

    // Getters
    getNome(): string {
        return this.nome;
    }

    getDataNascimento(): Date {
        return this.dataNascimento;
    }

    getNacionalidade(): string {
        return this.nacionalidade;
    }
}