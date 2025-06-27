import { Autor } from "./autor";
import { Livro } from "./livro";

const autor = new Autor("João Silva", new Date(1990, 1, 1), "Brasileira");
const livro = new Livro("O Livro", autor, new Date(2022, 1, 1), 100, 10.99);

console.log(livro.obterInformacoes());
