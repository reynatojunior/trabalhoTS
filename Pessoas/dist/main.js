"use strict";
//dentro instanciar as classes e utilize todos os metodos 
Object.defineProperty(exports, "__esModule", { value: true });
const pessoas_1 = require("./pessoas");
const profissao_1 = require("./profissao");
const pessoas = new pessoas_1.Pessoas("Joao Silva", 25, "Estudante");
const profissao = new profissao_1.Profissao(1, "Analista de Sistemas", "Tecnologia");
profissao.setMatricula(2);
profissao.setNomeProfissao("Analista de Sistemas");
profissao.setSetor("Tecnologia");
console.log(pessoas.getNome());
console.log(pessoas.getIdade());
console.log(pessoas.getRG());
console.log(profissao.getMatricula());
console.log(profissao.getNomeProfissao());
console.log(profissao.getSetor());
