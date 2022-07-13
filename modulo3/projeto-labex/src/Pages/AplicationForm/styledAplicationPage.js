import styled from "styled-components";

export const ContainerMainApplication = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
`

export const DivCover = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;


`

export const FormsContainer = styled.form`
background-color: black;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
height: 50vh;
width: 40vw;
padding: 40px;
border-radius: 40px;
box-shadow: 0 12px 16px 0 rgba(255,255,255,0.60), 0 17px 50px 0 rgba(255,255,255,0.60);
  input{
    height: 20px;
    width: 20vw;
    border-radius: 15px;
    padding: 10px;
  }
  select {
    height: 50px;
    width: 21vw;
    border-radius: 15px;
    padding: 10px;
  }

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





