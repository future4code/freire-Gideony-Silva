//---------------------------------------------------
// codigo 1
let a = 10
let b = 10

console.log(b)
/*10*/

b = 5
console.log(a, b)
/*10 5*/

//---------------------------------------------------

// codigo 2
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
/*10 10 10*/

//---------------------------------------------------

// codigo 3
let horasDeTrabalho = prompt("Quantas horas você trabalha por dia?")
let diariaDeTrabalho = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${horasDeTrabalho/diariaDeTrabalho} por hora`)
/* achei mais interessante usar o nome das variaveis dessa maneira que segue bem o dia a dia*/

//---------------------------------------------------

name = // string ele reconhece como um tipo string
idade = // undefined nao é possivel reconhecer pois nao foi inserido nem um valor
console.log(typeof name);
console.log(typeof idade);

//---------------------------------------------------

const name = (prompt("Qual seu nome?"));
let idade = (prompt("Qual sua idade?"));
console.log("Ola", name, "você tem", idade, "Anos");

//---------------------------------------------------

const corDaRoupa = ("voce esta usando roupa roxa?" );
const carro = ("voce tem carro?" );
const gatos = ("gosta de gatos?" );

const respostaRoupa = ("sim");
const respostaCarro = ("nao");
const respostaGatos = ("sim")

console.log(corDaRoupa, respostaRoupa)
console.log(carro, respostaCarro);
console.log(gatos, respostaGatos);

//---------------------------------------------------

let a = 10
let b = 25

 a = b
 b = c
 c = a 

console.log("O novo valor de a é", a) 
console.log("O novo valor de b é", b) 

//---------------------------------------------------

