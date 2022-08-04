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