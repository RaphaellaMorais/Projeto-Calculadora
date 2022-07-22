interface OperacaoOpcoes {
    onCalculado: any;
}

export default class Operacao {

    private onCalculado: any;

    constructor(opts: OperacaoOpcoes, private operacao: string[] = []) {

        this.onCalculado = opts.onCalculado;

    }

    /*Pesquisar o funcionamento do construtor dentro de uma class, se ele exitir é obrigatório executar o método que ele representa;
    Funcionamento e explos da interface; */

    adicionar(valor: string): number {

        if (this.operacao.length === 3) {
            this.calcular();
        }

        this.operacao.push(valor);

        console.log(this.operacao);

        return this.length;

    }

    obterResultado(): string {

        let resultado: string = "0";

        try {
            resultado = (eval(this.operacao.join(""))).toString();
        } catch (e) {
            resultado = "ERRO";
        }

        return resultado;
    }

    calcular():void {

        let resultado = this.obterResultado();

        if (resultado.length > 12) {
            resultado = resultado.substr(0, 12);
        }


        this.operacao = [resultado];

        this.onCalculado(resultado);

    }

    get ultimaPosicao(): string {

        return this.operacao.length ? this.operacao[this.operacao.length - 1] : "0";
    }

    set ultimaPosicao(valor: string) {

        const ultimoIndex = this.operacao.length ? this.operacao.length - 1 : 0;

        this.operacao[ultimoIndex] = valor;

    }

    get length(): number {

        return this.operacao.length;
    }
}

/*O método substr()retorna uma parte da string O especificado no índice especificado e
 estende-se posteriormente por um determinado número. */