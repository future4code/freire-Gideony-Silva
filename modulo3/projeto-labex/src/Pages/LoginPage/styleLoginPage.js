import styled from "styled-components";

export const ContainerMainLogin = styled.div`
height: 100vh;

`



export const DivCardLogin = styled.div`
display:flex;
align-items: center;
justify-content: center;
height: 70vh;


`

export const ContainerLogin = styled.div`
background-color: black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 60vh;
width: 35vw;
border-radius: 40px;
box-shadow: 0 12px 16px 0 rgba(255,255,255,0.60), 0 17px 50px 0 rgba(255,255,255,0.60);
  h1{
    color: whitesmoke;
  }
`

export const DivInputs = styled.div`

display: flex;
flex-direction: column;
width: 25vw;;
height: 30vh;
justify-content: space-evenly;

  input{
    height: 50px;
    border-radius: 15px;
    padding: 10px;
  }
`

export const Botoes = styled.div`
display: flex;
flex-direction: row;
gap: 20px;
width: 20vw;
padding-bottom: 10px;

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

`

