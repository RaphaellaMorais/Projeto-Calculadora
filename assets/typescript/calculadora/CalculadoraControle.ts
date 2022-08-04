import DataHora from "./DataHora.js";
import Operacao from "./Operacao.js";
import Tela from "./Tela.js";


export default class CalculadoraControle {   //Essa classe é como se fosse a sala de controle da calculadora;

    constructor(
        private tela = new Tela(),
        private operacao = new Operacao({
            onCalculado: (resultado: string) => this.tela.conteudo = resultado}, [], tela)
    ) {


        new DataHora();

        this.eventosBotoes();

    }

    eventosBotoes(): void {

        document.querySelectorAll("#teclado button").forEach(elemento => {

            elemento.addEventListener("click", (evento: Event) => {

                const target = evento.target as HTMLButtonElement;

                switch(target.id){

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
                        this.adicionarOperador(<string>target.dataset.valor);

                    break;

                    case "ponto":

                    break;

                    case "limpar":
                        this.operacao.limparOperacao();

                    break;

                    case "desfazer":
                        this.operacao.desfazerOperacao();

                    break;

                    case "porcentagem":

                    break;

                    case "igual":
                        this.calcular();
                    break;


                }

            });

        });
    }

    calcular(): void {

        this.operacao.calcular();
    }

    adicionarOperacao(valor: string): void {

        this.operacao.adicionar(valor);

        // console.log(this.operacao.length);
    }

    adicionarNumero(numero: number): void {

        if(isNaN(Number(this.operacao.ultimaPosicao))) {

            this.adicionarOperacao(numero.toString());

        } else {

            numero = Number(this.operacao.ultimaPosicao.toString() + numero.toString());

            this.operacao.ultimaPosicao = numero.toString();
        }


        this.tela.conteudo = numero.toString();


    }

    adicionarOperador(operador: string): void {

        if (isNaN(Number(this.operacao.ultimaPosicao))) {

            this.operacao.ultimaPosicao = operador;

        } else {

            if (this.operacao.length === 0) {

                this.adicionarOperacao("0");

            }

            this.adicionarOperacao(operador);

        }    

    }

   // desfazerOperação() : void {

     //   this.tela.conteudo.desfazerOperação();

    //}

    // limparOperacao(): void{

    //     this.tela.conteudo = "0";
    //     this.operacao.operacao = [];

    // }


}

/*Uma classe é uma representação de um tipo de objeto. Uma estrutura que descreve o objeto;

É uma boa prática exportar sempre a classe com o mesmo nome do arquivo.

-Essa classe é como se forsse a sala de controle da nossa calculadora;

-Todas as ações vão estar dentro dela mas ela vai delegar muitas funções p outras classes tbm;

-void (não retorna nada);

- live server é um servidor local p visualizar o projeto;
- 


-O método .forEach é usado para percorrer arrays, 
mas usa uma função de modo diferente do "laço for" tradicional. 
O método forEach passa uma função de callback para cada elemento do array 
juntamente aos seguintes parâmetros: Valor atual (obrigatório) - O valor do elemento atual do array.


- .querySelectorAll - Retorna uma lista de elementos presentes no documento que coincidam com o grupo de seletores especificado.


A condicional switch avalia uma expressão, combinando o valor da expressão para um cláusula case,
 e executa as instruções  associadas ao case.



A propriedade target obtém o elemento no qual o evento ocorreu originalmente
A propriedade de evento de destino retorna o elemento que acionou o evento. 


*/