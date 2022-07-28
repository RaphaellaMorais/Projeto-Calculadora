import Tela from "./Tela";

interface OperacaoOpcoes {
    onCalculado: any;
}

export default class Operacao {

    private onCalculado: any;

    constructor(opts: OperacaoOpcoes, private operacao: string[] = [], private tela: Tela) {

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

    limparOperacao(): void{

        this.tela.conteudo = "0";
        this.operacao = [];

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

/*Construtores são basicamente funções de inicialização de uma classe, 
as quais são invocadas no momento em que objetos desta classe são criadas. 
Eles permitem inicializar campos internos da classe e 
alocar recursos que um objeto da classe possa demandar. */

