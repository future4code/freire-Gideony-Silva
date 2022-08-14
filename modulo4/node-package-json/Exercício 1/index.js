// Exercício 1 teste ok

    // 1:
    // A - process.argv


    const Nome = process.argv[2]

    const idade = Number(process.argv[3])

    // B 
    console.log(`Olá, ${Nome}! Você tem ${idade} anos.`)

    // C 
    console.log(`Olá, ${Nome}! Você tem ${idade} anos. Em sete anos você terá ${idade+7}`)