/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

   const inicioJogo = ()=>{

      const cartaUm = comprarCarta();
      const cartaDois = comprarCarta();
      const somaCartaUsuario = cartaUm.valor + cartaDois.valor
      console.log(`Suas Cartas:  ${cartaUm.texto} ${cartaDois.texto} - Pontuação: ${somaCartaUsuario}`)
      
      const cartaDaMaquinaUm = comprarCarta();
      const cartaDaMaquinaDois = comprarCarta();
      const somaCartaMaquina = cartaDaMaquinaUm.valor + cartaDaMaquinaDois.valor
      console.log(`Cartas da Maquina: ${cartaDaMaquinaUm.texto} ${cartaDaMaquinaDois.texto} - Pontuação: ${somaCartaMaquina}`)
      
      if(somaCartaUsuario > somaCartaMaquina){
         console.log("PARABÉNS, VOCÊ GANHOU")
      }else if(somaCartaUsuario < somaCartaMaquina){
         console.log("VOCÊ PERDEU, NÃO FIQUE TRISTE, TENTE NOVAMENTE")
      }else if(somaCartaUsuario === somaCartaMaquina){
         console.log("EMPATE")
      }
      return inicioJogo
      }
      
      alert("Boas vindas ao jogo de Blackjack!")
      if(confirm("Quer começar a rodada?")){
      console.log("----------boa sorte----------"), inicioJogo()
      } else{
         console.log("Perdeu, a Casa Ganhou de você")
      }