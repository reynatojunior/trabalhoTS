import { Calculadora } from "./calculadora";

const calculadora = new Calculadora();

// Operações
const soma = calculadora.somar(250, 150);
const divisao = calculadora.dividir(600, 3);
const pot = calculadora.potencia(2, 5);

// Exibição
calculadora.exibirMensagem(calculadora.gerarMensagem(soma));
calculadora.exibirMensagem(calculadora.gerarMensagem(divisao));
calculadora.exibirMensagem(calculadora.gerarMensagem(pot));