//Import da biblioteca
var readline = require('readline')

//Criação do objeto para manipular a entrada de dados
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
//Entrada de dados do nome
entradaDeDados.question('Digite o seu nome:', function(nome){
    //Entrada de dados valor1
    entradaDeDados.question('Digite o vlor 1:', function(valor1){
        //Entrada de dados valor2
        entradaDeDados.question('Digite o valor 2:',function(valor2){
            //Entrada de dados valor3
            entradaDeDados.question('Digite o valor 2 ',function(valor3){
                //Soma os 3 valores. A classe Number converte uma
                    //String para Número
                var soma = Number(valor1) + Number(valor2) + Number(valor3)

                console.log('Nome do usuário:' + soma)
                console.log('A soma dos valores é:' + soma )
            })//Fecha valor 3
            })//Fecha valor 2
        })//Fecha valor 1
    }) //Fecha o nome

    //como estou dentro da umaa função preciso criar outra.
    //Classe é digitada com letra mauiscula como: Number

    // var soma = Number(valor1) + Number(valor2) + Number(valor3) é diferente de:
    // Number(valor1+valor2+valor3) 




