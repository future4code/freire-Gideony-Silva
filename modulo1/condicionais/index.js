// Exercícios de interpretação de código

    //1
    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)

    if (numero % 2 === 0) {
    console.log("Passou no teste.")
    } else {
    console.log("Não passou no teste.")
    }
    //a)
        //Realiza teste para ver se o numero digitado pelo usuario pode ser ou nao Par ou Impar
    //b) par
    //c) impar

    //2
    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
        case "Laranja":
        preco = 3.5
        break;
        case "Maçã":
        preco = 2.25
        break;
        case "Uva":
        preco = 0.30
        break;
        case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
        default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

    //a) para automatizar algumas tarefas de um supermercado, assim que o cliente chama pelo nome da fruta corretamente logo vem o preço 
    //b)O preço da fruta  Maçã  é  R$  2.25
    //c)O preço da fruta  Pêra  é  R$  5

    //3
    const numero = Number(prompt("Digite o primeiro número."))

    if(numero > 0) {
    console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
    }

    console.log(mensagem)

    //a) pedindo para o usuario digitar um numero 
    //b) se o usuario digitar 10 vai ser impresso 'Esse número passou no teste', caso o usuario digite -10 ira dar erro pois nao - 10 nao é maior que 0 e nao foi usado nem um if/else
    //c) A ausência do else não da nenhum erro

//

//Exercícios de escrita de código

    //1
    const idade = Number(prompt("Digite sua idade:"))

    if (idade<18){
        console.log("Você não pode dirigir.")
    }else{
        console.log("Você pode dirigir.")
    }

    //2
    const turno = prompt("Qual seu Turno. Digite: M para Manhã - V para Vespertino - N para Noturno")
        
    if(turno.toUpperCase() === "M" ){
        console.log("Bom dia!")
    }else if(turno.toUpperCase() === "V"){
        console.log("Boa tarde!")
    }else if(turno.toUpperCase() === "N"){
        console.log("Boa noite!")
    }else{
        console.log("Digite uma Opção Valida! -> M - V - N")
    }
    
    //3
    const turnoSC = prompt("Qual seu Turno. Digite: M para Manhã - V para Vespertino - N para Noturno")
    
    switch (turnoSC.toLocaleUpperCase()) {
        case "M":
            console.log("Bom dia!")
            break;
        case "V":
            console.log("Boa tarde!")
            break;
        case "N":
            console.log("Boa noite")
        default:
            console.log("Digite uma Opção Valida! -> M - V - N")
            break;

    //4
    let genero = prompt("Qual o gênero de filme que vão assistir ")
    let valorDoIngresso = +prompt("Qual o valor do ingresso")
    
    let condicional = genero.toLowerCase() === "fantasia" && valorDoIngresso < 15

    switch (condicional) {
        case true:
            console.log("Bom filme!")
            break;
    
        default:
            console.log("Escolha outro filme :(")
            break;
    }
