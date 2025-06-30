"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profissao = void 0;
class Profissao {
    constructor(matricula, nomeProfissao, setor) {
        this.matricula = matricula;
        this.nomeProfissao = nomeProfissao;
        this.setor = setor;
        this.matricula = matricula;
        this.nomeProfissao = nomeProfissao;
        this.setor = setor;
    }
    setMatricula(matricula) {
        this.matricula = matricula;
    }
    setNomeProfissao(nomeProfissao) {
        this.nomeProfissao = nomeProfissao;
    }
    setSetor(setor) {
        this.setor = setor;
    }
    getMatricula() {
        return this.matricula;
    }
    getNomeProfissao() {
        return this.nomeProfissao;
    }
    getSetor() {
        return this.setor;
    }
}
exports.Profissao = Profissao;
//usar return inves de console.log
