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
        let valornaTela = this.tela.conteudo.length;
        if (valornaTela > 0) {
            this.tela.conteudo = ponto;
        }
        if (valornaTela > 0) {
            let juntarValores = [];
        }
    }
    calcular() {
        this.operacao.calcular();
    }
    adicionarOperacao(valor) {
        this.operacao.adicionar(valor);
    }
    adicionarNumero(numero) {
        if (isNaN(Number(this.operacao.ultimaPosicao))) {
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
        let valorTela = parseInt(this.tela.conteudo);
        let porcent = parseInt(this.tela.conteudo) / 100;
        let calculandoPorcentagem = (valorTela * porcent) / 100;
        let valorExibir = valorTela - calculandoPorcentagem;
        console.log(valorExibir + porcentagem);
        this.tela.conteudo = valorExibir + porcentagem;
    }
}
//# sourceMappingURL=CalculadoraControle.js.map