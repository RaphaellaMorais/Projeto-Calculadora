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
    Funcionamento e explos da interface; **OLHAR ARQUIVO SEPARADO - interface.ts*/

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
            resultado = (eval(this.operacao.join(""))).toString(); // função + array
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
        console.log('limpar');
        this.tela.conteudo = "0";
        this.operacao = [];
        

    }

    desfazerOperacao(): void{
        this.tela.conteudo;
        this.operacao.pop();
        console.log('desfazer');

        //console.log(typeof(this.tela));

        //console.log(typeof(this.tela.conteudo));
        

        if (this.tela.conteudo.length > 0){

            let str = this.tela.conteudo;

        
            let usingSplit = str.split('', 12);

                    usingSplit.pop(); // remove elemento(do final)

            console.log(usingSplit);
            
            this.tela.conteudo = usingSplit.join(''); //O método join()  junta todos os elementos de um array em uma string e retorna esta string.
        
        }
    

    }

    calcularPorcentagem(porcentagem: string): any {
        
        console.log('porcentagem');

        let valorTela = this.operacao.shift();

        let valorPorcent = this.operacao.pop();

        console.log(typeof(valorTela));
        console.log(valorTela);

            if(this.operacao.length > 0){

                let valorPorcentagem = valorPorcent;

                let calculandoPorcentagem = (Number(valorTela) * Number(valorPorcentagem)) / 100;

                let resultadoPorcentagem = Number(valorTela) - calculandoPorcentagem;

                console.log(`${resultadoPorcentagem}${porcentagem}`);

                this.tela.conteudo = `${resultadoPorcentagem}`;

            } else {

        let valorPorcent = Number(valorTela) / 100;

        console.log(`${valorPorcent}${porcentagem}`);

        this.tela.conteudo = `${valorPorcent}${porcentagem}`;
        }

    
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









