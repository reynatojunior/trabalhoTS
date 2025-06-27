"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculadora = void 0;
class Calculadora {
    somar(a, b) {
        return a + b;
    }
    subtrair(a, b) {
        return a - b;
    }
    multiplicar(a, b) {
        return a * b;
    }
    dividir(a, b) {
        if (b === 0)
            throw new Error("Divisão por zero!");
        return a / b;
    }
    potencia(base, expoente) {
        return Math.pow(base, expoente);
    }
    gerarMensagem(resultado) {
        return `Resultado: ${resultado}`;
    }
    exibirMensagem(mensagem) {
        console.log(mensagem);
    }
}
exports.Calculadora = Calculadora;
