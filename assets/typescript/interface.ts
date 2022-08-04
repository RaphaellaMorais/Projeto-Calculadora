//Funcionamento e explos da interface:

/*Interface é uma ESTRUTURA que nos permite DEFINIR a FORMA DE OBJETOS.

Ela pode definir o tipo de propriedades, os parâmetros esperados por funções e o tipo de retorno dessas funções;

É como um contrato, ou acordo, que fazemos com o código. Precisamos seguir as regras definidas para que o código funcione; 

DETERMINA AS REGRAS QUE O MEU OBJETO DEVE SEGUIR, CRIA UM PADRÃO E NOS OBRIGA A SEGUIR.*/

//Exemplo de uma forma simples de tipagem de uma variável:


let endereco: {
    rua: string,
    numero: number,
    bairro: string,
    cidade: string
};

endereco = {
    rua: "Rua 26 de Abril",
    numero:1000,
    bairro: "Poço",
    cidade: "Maceió"

};