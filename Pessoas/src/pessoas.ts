export class Pessoas {
    nome: string;
    idade: number;
    rg: string;

    constructor(nome: string, idade: number, rg: string){
        this.nome = nome;
        this.idade = idade;
        this.rg = rg;
    }

    setNome(nome: string){
        this.nome = nome;
    }
    setIdade(idade: number){
        this.idade = idade;
    }
    setRg(rg: string){
        this.rg = rg;
    }
    getNome(){
        return this.nome;
    }
    getIdade(){
        return this.idade;
    }
    getRG(){
        return this.rg;
    }

}

//retornar com console.log