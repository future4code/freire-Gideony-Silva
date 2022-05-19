// Exercícios de interpretação de código

//1
//a)
// vair ser imprimido o array com os nomes e apelidos em lista
//{nome: 'Amanda Rangel', apelido: 'Mandi'}
//{nome: 'Laís Petra', apelido: 'Laura'}
//{nome: 'Letícia Chijo', apelido: 'Chijo'}

//2
//a) so vai retornar um novo array contendo o indice e array completo igual o usuarios.
//['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

//3
//a) vai retornar um novo array
//esta retornando o  item.apelido
//o noveoArrayC vai ser um array de 2 objetos =>  [  { nome: "Amanda Rangel", apelido: "Mandi" },
//{ nome: "Laís Petra", apelido: "Laura" }, ]

// Exercícios de escrita de código

//1
const pets = [
  { nome: "Lupin", raca: "Salsicha" },
  { nome: "Polly", raca: "Lhasa Apso" },
  { nome: "Madame", raca: "Poodle" },
  { nome: "Quentinho", raca: "Salsicha" },
  { nome: "Fluffy", raca: "Poodle" },
  { nome: "Caramelo", raca: "Vira-lata" },
];

const arrayNomeDePets = pets.map((clientes) => clientes.nome);
console.log(arrayNomeDePets);

const arraySalsicha = pets.filter((pet) => pet.raca === "Salsicha");
console.log(arraySalsicha);

const arrayDesconto = pets
  .filter((pet) => pet.raca === "Poodle")
  .map(
    (pet) =>
      `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
  );
console.log(arrayDesconto);

//2
const produtos = [
  { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
  { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
  { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
  { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
  { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
  { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
  { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
  { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
  { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
  { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 },
];

function listaMercado(item, indice, array) {
  return item.nome;
}

const nomeItem = produtos.map(listaMercado);
console.log(nomeItem);

function comDesconto(item, indice, array) {
  return { nome: item.nome, preco: item.preco * 0.95 };
}

const novosPreços = produtos.map(comDesconto);

console.log(novosPreços);

function soBebidas(item, indice, array) {
  return item.categoria === "Bebidas";
}

const itensBebidas = produtos.filter(soBebidas);
console.log(itensBebidas);

function soYpe(item, indice, array) {
  if (item.nome.includes("Ypê") === true) {
    return item;
  }
}

const contemYpe = produtos.filter(soYpe);
console.log(contemYpe);

const compreYpe = [];
for (i = 0; i <= contemYpe.length - 1; i++) {
  compreYpe.push(
    `Compre ${contemYpe[i].nome} por R$ ${contemYpe[i].preco} reais.`
  );
}

console.log(compreYpe);
