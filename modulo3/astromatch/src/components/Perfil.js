import React, {  } from "react";
import styled from "styled-components";

const Foto = styled.img`
    width:  250px;
    height: 295px;
    border-radius:10px;
    object-fit: cover;

    
`

const PerfilCard = styled.div`
    display: flex;
    flex-direction: column;
    border: solid black 1px;
    background: #262626;
    color: white;
    padding: 8px;
    align-items: center;
    border-radius:10px;
    
`

const Perfil = (props) => {
  return (
    <PerfilCard>
      <Foto src={props.foto} alt="Foto de Perfil"/>
      <h1>{props.nome}, {props.idade}</h1>
      <p>{props.descricao}</p>
    </PerfilCard>
  );
};

export default Perfil;