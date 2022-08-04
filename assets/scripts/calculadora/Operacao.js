export default class Operacao {
    constructor(opts, operacao = [], tela) {
        this.operacao = operacao;
        this.tela = tela;
        this.onCalculado = opts.onCalculado;
    }
    adicionar(valor) {
        if (this.operacao.length === 3) {
            this.calcular();
        }
        this.operacao.push(valor);
        console.log(this.operacao);
        return this.length;
    }
    obterResultado() {
        let resultado = "0";
        try {
            resultado = (eval(this.operacao.join(""))).toString();
        }
        catch (e) {
            resultado = "ERRO";
        }
        return resultado;
    }
    calcular() {
        let resultado = this.obterResultado();
        if (resultado.length > 12) {
            resultado = resultado.substr(0, 12);
        }
        this.operacao = [resultado];
        this.onCalculado(resultado);
    }
    limparOperacao() {
        console.log('limpar');
        this.tela.conteudo = "0";
        this.operacao = [];
    }
    desfazerOperacao() {
        this.tela.conteudo;
        this.operacao.pop();
        console.log('desfazer');
        if (this.tela.conteudo.length > 0) {
            const str = this.tela.conteudo;
            const usingSplit = str.split('', 12);
            console.log(usingSplit);
            usingSplit.pop();
            console.log(usingSplit);
            this.tela.conteudo = usingSplit.join('');
        }
    }
    get ultimaPosicao() {
        return this.operacao.length ? this.operacao[this.operacao.length - 1] : "0";
    }
    set ultimaPosicao(valor) {
        const ultimoIndex = this.operacao.length ? this.operacao.length - 1 : 0;
        this.operacao[ultimoIndex] = valor;
    }
    get length() {
        return this.operacao.length;
    }
}
//# sourceMappingURL=Operacao.js.map