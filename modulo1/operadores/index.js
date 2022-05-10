//Exercícios de interpretação de código

    // Exercício 1
    const bool1 = true
    const bool2 = false
    const bool3 = !bool2

    let resultado = bool1 && bool2
    console.log("a. ", resultado)

    resultado = bool1 && bool2 && bool3 
    console.log("b. ", resultado) 

    resultado = !resultado && (bool1 || bool2) 
    console.log("c. ", resultado)

    console.log("d. ", typeof resultado) 


    /*
    a.  false
    b.  false
    c.  true
    d.  boolean 
    */


    // Exercício 2
    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")

    const soma = primeiroNumero + segundoNumero

    console.log(soma)
    /*
        o resultado sera (1010) 
        nao é possivel somar texto o prompt so imprime String
    */


    // Exercício 3
    let primeiroNumero = prompt("Digite um numero!")
    let segundoNumero = prompt("Digite outro numero!")

    let soma = Number(primeiroNumero) + Number(segundoNumero)

    console.log(soma)
    /*
        podemos chegar no resultado correto
        mudando de const para let e adicionando Number chegamos ao resultado correto a soma dos dois numeros 
    */
//

//----------------------------------------------------------------------------------------------------------------------------

//Exercícios de escrita de código

    // Exercício 1
    const idadeA = prompt("Qual é a sua idade? ");
    const idadeB = prompt("Qual é a idade do seu melhor amigo(a) ")

    console.log("Sua idade é maior do que a do seu amigo(a)? ", idadeA > idadeB, "a diferença de idade é:", idadeB-idadeA)

    // Exercício 2
    const numPar = Number (prompt ("Digite um numero Par? "))
    const resultado = numPar / 2
    console.log(resultado)

    // Exercício 3
    const idade = Number (prompt ("Qual é Sua idade? "))
    const meses = 12
    const dias = idade * 365
    const horas = dias * 24

    console.log(idade * 12);
    console.log(dias);
    console.log(horas);

    // Exercício 4 
    const numero1 =Number(prompt("Digite um numero: "))
    const numero2 =Number(prompt("Digite outro numero: "))
    
    console.log("O primeiro numero é maior que segundo?", numero1 > numero2);
    console.log("O primeiro numero é igual ao segundo?", numero1 === numero2);
    console.log("O primeiro numero é Divisivel pelo segundo?", numero1 % numero2 === 0);
    console.log("O segundo numero é Divisivel pelo primeiro?", numero2 % numero1 === 0);

//




