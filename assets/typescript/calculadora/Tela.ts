export default class Tela {

    constructor(
        private elemento: HTMLDivElement | null = document.querySelector("#values")
    ){

        this.conteudo = "0";

    }

    set conteudo(valor: string) {

        if (valor.toString().length > 12) {
            valor = "ERRO";
        }

        if (this.elemento) {

            this.elemento.innerHTML = valor.toString().replace(".",","); 
        }

    }

    get conteudo(): string {

        return this.elemento ? this.elemento.innerHTML: "0"; //Se o elemento existe então retorna o elemento innerHTML, senão retorna o "0";

    }
}
 /*pesquisar sobre operador ternário = if em uma única linha */

 //operador ternário - frequentemente usado como um atalho para instrução if;
 //condição ? expr1 : expr2 