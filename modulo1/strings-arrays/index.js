// Exercícios de interpretação de código

    // Exercícios 1
    let array
    console.log('a. ', array)

    array = null
    console.log('b. ', array)

    array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    console.log('c. ', array.length)

    let i = 0
    console.log('d. ', array[i])

    array[i+1] = 19
    console.log('e. ', array)

    const valor = array[i+6]
    console.log('f. ', valor)

    /*
        a. null
        b. null
        c. 11
        d. 3
        e. (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 1...]
        f. 9
    */

    // Exercícios 2
    const frase = prompt("Digite uma frase")

    console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

    /*
        vai imprimir todas as palavras em maiusculo e a quantidade 
        e vai substituir todos A por I ficando assim
        SUBI NUM ÔNIBUS EM MIRROCOS 27

    */

// 

// Exercícios de escrita de código

    // Exercícios 1
    const emailDoUsuario = prompt ("Digite seu email aqui: ")
    const nomeDoUsuario = prompt ("Digite seu nome aqui: ")
    console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`);

    // Exercícios 2
    const comidasFavoritas = ["Juçara", "strogonoff", "sushi", "churrasco", "camarão"];
    console.log(comidasFavoritas)

    console.log(`essas sao as minhas comidas favoritas: 
    ${comidasFavoritas[0]}
    ${comidasFavoritas[1]}
    ${comidasFavoritas[2]}
    ${comidasFavoritas[3]}
    ${comidasFavoritas[4]}
    `);

    const comidasFavorita = prompt("Digite sua comida favorita")
    comidasFavoritas[1] = comidasFavorita
    console.log(comidasFavoritas)

    // Exercícios 3
    const listaDeTarefas = []
    const tarefa1 = prompt("Digite a primeira tarefa")
    listaDeTarefas.push(tarefa1)
    const tarefa2 = prompt("Digite a segunda tarefa")
    listaDeTarefas.push(tarefa2)
    const tarefa3 = prompt("Digite a terceira tarefa")
    listaDeTarefas.push(tarefa3)

    console.log(listaDeTarefas);
    const tarefa = Number(prompt("Digite o Indice(0,1 ou 2) de tarefas ja concluida")
    listaDeTarefas.splice(tarefa)
    console.log(listaDeTarefas)

