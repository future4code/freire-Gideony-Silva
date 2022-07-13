import styled from "styled-components";

export const MainContainer = styled.div`
  h1{
    color: black;
    text-align: center;
  }
`

export const ContainerButtons = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
height: 10vh;
margin: 10px 0;
gap: 20px;
`

export const DivDoMap = styled.div`
background-color: #262626;
color: white;
width: 40vw;
margin-bottom: 5vh;
display:flex;
flex-direction: column;
text-align: center;
border-radius: 25px;

`

export const TripsDiv = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;


`

export const Botao = styled.div`

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




