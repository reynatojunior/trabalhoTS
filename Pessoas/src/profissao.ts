export class Profissao {


    constructor(
        private matricula: number,
        private nomeProfissao: string,
        private  setor: string
        ){
            this.matricula = matricula;
            this.nomeProfissao = nomeProfissao
            this.setor = setor
        }

        setMatricula(matricula: number){
            this.matricula = matricula;
        }
        setNomeProfissao(nomeProfissao: string){
            this.nomeProfissao = nomeProfissao;
        }
        setSetor(setor: string){
            this.setor = setor;
        }
        getMatricula(){
            return this.matricula;
        }
        getNomeProfissao(){
            return this.nomeProfissao;
        }
        getSetor(){
            return this.setor;
        }

        

        
    

}



//usar return inves de console.log