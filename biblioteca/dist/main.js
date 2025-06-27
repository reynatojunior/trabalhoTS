"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const autor_1 = require("./autor");
const livro_1 = require("./livro");
const autor = new autor_1.Autor("João Silva", new Date(1990, 1, 1), "Brasileira");
const livro = new livro_1.Livro("O Livro", autor, new Date(2022, 1, 1), 100, 10.99);
console.log(livro.obterInformacoes());
