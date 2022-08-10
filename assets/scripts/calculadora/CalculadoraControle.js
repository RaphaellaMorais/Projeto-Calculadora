import DataHora from "./DataHora.js";
import Operacao from "./Operacao.js";
import Tela from "./Tela.js";
export default class CalculadoraControle {
    constructor(tela = new Tela(), operacao = new Operacao({
        onCalculado: (resultado) => this.tela.conteudo = resultado
    }, [], tela)) {
        this.tela = tela;
        this.operacao = operacao;
        new DataHora();
        this.eventosBotoes();
    }
    eventosBotoes() {
        document.querySelectorAll("#teclado button").forEach(elemento => {
            elemento.addEventListener("click", (evento) => {
                const target = evento.target;
                switch (target.id) {
                    case "zero":
                    case "um":
                    case "dois":
                    case "tres":
                    case "quatro":
                    case "cinco":
                    case "seis":
                    case "sete":
                    case "oito":
                    case "nove":
                        this.adicionarNumero(Number(target.dataset.valor));
                        break;
                    case "adicao":
                    case "subtracao":
                    case "divisao":
                    case "multiplicacao":
                        this.adicionarOperador(target.dataset.valor);
                        break;
                    case "ponto":
                        this.adicionarPonto(target.dataset.valor);
                        break;
                    case "limpar":
                        this.operacao.limparOperacao();
                        break;
                    case "desfazer":
                        this.operacao.desfazerOperacao();
                        break;
                    case "porcentagem":
                        this.calcularPorcentagem(target.dataset.valor);
                        break;
                    case "igual":
                        this.calcular();
                        break;
                }
            });
        });
    }
    adicionarPonto(ponto) {
        console.log('ponto');
        ponto = String(this.operacao.ultimaPosicao.toString() + ponto.toString());
        this.operacao.ultimaPosicao = ponto.toString();
    }
    calcular() {
        this.operacao.calcular();
    }
    adicionarOperacao(valor) {
        this.operacao.adicionar(valor);
    }
    adicionarNumero(numero) {
        if (this.operacao.ultimaPosicao.includes('.')) {
            console.log("achei o ponto");
            numero = Number(this.operacao.ultimaPosicao.toString() + numero.toString());
            this.operacao.ultimaPosicao = numero.toString();
        }
        else if (isNaN(Number(this.operacao.ultimaPosicao))) {
            this.adicionarOperacao(numero.toString());
        }
        else {
            numero = Number(this.operacao.ultimaPosicao.toString() + numero.toString());
            this.operacao.ultimaPosicao = numero.toString();
        }
        this.tela.conteudo = numero.toString();
    }
    adicionarOperador(operador) {
        if (isNaN(Number(this.operacao.ultimaPosicao))) {
            this.operacao.ultimaPosicao = operador;
        }
        else {
            if (this.operacao.length === 0) {
                this.adicionarOperacao("0");
            }
            this.adicionarOperacao(operador);
        }
    }
    calcularPorcentagem(porcentagem) {
        console.log('porcentagem');
        let valorTela = this.operacao.length.for();
        let valorPorcent = valorTela / 100;
        function calculandoPorcentagem(v1, v2, calc, resultadoPorcent) {
            v1 = valorTela;
            v2 = valorPorcent;
            calc = (valorTela * valorPorcent) / 100;
            resultadoPorcent = valorTela - calc;
            return resultadoPorcent;
        }
        this.operacao.adicionar;
        console.log(`${valorPorcent}${porcentagem}`);
        this.tela.conteudo = `${valorPorcent}${porcentagem}`;
    }
}
//# sourceMappingURL=CalculadoraControle.js.map