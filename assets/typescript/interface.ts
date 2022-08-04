//Funcionamento e explos da interface:

/*Interface é uma ESTRUTURA que nos permite DEFINIR a FORMA DE OBJETOS.

Ela pode definir o tipo de propriedades, os parâmetros esperados por funções e o tipo de retorno dessas funções;

É como um contrato, ou acordo, que fazemos com o código. Precisamos seguir as regras definidas para que o código funcione; 

DETERMINA AS REGRAS QUE O MEU OBJETO DEVE SEGUIR, CRIA UM PADRÃO E NOS OBRIGA A SEGUIR.*/


interface IEndereco{
    rua: string;
    numero: number;
    bairro: string;
    cidade: string; 
}


let endereco: IEndereco;

endereco = {
    rua: "Av. Paulista",
    numero:1000,
    bairro: "Ponta Verde",
    cidade: "Maceió"

};

//Para criar uma interface nos usamos a palavra interface, a seguir damos o nome da nossa interface;
//Padrão para nome de interface - pascal case(primeira letra do nome maiúscula) e acrescentar um "I";
 
//Outro Exemplo: 

interface ILivro {
    readonly titulo: string;
    preco: number;
    genero: string;
    dataLancamento?: Date; // com a ? eu defino q essa propriedade é opcional;
}

let livro: ILivro = {
    titulo: "Um lugar bem longe daqui",
    preco: 70,
    genero: "Romance",
    //dataLancamento: new Date(2022, 08, 1)
    
}

//livro.titulo = "Pânico";

console.log(livro);

//------------------Funções na interface - Definindo a forma q deve ser a minha função: 
// Note que não estou definindo qual vai ser a ação da minha função, 
//só estou dizendo q é uma função e que ela tem q esperar dis parâmetros nummericos e q tem q retornar um número;
//AQUI É UM EXEMPLO DE ASSINATURA VOLTADA P FUNÇÃO

interface ISomar {(n1:number, n2: number): number}

let minhaSoma: ISomar;

minhaSoma = (numero1, numero2) => { //Note que não precisamos declarar os tipos novamente, implicitamente ele já sabe;

    return numero1 + numero2;
}

console.log(minhaSoma(2, 3));

//---------Interface Array

interface ICategoria {
    nome: string;
    id: number;
    categoriaPai?: ICategoria;  //interface q chama ela mesma
}

const frontEnd: ICategoria = {
    nome: "Front-End",
    id: 1
}

const backEnd: ICategoria = {
    nome: "Back-End",
    id: 2
}

interface IMenu {
    categorias: ICategoria[];
}

let menu: IMenu = {
    categorias: [frontEnd, backEnd]
};

interface ITudo {
    [indice: number]: string;
}

let minhasTarefas: ITudo;

minhasTarefas = ["Estudar TypeScript", "Estudar JavaScript", "Estudar Git"];

console.log(minhasTarefas[0]);


//---------Estendendo Interface

interface ILivroDigital extends ILivro { //Aqui estamos estendendos da interface ILivro lá em cima;
    
    formato: string;
    numeroPaginas: number;

}

let livroDigital : ILivroDigital = {

    titulo: "O nome do vento",
    preco: 90,
    genero: "Fantasia",
    formato: "Epub",
    numeroPaginas: 1002

}

console.log(livroDigital);


//MÉTODO CONSTRUTOR

/*Método constructor é um método especial executado no momento em que a classe é instanciada, 
além disso os atributos da classe são definidos dentro deste método, por isso é obrigatório.

Obs - O erro SyntaxError será mostrado se a classe contiver mais de um método constructor.

Um construtor padrão será usado pela classe caso nenhum seja especificado.

constructor() {}
*/