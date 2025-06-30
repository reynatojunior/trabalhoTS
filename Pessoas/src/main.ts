//dentro instanciar as classes e utilize todos os metodos 

import { Pessoas } from "./pessoas";
import { Profissao } from "./profissao";

const pessoa = new Pessoas("Joao Silva", 25, "Estudante");
const profissao = new Profissao(1, "Analista de Sistemas", "Tecnologia");
profissao.setMatricula(2);
profissao.setNomeProfissao("Analista de Sistemas");
profissao.setSetor("Tecnologia");

const pessoa2 = new Pessoas("Mario gomes", 32, "vendedor");
const profissao2 = new Profissao(3, "Analista de Redes", "Tecnologia");


console.log(pessoa.getNome());
console.log(pessoa.getIdade());
console.log(pessoa.getRG());
console.log(profissao.getMatricula());
console.log(profissao.getNomeProfissao());
console.log(profissao.getSetor());