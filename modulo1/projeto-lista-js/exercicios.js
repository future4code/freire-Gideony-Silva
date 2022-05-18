// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt("Digite a altura");
  const largura = prompt("Digite a largura");
  console.log(altura*largura);
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Digite o ano atual");
  const anoNasci = prompt("Digite o ano de nascimento");
  console.log(anoAtual-anoNasci)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const imc = peso/(altura*altura);
  return imc
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("digite seu nome");
  const idade = prompt("digite sua idade");
  const email = prompt("digite seu email");
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Digite sua primeira cor favorita");
  const cor2 = prompt("Digite sua segunda cor favorita");
  const cor3 = prompt("Digite sua terceira cor favorita");
  const corFav = [cor1, cor2, cor3];
  console.log(corFav)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const quantidadeIng = custo/valorIngresso;
  return quantidadeIng;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const vOuF = string1.length===string2.length;
  return vOuF;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const tamnhoArray = array.length-1;
  return array[tamnhoArray];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const itemB = array [array.length-1];
  const itemA = array[0];
  array[array.length-1] = itemA;
  array[0] = itemB;
  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const checaIgualdade = string1.toUpperCase()===string2.toUpperCase();

  return checaIgualdade;
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = +prompt("Digite o ano atual");
  const anoNasci = +prompt("Digite o ano de nascimento");
  const carteiraRg = +prompt("digite quando sua carteira foi emitida");

  const idadeVinte = anoAtual - anoNasci <=20 && anoAtual - carteiraRg >=5;
  const vintaAcinquenta = anoAtual - anoNasci >20 && anoAtual - anoNasci<=50 && anoAtual - carteiraRg>=10;
  const cinquentaPraMais = anoAtual - anoNasci>50 && anoAtual - carteiraRg>=15;

  console.log(idadeVinte||vintaAcinquenta||cinquentaPraMais);
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const bissexto = (ano % 4 == 0); 
  const sBissexto = (ano % 100 == 0);
  const nSbissexto = (ano % 400 == 0);

  return bissexto&&nSbissexto==sBissexto;
}


// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const idade = prompt("Tem mais de 18?");
  const medioCompleto = prompt("Tem o ensino medio completo");
  const horarioFlex = prompt("Tem disponibilidade de horario?");

  const respostas = idade=="sim" && medioCompleto=="sim" && horarioFlex=="sim"; 
  console.log(respostas);
}