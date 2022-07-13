import styled from "styled-components"

export const ContainerMainApplication = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
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
border-radius: 15px;

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

export const DivCover = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;


`

export const Botoes = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
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