"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const calculadora_1 = require("./calculadora");
const calculadora = new calculadora_1.Calculadora();
// Operações
const soma = calculadora.somar(250, 150);
const divisao = calculadora.dividir(600, 3);
const pot = calculadora.potencia(2, 5);
// Exibição
calculadora.exibirMensagem(calculadora.gerarMensagem(soma));
calculadora.exibirMensagem(calculadora.gerarMensagem(divisao));
calculadora.exibirMensagem(calculadora.gerarMensagem(pot));
