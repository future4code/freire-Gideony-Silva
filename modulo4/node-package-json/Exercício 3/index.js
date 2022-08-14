// Exercício 3

    const tarefas = [
        "Comprar Água",
        "Lavar carro",
        "Trabalhar"
    ];
    
    const tarefa = process.argv[3]
    
    tarefas.push(tarefa)
    
    console.log(`Tarefa ${tarefas} adicionada com sucesso!`)

    console.log("tarefas", tarefas.toString())