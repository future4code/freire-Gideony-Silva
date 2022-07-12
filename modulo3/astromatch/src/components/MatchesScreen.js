import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components'

const FotoENome = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    padding: 10px 500px;
    border: 1px solid red;
    background-color: white;
    justify-content: space-between;
    border-radius:10px;
    margin: 50px 20px;
 
`
const Botoes = styled.button`
  
  display: flex;
  align-items: center;
  margin: auto;
  padding: 20px;
  cursor: pointer;
  border-radius: 20px;


`

const Nome = styled.p`
    padding: 10px;
    border: solid 2px red;
    background-color: red;
    border-radius: 20px;


`

const urlMostraMatches =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/gideony-ewerton-freire/matches";

const MatchesScreen = (props) => {
  const [listaDeMatch, setListaDeMatch] = useState([]);

  useEffect(() => {
    mostraMatches();
  }, []);

  const mostraMatches = () => {
    axios
      .get(urlMostraMatches)
      .then((response) => {
        setListaDeMatch(response.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  };

   const limpar = () => {
    props.limpaMatch()
    setListaDeMatch([])
   }

  return (
    <div>
      {listaDeMatch.map((pessoa) => {
        return (
          <FotoENome>
            <img width={80} height={80} key={pessoa.id} src={pessoa.photo} alt="Perfil que deu match" />
            <Nome> {pessoa.name} </Nome>
          </FotoENome>
        );
      })}
      <Botoes onClick={props.irParaHome}>Home</Botoes>
      <Botoes onClick={limpar}>Limpa Matches</Botoes>
    </div>
  );
};

export default MatchesScreen;