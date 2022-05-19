// Exercícios de interpretação de código

//1 
// um loop iniciando do numero zero ate parar no proximo zero que o resultado será 10   

//2
//a) 19, 21, 23, 25, 27, 30
//b) cria uma varável por fora e trata dentro do for

//3
/*
    *
    **
    ***
    ****
*/

// Exercícios de escrita de código
//1
    const quantidadePet = Number(prompt("Quantos Pets você tem?"))
    const pets =[]
    if (quantidadePet === 0) {
        console.log("Que pena! Você pode adotar um pet!")
    } else {
        for (let i = 0; i < quantidadePet; i++) {
            nomesDosPet = prompt("Qual o nome dos pets?")
            pets.push(nomesDosPet)
        }
        console.log(pets)
    }

//2

    const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    for (let i = 0; i < arrayOriginal.length; i++){
        console.log(`${arrayOriginal[i]}`)
    }

    arrayOriginal.forEach(devolverNovaArray)
    function devolverNovaArray(arrrayPares){
        console.log(arrrayPares / 10)
    }
    function arrayPares(valorArrayPar){
    if(valorArrayPar % 2 == 0)
    return valorArrayPar
    }
    if(arrayOriginal > 9 ){

    }
    for(i = 0; i <= arrayOriginal.length; i++){
    console.log(`O elemento do index ${[i]} é ${arrayOriginal[i]}`)
    }
    maiorvalor = arrayOriginal[i]
    menorValor = arrayOriginal[i+1]
    if(menorValor < maiorvalor){
        menor = menorValor
    }
    else {

    }
    console.log(`O maior valor é ${maiorvalor} é o menor ${menorValor}`)
