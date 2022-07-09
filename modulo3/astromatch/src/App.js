import React, { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import axios from "axios";
import Perfil from "./components/Perfil";
import MatchesScreen from "./components/MatchesScreen";

const Cabecalho = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 80px;
  margin: auto;
  

`;

const Corpo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 30vw;
  margin: auto;
  border: 1px solid black;
  background-color: white;
  padding: 8px;
  border-radius: 20px;
  
`;
const Pe = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100%;
  margin: auto;
  padding: 8px;
  
`;
const Botoes = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 20px;
  cursor: pointer;
  transition: 0.5s linear;
  border-radius: 40px;
  &:hover {
    background-color: red;
  }
`;

const BotaoTrocaTela = styled.button`
  padding: 10px;
  border-radius: 20px;
  background-color: aliceblue;
  justify-self: right;
  cursor: pointer;
  transition: 0.5s linear;
  &:hover {
    background-color: red;
  }
`;

const Titulo = styled.h2`
  padding: 8px;
  border-radius: 20px;
 
`;

const urlLimpaMatch =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gideony-ewerton-freire/clear";

const url =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gideony-ewerton-freire/person";

const urlDeuLike =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gideony-ewerton-freire/choose-person";


const App = () => {
  const [perfil, setPerfil] = useState({});
  const [telaAtual, setTelaAtual] = useState(true);

 

  const escolherPerfil = (id, boolean) => {
    const body={id: id, choice: boolean}
    axios
    .post(urlDeuLike, body)
    .then(() => trocaPerfil())
    .catch((error) => console.log(error.data.response))
  }


  const trocaPerfil = () => {
    axios
      .get(url)
      .then((response) => {
        setPerfil(response.data.profile);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  useEffect(() => {
    trocaPerfil();
  }, []);

  const limpaMatch = () => {
    axios
      .put(urlLimpaMatch)
      .then(() => {
        alert("Você limpou os matches.");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const irParaMatch = () => {
    setTelaAtual(false);
  };

  const irParaHome = () => {
    setTelaAtual(true);
  };

  if (telaAtual === true) {
    return (
      <Corpo>
        <Cabecalho>
          <Titulo>AstroMatch</Titulo>
          <BotaoTrocaTela onClick={irParaMatch}>Trocar de Tela</BotaoTrocaTela>
        </Cabecalho>
        {perfil === null ? <div>Acabaram os perfis.</div> : <><Perfil
          nome={perfil.name}
          idade={perfil.age}
          descricao={perfil.bio}
          foto={perfil.photo}
        />

        <Pe>
          <Botoes onClick={() => escolherPerfil(perfil.id, true)}> ❤️ </Botoes>
          <Botoes onClick={() => escolherPerfil(perfil.id, false)}> ❌ </Botoes>
        </Pe></>}
        
      </Corpo>
    );
  }
  if (telaAtual === false) {
    return (
      <MatchesScreen
        irParaHome={irParaHome}
        limpaMatch={limpaMatch}
      />
    );
  }
};

export default App;