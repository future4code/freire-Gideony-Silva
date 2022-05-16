// Exercícios de interpretação de código

    // 1 
        const filme = {
            nome: "Auto da Compadecida", 
            ano: 2000, 
            elenco: [
                "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
                "Virginia Cavendish"
                ], 
            transmissoesHoje: [
                {canal: "Telecine", horario: "21h"}, 
                {canal: "Canal Brasil", horario: "19h"}, 
                {canal: "Globo", horario: "14h"}
                ]
        }
        
        console.log(filme.elenco[0])
        console.log(filme.elenco[filme.elenco.length - 1])
        console.log(filme.transmissoesHoje[2])

        //a)
        Matheus Nachtergaele
        Virginia Cavendish
        { canal: 'Globo', horario: '14h' }

    // 2
        const cachorro = {
            nome: "Juca", 
            idade: 3, 
            raca: "SRD"
        }
        
        const gato = {...cachorro, nome: "Juba"}
        
        const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
        
        console.log(cachorro)
        console.log(gato)
        console.log(tartaruga)

        //a)
        {nome: 'Juca', idade: 3, raca: 'SRD'}
        {nome: 'Juba', idade: 3, raca: 'SRD'}
        {nome: 'Jubo', idade: 3, raca: 'SRD'}

        //b)
        /*
        permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde 
        zero ou mais argumentos (para chamadas de funções) ou elementos (para arrays literais) são esperados, ou que 
        um objeto seja expandido onde zero ou mais pares propriedade:valor (para objetos literais) são esperados.
        */

    // 3
        function minhaFuncao(objeto, propriedade) {
            return objeto[propriedade]
        }
        
        const pessoa = {
          nome: "Caio", 
          idade: 23, 
          backender: false
        }
        
        console.log(minhaFuncao(pessoa, "backender"))
        console.log(minhaFuncao(pessoa, "altura"))

        //a)
        false
        undefined

        //b)
        /* A função retorna o equivalente à: 'pessoa["nome"]' , que é uma das formas de chamar a propriedade de um objeto. */

//----------------------------------------------------------------------------------------------------------------------

    // 1
    //a)
        const objeto = {
            nome: "Gideony",
            apelidos: ["preto","gil","benevolente"]
        }

        function minhaFun (nome , apelidos){
            return `Eu sou ${nome}, mas pode me chamar de: ${apelidos[0]}, ${apelidos[1]} ou ${apelidos[2]}`
        }

        console.log(minhaFun(objeto.nome,objeto.apelidos))

    //b)
        const objeto2 = {
            ...objeto,
            apelidos: ["gidao","gedeon","buzuzuca"]
        }

        console.log(minhaFun(objeto2.nome,objeto2.apelidos))


    //2
    //a)
        const objeto1 = {
            nome:"Gideony", 
            idade:"25", 
            profissao:"Estudante"
        }
        const objeto2 = {
            nome:"Ewerton", 
            idade:"25", 
            profissao:"trabalhador"
        }
    //b)
        function recebeObj(infoPessoas){
            return [infoPessoas.nome, infoPessoas.nome.length, infoPessoas.idade, infoPessoas.profissao, infoPessoas.profissao.length]
        }
        console.log(recebeObj(objeto1))
        console.log(recebeObj(objeto2))

    //3
        const carrinho = []

        const fruta01 = {
            nome: "Uva",
            disponibilidade: true
        }
        const fruta02 = {
            nome: "Maçã",
            disponibilidade: false
        }
        const fruta03 = {
            nome: "Melancia",
            disponibilidade: true
        }

        function minhasFrutas(objFrutas){
            carrinho.push(objFrutas)
            return [fruta01, fruta02, fruta03]
        }
        minhasFrutas(fruta01, fruta02, fruta03)
    console.log(minhasFrutas(carrinho))