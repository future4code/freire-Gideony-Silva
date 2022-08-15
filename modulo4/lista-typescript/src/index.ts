//Exercício 1
const nomeData = (nome: string, data: string) => {
  const array = data.split("/", data.length);
  const dia = array[0];
  const mes = array[1];
  const ano = array[2];

  return `Olá ${nome}. Voce nasceu no dia ${dia}, no mês ${mes} e ano ${ano}`;
};
console.log(nomeData("Gideony", "27/05/1996"));

//Exercício 2
const tipovariavel = (variavel: any): any => {
  return typeof variavel;
};
console.log(tipovariavel(1));
console.log(tipovariavel("oi"));
console.log(tipovariavel([1, 2, 3, 4]));
console.log(tipovariavel(undefined));

//Exercício 3
enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}

type Filme = {
  nome: string;
  anoLancamento: number;
  genero: string;
  pontuacao?: number;
};

const filme = (
  nome: string,
  anoLancamento: number,
  genero: GENERO,
  pontuacao?: number
): Filme => {
  let saida: Filme = {
    nome: nome,
    anoLancamento: anoLancamento,
    genero: genero,
  };
  pontuacao ? (saida = { ...saida, pontuacao: pontuacao }) : saida;
  return saida;
};

console.log(filme("Duna", 2021, GENERO.ACAO, 74));

//Exercício 4
enum setor {
  marketing = "marketing",
  vendas = "vendas",
  financeiro = "financeiro",
}

type colaboradores = {
  nome: string;
  salário: number;
  setor: setor;
  presencial: boolean;
};

let array: colaboradores[] = [
  { nome: "Marcos", salário: 2500, setor: setor.marketing, presencial: true },
  { nome: "Maria", salário: 1500, setor: setor.vendas, presencial: false },
  { nome: "Salete", salário: 2200, setor: setor.financeiro, presencial: true },
  { nome: "João", salário: 2800, setor: setor.marketing, presencial: false },
  { nome: "Josué", salário: 5500, setor: setor.financeiro, presencial: true },
  { nome: "Natalia", salário: 4700, setor: setor.vendas, presencial: true },
  { nome: "Paola", salário: 3500, setor: setor.marketing, presencial: true },
];

let filtro = array.filter((item) => {
  return item.setor === setor.marketing && item.presencial === true;
});

console.log(filtro);

//Exercício 5
type usuario = {
  name: string;
  email: string;
  role: string;
};

const arrayDeUsuário: usuario[] = [
  { name: "Rogério", email: "roger@email.com", role: "user" },
  { name: "Ademir", email: "ademir@email.com", role: "admin" },
  { name: "Aline", email: "aline@email.com", role: "user" },
  { name: "Jéssica", email: "jessica@email.com", role: "user" },
  { name: "Adilson", email: "adilson@email.com", role: "user" },
  { name: "Carina", email: "carina@email.com", role: "admin" },
];

const emails = (arrayDeUsuário: usuario[]): string[] => {
  return arrayDeUsuário
    .filter((user: usuario): boolean => {
      return user.role === "admin";
    })
    .map((userFilter: usuario): string => {
      return userFilter.email;
    });
};

console.log(emails(arrayDeUsuário));

//Exercício 6
type Cliente = {
  cliente: string;
  saldoTotal: number;
  debitos: number[];
};
const arrayDeClientes: Cliente[] = [
  {
    cliente: "João",
    saldoTotal: 1000,
    debitos: [100, 200, 300],
  },
  {
    cliente: "Paula",
    saldoTotal: 7500,
    debitos: [200, 1040],
  },
  {
    cliente: "Pedro",
    saldoTotal: 10000,
    debitos: [5140, 6100, 100, 2000],
  },
  {
    cliente: "Luciano",
    saldoTotal: 100,
    debitos: [100, 200, 1700],
  },
  {
    cliente: "Artur",
    saldoTotal: 1800,
    debitos: [200, 300],
  },
  {
    cliente: "Soter",
    saldoTotal: 1200,
    debitos: [],
  },
];

const atualizaSaldo = (arrayDeClientes: Cliente[]): Cliente[] => {
  return arrayDeClientes
    .map((cliente: Cliente): Cliente => {
      const debitoSoma: number =
        cliente.debitos.length > 0
          ? cliente.debitos.reduce((acc: number, cur: number) => acc + cur)
          : 0;
      const attSaldo: number = cliente.saldoTotal - debitoSoma;

      return {
        ...cliente,
        saldoTotal: attSaldo,
        debitos: [],
      };
    })
    .filter((clienteMap: Cliente): boolean => {
      return clienteMap.saldoTotal < 0;
    });
};

console.table(atualizaSaldo(arrayDeClientes));

//Exercício 7
const ajustaPreco = (preco:number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return "R$ "+valorAjustado
}
type Estoque = {
    nome: string, 
    quantidade: number, 
    valorUnitario: number | string
}

const estoque:Estoque[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

const estoqueOrdenado = (estoque:Estoque[]):Estoque[] => {
    
    return estoque.map((item:Estoque)=>{
        return {...item, valorUnitario:ajustaPreco(item.valorUnitario as number)}
    }).sort((a:Estoque, b: Estoque)=>{
        return a.quantidade - b.quantidade
    })
}

console.table(estoqueOrdenado(estoque))


//Exercício 8
const renovaCarteira = (dataNascimento:string, dataEmissao:string):boolean => {
    const anoAtual:number = new Date().getFullYear()

    const idade:number = anoAtual - Number(dataNascimento.split('/')[2])
    const tempoEmissao:number = anoAtual - Number(dataEmissao.split('/')[2])
    
    const cond1:boolean = idade <= 20 && tempoEmissao >=5
    const cond2:boolean = (idade > 20 || idade <=50) && tempoEmissao >=10
    const cond3:boolean = idade > 50 && tempoEmissao >=15

    return cond1 || cond2 || cond3
}

console.log(renovaCarteira('27/05/1996', '31/11/2018'))



//Exercício 9
const quantidadeAnagramas = (palavra:string):number => {
    let quantidade:number=1
    palavra.split('').forEach((element:string, index:number):void =>{
        quantidade = quantidade * (index+1)
    })

    return quantidade

}

console.log(quantidadeAnagramas('mesa'))