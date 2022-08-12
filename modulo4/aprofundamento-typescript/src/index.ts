// Exercício 1

// A
const umaString : string = "eu sou uma string"

// B 
const umNumero : number = 26

// C
enum CoresArcoIris {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    VIOLETA = "violeta"
}

type umaPessoa = {
    nome : string,
    idade: number,
    corFavorita: CoresArcoIris
}

const detailsPessoa0: umaPessoa = {
    nome : "Pedro 0",
    idade : 38,
    corFavorita : CoresArcoIris.VIOLETA,
}
const detailsPessoa1 = {
    nome : "Pedro 1",
    idade : 38,
    corFavorita : CoresArcoIris.LARANJA,
}
const detailsPessoa2 = {
    nome : "Pedro 2",
    idade : 38,
    corFavorita : CoresArcoIris.VERMELHO,
}

console.log(detailsPessoa0 , detailsPessoa1 , detailsPessoa2)


// Exercício 2

function obterEstatisticas(numeros:number[]):object{

    const numerosOrdenados:number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:{maior:number, menor:number,media:number} = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log("a)", obterEstatisticas([2,4,56,7]))

// A
// entrada:numero(array de number) saída: estatisticas(objeto)

// B
// O entrada:numero é um array de numeros, const numerosOrdenados vai receber um array de numeros, const estatisticas recebe um objeto

// C
    //      type amostraDeIdades = {
    //     numeros:number[],
    //     obterEstatisticas: (numeros:number[])=>object}
    // 


// Exercício 3
// A, B e C
type person  = {
    autor:string,
    texto:string
}

const posts:Array<person > = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
]

function buscarPostsPorAutor(posts: person  [], autorInformado: string): person [] {
    return posts.filter(
      (person ) => {
        return person.autor === autorInformado
      }
    )
  }

console.log(buscarPostsPorAutor(posts, "Dobby"))


// Exercício 4