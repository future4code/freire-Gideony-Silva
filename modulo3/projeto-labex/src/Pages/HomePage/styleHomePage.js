import styled from "styled-components";

export const ContainerPai = styled.div`
display: flex;
flex-direction:column;
height: 100vh;
align-items:center;
justify-content: center;
gap: 10px;

`

export const DivCardHome = styled.div`
height: 80vh;
width: 30vw;
background-color: rgb(0,0,0);
display: flex;
flex-direction: column;
align-items: center;
justify-content:center;
border-radius: 15px;

  
`

export const BlocoFoto = styled.div`
  p {
    color: red;
    text-align:center;
    font-size: 30px;
    
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
 
}


`