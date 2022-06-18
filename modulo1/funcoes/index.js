// Exercícios de interpretação de código
    // 1
        function minhaFuncao(variavel) {
            return variavel * 5
        }

        console.log(minhaFuncao(2))
        console.log(minhaFuncao(10))

        /*
        a)
            10
            50
    
        b)
            Não iria imprimir nada, mas iria retornar variavel * 5 mais nao irira imprimir, sem o console.log, nada será impresso
        */    

    // 2
        let textoDoUsuario = prompt("Insira um texto");

        const outraFuncao = function(texto) {
            return texto.toLowerCase().includes("cenoura")
        }
        
        const resposta = outraFuncao(textoDoUsuario)
        console.log(resposta)

        /*
        a)
            esse programa esta condicionado que so aceita a palavra cenoura como verdadeira e caso esteja maiuscula ele aplica ToLowerCase
        
        b) 
            verdadeiro
        */

//

// Exercícios de escrita de código

    //1

        //a)
            function descreverUsuario(){
                console.log(`Eu sou Gideony, tenho 25 anos, moro em São luis MA e sou estudante.`)
        //b)
            function descreverPessoa(nome, idade, cidade, profissao){
                console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
            }

    //2

        //a)
            const somarNumeros = (n1, n2) => {
                return n1 + n2
            }
            const numerosSomados = somarNumeros(2, 4)
            console.log(numerosSomados)
        
        //b)
            const maiorOuIgual = (n1, n2) => {
                return n1 >= n2
            }
            console.log(maiorOuIgual(4, 10))
        
        //c) 
            const parOuNao = (numero) => numero % 2 === 0
                console.log(parOuNao(40))
        
        //d)
            function tamanhoDoTexto(mensagem){
                const msgMaiuscula = mensagem.toUpperCase();
                console.log(`${msgMaiuscula} /Tamanho: ${msgMaiuscula.length}`)
            }
            tamanhoDoTexto("Testando funcionamento da função")

    //3
            const somar = (numero1, numero2) => {
                return numero1 + numero2
            }
            const subtrair = (numero1, numero2) => {
                return numero1 - numero2
            }
            const multiplicar = (numero1, numero2) => {
                return numero1 * numero2
            }
            const dividir = (numero1, numero2) => {
                return numero1 / numero2
            }
            
            const numero1Usuario = Number(prompt('Digite um número: '))
            const numero2Usuario = Number(prompt('Digite outro número: '))
            
            function cal(n1, n2){
                console.log(`Números inseridos: ${n1} e ${n2}`)
            
                const operacao1 = somar(n1, n2)
                console.log(`Soma: ${operacao1}`)
                const operacao2 = subtrair(n1, n2)
                console.log(`Diferença: ${operacao2}`)
                const operacao3 = multiplicar(n1, n2)
                console.log(`Multiplicação: ${operacao3}`)
                const operacao4 = dividir(n1, n2)
                console.log(`Divisão: ${operacao4}`)
            }
            
            cal(numero1Usuario, numero2Usuario)
//
            