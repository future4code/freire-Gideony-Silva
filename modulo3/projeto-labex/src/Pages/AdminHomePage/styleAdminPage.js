import styled from "styled-components";

export const ContainerPai = styled.div`
height: 100vh;

`

export const DivGeral = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 75%;

`

export const DivMap = styled.div`
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  


  div {
    height: 40px;
    display: flex;
    align-items: center;
    width: 10vw;
    padding: 10px;
    border-radius: 10px;
    
  }

  button {
    border: none;
    border-radius: 5px;
    background-color: red;
  }

`

export const ContainerLista = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  height: 75%;
  width: 60%;
  border-radius: 20px;
  
  h1 {
    color: white;
  }
`

export const Botoes = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
width: 20vw;
padding-bottom: 10px;
margin-top: 20px;

button {
  width: 10vw;
  display: flex;
  align-items: center;
  justify-content:space-evenly;

 font-weight: 500;
 font-size: 17px;
 padding: 0.8em 1.3em 0.8em 0.9em;
 color: white;
 background: #262626;
 border: none;

 border-radius: 10px;
}
`






