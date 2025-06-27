"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//faça a exportacao da classe produto e chame os metodos para insercao de valores
// e os metodos para exibicao dos valores
const produto_1 = require("./produto");
const produto = new produto_1.Produto("", "", 0);
const produto2 = new produto_1.Produto("156", "Mouse", 20);
produto.setCodigo("186");
produto.setNome("Teclado");
produto.setPreco(40);
console.log(produto.getCodigo());
console.log(produto.getNome());
console.log(produto.getPreco());
console.log(produto2.getCodigo());
console.log(produto2.getNome());
console.log(produto2.getPreco());
