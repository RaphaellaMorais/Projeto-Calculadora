export default class DataHora {

    constructor( // método - constructor recebe os elementos q vão estar nesse contexto - no caso dois atributos
        private elementoData: HTMLDivElement | null = document.querySelector("#datetime > div:nth-child(2)"),
        private elementoHora: HTMLTimeElement | null = document.querySelector("#datetime time") //DOM possui uma serie de interfaces voltadas para elementos/acesso a elementos do HTML. 
    ) {                                                                                         //Declaramos a nossa propriedade/atributo e já definimos o valor p ela;
        this.renderizar();
        setInterval(() => this.renderizar(), 1000);  //a cada 1000 segundos atualizar a informação; Vai fazer o : piscar;
    }

    renderizar() { 

        const dataAtual = new Date(); // data atual
        const dia = dataAtual.getDate(); //pegar dia
        const mes = dataAtual.toLocaleDateString("pt-BR",{month: "long"}); //idioma, como vc quer o objeto - escrito
        const ano = dataAtual.getFullYear();
        const hora = dataAtual.getHours();
        const minuto = dataAtual.getMinutes().toString().padStart(2, '0');
        

        const doisPontos = dataAtual.getSeconds() % 2 === 0 ? ":" : " ";

        this.data = `${dia} ${mes} ${ano}`;
        this.hora = `${hora}${doisPontos}${minuto}`;
    }

    set data(conteudo: string) {
        if (this.elementoData) {
            this.elementoData.innerHTML = conteudo; // acessamos a propriedade innerHTML
        }

    }

    set hora(conteudo: string) {
        if (this.elementoHora) {
            this.elementoHora.innerHTML = conteudo;
        }

    }
}

/*Retorno primeiro o elemento do documento que corresponde ao grupo especificado de especificadores. */